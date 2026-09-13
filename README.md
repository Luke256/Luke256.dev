# Luke256.dev

https://luke256.dev のソースコード

## ブログを書く

1. `blogs/<slug>.mdx` を作成します。ファイル名がそのまま `/blogs/<slug>` のURLになり、一覧にも自動で追加されます。
2. ファイルの先頭にメタデータを書き、その下にMDXで本文を書きます。
3. `bun dev` を実行し、`http://localhost:3000/blogs/<slug>` とブログ一覧を確認します。

記事の冒頭にyaml形式のメタデータを付与することができます。

サンプル:
```mdx
---
createdAt: 2026-09-14
keywords:
  - Next.js
---

# 記事タイトル

# 目次

# はじめに

本文を書きます。
```

メタデータのルールは次のとおりです。

| 項目 | 必須 | 内容 |
| --- | --- | --- |
| `createdAt` | 必須 | 投稿日を `YYYY-MM-DD` 形式で指定します。 |
| `title` | 任意 | 省略時は本文の最初の見出しを使います。先頭を `h1`（`#`）にすると、ページタイトルとして使った見出しは本文から除外されます。 |
| `updatedAt` | 任意 | 省略時は `createdAt` を使います。記事を更新したときだけ指定します。 |
| `keywords` | 任意 | 検索用キーワードをYAMLの配列で指定します。 |

この他、[Next.js の Metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields) に対応するフィールドを使うことができます。

`title` を明示した場合、本文の先頭見出しは通常どおり表示されます。

画像は `public/assets/blog/<slug>/` に置き、本文から `/assets/blog/<slug>/<ファイル名>` で参照します。

```mdx
![画像の説明](/assets/blog/example/image.png)
```

`# 目次` を置くと見出しから目次が生成されます。Tweetを埋め込む場合はIDを指定します。

```mdx
<Tweet id="2098320909652340753" />
```
