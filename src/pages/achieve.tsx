import AchievementsView from "@/components/achievements";
import Content from "@/components/content";
import Layer from "@/components/layer";

const Achieve = () => {
    return (
        <Layer pageTitle="Achievements">
            <Content title="Achievements">
                <AchievementsView></AchievementsView>
            </Content>
        </Layer>
    )
}

export default Achieve