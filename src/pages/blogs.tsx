import Layer from '@/components/layer'
import getBlogsData from '../lib/blogs'
import LinkedTable from '@/components/linked_table'
import Content from '@/components/content'
import { NextSeo } from 'next-seo'

export async function getStaticProps() {
    const allBlogsData = getBlogsData()
    return {
        props:{
            allBlogsData
        }
    }
}

const Blogs = (props: any) => {
    const blogsInfo = props.allBlogsData.map((data: any)=>{
        return [data.date, data.title, data.slug]
    })
    return (
        <Layer pageTitle='Blogs'>
            <NextSeo
                title="Blogs - Luke"
                openGraph={{
                    url: "https://luke256.dev/blogs"
                }}
            />
            <Content title='Lukeのブログ'>
                <LinkedTable items={blogsInfo}></LinkedTable>
            </Content>
        </Layer>
    )
}

export default Blogs