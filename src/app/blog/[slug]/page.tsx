import { getPostsPath } from '@/utils/utils'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const postPath = getPostsPath()
    const markdownFile = fs.readFileSync(path.join(postPath, slug + '.mdx'), 'utf-8')
    const { data: frontMatter, content } = matter(markdownFile)
    console.log(content)
    return (
        <article className='prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto'>
            <h1>{frontMatter.title}</h1>
            <MDXRemote source={content} />
        </article>
    )
}