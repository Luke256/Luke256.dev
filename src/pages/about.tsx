import Content from "@/components/content";
import Layer from "@/components/layer";

const About = () => {
    return (
        <Layer pageTitle="About">
            <Content title="Prolile">
                LukeというHNで活動している高校三年生です。プログラミングやWeb制作、電子工作を趣味にしています。<br/>
                プログラミングは読む程度なら大体の言語(BrainF**k含め)はいけると思います。競技プログラミングが好きです。<br/>
                Web制作は、このページを自力で作る程度の実力があります。<br/>
                稀によくボルダリングをやってたりしてます<br/>
                <br/>
                Name: Luke (Luke256)<br/>
                Birthday: Feb 8 2006
            </Content>
            <Content title="About this Page">
                <p>このページはNode.jsで作成しています。ブログページも開設予定。</p>
            </Content>
        </Layer>
    )
}

export default About