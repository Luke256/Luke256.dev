import * as fs from 'fs';
import path from 'path'
import matter from 'gray-matter'

const blogsDirectory: string = path.join(process.cwd(), 'posts')

const getBlogsdata = () => {
    const fileNames = fs.readdirSync(blogsDirectory)

    const allBlogsData = fileNames.map((fileName: string) => {
        const fullPath: string = path.join(blogsDirectory, fileName, "index.md")
        const fileContents = fs.readFileSync(fullPath, 'utf-8')

        const matterResult = matter(fileContents)

        return {
            fileName,
            ...matterResult.data
        }
    })

    return allBlogsData.sort((a:any,b:any)=>{
        if (a.date < b.date) {
            return 1
        }
        else {
            return -1
        }
    })
}

export default getBlogsdata