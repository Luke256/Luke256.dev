import AchievementsView from "@/components/achievements";
import Content from "@/components/content";
import Layer from "@/components/layer";
import { NextSeo } from "next-seo";

const Achieve = () => {
    return (
        <Layer pageTitle="Achievements">
            <NextSeo
                title="Achievements - Luke"
                openGraph={{
                    url: "https://luke256.dev/achieve"
                }}
            />
            <Content title="Achievements">
                <AchievementsView></AchievementsView>
            </Content>
        </Layer>
    )
}

export default Achieve