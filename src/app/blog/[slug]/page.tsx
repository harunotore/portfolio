import { getPostsPath } from '@/utils/utils'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import ReactMarkdown from 'react-markdown'

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const postPath = getPostsPath()
    console.log(postPath)
    const markdownFile = fs.readFileSync(path.join(postPath, slug + '.mdx'), 'utf-8')
    const { data: frontMatter, content } = matter(markdownFile)
    console.log(frontMatter, content)

    return (
        <article className='px-20'>
            <h1 className='text-4xl'>{frontMatter.title}</h1>
            <p>{frontMatter.date}</p>
            
            <div className='markdown'>
                <ReactMarkdown>
                    {content}
                </ReactMarkdown>
            </div>
        </article>
    )
}