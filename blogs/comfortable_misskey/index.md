---
slug: "/post/comfortable-misskey"
title: "misskeyインスタンス構築 - 環境整備編"
date: "2023-05-04"
update: "2023-05-04"
---

僕のmisskeyのインスタンスはラズパイで立てているので、電源周りやらストレージやらがいつ壊れるか少し怖い。

なので、万が一ラズパイにミサイルが飛んできて壊れても大丈夫なように、データベースとストレージを自動バックアップとらせたりクラウド上にあげたりした

ほかにもいろいろやった

# オブジェクトストレージの使用
misskeyインスタンスの「files」フォルダでは、インスタンスのドライブ上のファイルや、連合先から流れてきたファイルが保存される。  
これをオブジェクトストレージを使うように設定することで、ミサイルで消し飛ぶこと回避できる。

使ったのはみんな大好き[CloudflareのR2](https://www.cloudflare.com/ja-jp/products/r2/)


## bucketの作成、設定
まずはダッシュボードからR2を選択して、「Create bucket」を選択。

> この時、料金プランの選択があるかもしれないけれど、個人用インスタンスで普通に使っている範囲であればまず料金は発生しないので大丈夫

そしたらBucket nameを良い感じに設定してあげて、作成。

今度はSettingsに移動して、misskeyからBucketをいじるためのURLを用意する。

二つやり方があって、

- Custom Domainsから自分で新しく設定する
- 「R2.dev subdomain」にあるドメインを有効化する

僕はドメインに統一性が出るので前者でやった。

## API Tokenの作成
そしたらまずは、misskeyがBucketを使えるように、APIトークンを作ってあげる必要がある。

R2のダッシュボードに戻って、右上の「Manage R2 API Tokens」からAPIトークンを作る。

「Create API token」から、

- Token name: 好きな名前を
- Permissions: Edit
- TTL: 良い感じに(僕はForeverにした)

と設定して(下のやつは放置で大丈夫)、作成。

![設定後](/posts/comfortable_misskey/image1.png)

すると、AccessKeyIDとSecretAccessKeyの二つが出てくるので、必ずメモしておく

**この二つはこの先二度と出てこないので注意**

## misskeyの設定
コントロールパネルから「オブジェクトストレージ」を探して、

- Base URL: 設定した/有効化したURL
- Bucket: 作成したBucketの名前
- Prefix: 適当に
- Endpoint: Bucketの詳細を開いたときに、Bucket名の下に出ているURLの、「https://」と最後のBucket名を除いた文字列(\*\*\*\*.r2.cloudflarestorage.com)
- Region: auto
- Access key: メモしたAccessKeyID
- Secret key: メモしたSecretAccessKey

下の4つはよくわかっていないけれど、オン/オフ/オフ/オンにして動かしている。

設定後(クリックして拡大)↓

![設定後画像](/posts/comfortable_misskey/image2.png)

これで実際に画像をアップロードしてみて、正常にできていたら完了。  

# バックアップを自動で取る

毎日午前3時に自動でバックアップを取って、GoogleDriveにアップロードさせる

ディレクトリ構造はこんな感じ

```
.
├── backup
│   ├── client_secrets.json
│   ├── dumps/
│   ├── main.py
│   ├── saved_credentials.json
│   └── settings.yaml
└── misskey
    └── misskeyもろもろ
```

ファイルの説明
- client_secrets.json: GoogleAPIを作った時にダウンロードするもの
- dumps: データベースのバックアップ(なくていい)
- main.py: 実際にバックアップを取ってアップロードするやつ
- saved_credentials.json: GoogleAPIを叩くときの認証情報
- setting.yaml: GoogleAPIの設定ファイル

main.pyはこんな感じ  
misskeyのディレクトリに移動して圧縮されたダンプファイルをbackupに作成、それをGoogleAPIを使ってアップロードしている。かなり簡素

```python
from pydrive2.auth import GoogleAuth
from pydrive2.drive import GoogleDrive

import subprocess
import datetime

class GoogleDriveClient:

    def __init__(self):
        self.gauth = GoogleAuth()
        self.gauth.LocalWebserverAuth()

        self.drive = GoogleDrive(self.gauth)

    def uploadFile(self, filePath: str, parentID):
        file = self.drive.CreateFile({"parents": [{"id": parentID}]})

        file.SetContentFile(filePath)

        file["title"] = filePath.split('/')[-1]

        file.Upload()

filename = f"{datetime.datetime.now().strftime('%Y%m%d%H%M%S')}.dump.gz"

# dump database
subprocess.run(f"sudo docker compose exec -T db pg_dumpall -U **** | gzip -c > ../backup/dumps/{filename}", shell=True, cwd=r"../misskey")

# upload dump
drive = GoogleDriveClient()

drive.uploadFile("dumps/"+filename, "id_of_target_folder")
```

本質的ではないが、setting.yamlはこんな感じになっている

```yaml
client_config_file: client_secrets.json

save_credentials: True
save_credentials_backend: file
save_credentials_file: saved_credentials.json

get_refresh_token: True
```

これでラズパイにミサイルが撃ち込まれても大丈夫になった

参考まで