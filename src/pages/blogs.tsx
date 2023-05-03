import Layer from '@/components/layer'
import getBlogsData from '../lib/blogs'
import LinkedTable from '@/components/linked_table'
import Content from '@/components/content'

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
            <Content title='Lukeのブログ'>
                <LinkedTable items={blogsInfo}></LinkedTable>
            </Content>
        </Layer>
    )
}

export default Blogs