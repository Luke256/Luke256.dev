import Content from "@/components/content";
import Layer from "@/components/layer";
import LinkButton from "@/components/linkbutton";
import React from "react";

const NotFountPage = () => {
    return (
        <Layer pageTitle="404 error">
            <Content title="お探しのページが見つかりませんでした。">
                <div>
                    申し訳ありません。お探しのページが見つかりませんでした。<br/>
                    お探しののページは削除または移動された可能性があります。
                </div>
                <br />
                <LinkButton href="/">ホーム</LinkButton>
            </Content>
        </Layer>
    )
}

export default NotFountPage