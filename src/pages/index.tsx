import AchievementsView from "@/components/achievements"
import Content from "@/components/content"
import JumpLink from "@/components/jumplink"
import Layer from "@/components/layer"
import LinkButton from "@/components/linkbutton"
import MarkedContent from "@/components/marked_content"
import LinkedTable from "@/components/linked_table"
import getBlogsdata from "@/lib/blogs"

export async function getStaticProps() {
    const allBlogsData = getBlogsdata()
    return {
        props:{
            allBlogsData
        }
    }
}


const Index = (props: any) => {
    const blogsInfo: any = props.allBlogsData.map((data: any)=>{
        return [data.date, data.title, data.slug]
    }).slice(0,5)

    return (
        <Layer pageTitle="ホーム">
            <MarkedContent title="About Me" background="#D3DAE5">
                <p>
                    プログラミング好きの大学一年生。中学一年生からC++に触れて、Pythonなども使いながら競技プログラミング/アプリ開発などをやってます。<br />
                </p>
                <LinkButton href='/about'>About</LinkButton>
            </MarkedContent>
            <MarkedContent title="Skills" background="">
                <Content title="プログラミング">
                    競技プログラミングがメインで、その次にアプリ/ゲーム開発、AI開発をやっています。 <br />
                    競技プログラミングでは現在水色コーダーとして絶賛競技中で、アプリ開発ではある大会でデザイン優秀賞を受賞、他にもOpenSiv3Dというライブラリに多少の貢献をしていたりしてます!<br />
                    AI開発は、自力でニューラルネットワークを組む程度には実力があります
                </Content>
                <Content title="Web開発">
                    時々htmlやjsなどを叩いてます。このページも自作です
                </Content>
            </MarkedContent>
            <MarkedContent title="Achievements" background="#D3DAE5">
                <AchievementsView limit={5}></AchievementsView>
                <LinkButton href='/achieve'>Achievements</LinkButton>
            </MarkedContent>
            <MarkedContent title="Blogs" background="">
                <LinkedTable items={blogsInfo}></LinkedTable>
                <LinkButton href='/blogs'>Blogs</LinkButton>
            </MarkedContent>
            <MarkedContent title="Links" background="#D3DAE5">
                <JumpLink href="https://twitter.com/luke02561">Twitter</JumpLink>
                <JumpLink href="https://github.com/Luke256">GitHub</JumpLink>
                <JumpLink href="https://atcoder.jp/users/yuta28">AtCoder</JumpLink>
                <JumpLink href="https://qiita.com/luke02561">Qiita</JumpLink>
                <JumpLink href="https://zenn.dev/luke256">Zenn</JumpLink>
                <JumpLink href="https://www.resume.id/luke256">resume</JumpLink>
                <JumpLink href="https://misskey.io/@luke0256">misskey</JumpLink>
                <JumpLink href="https://bsky.app/profile/luke256.dev">BlueSky</JumpLink>
            </MarkedContent>
        </Layer>
    )
}

export default Index