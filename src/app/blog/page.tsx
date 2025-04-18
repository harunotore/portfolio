import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import { getPostsPath } from '@/utils/utils';
import PostCard from './_components/PostCard';
import { metaType } from '@/types/types';

export default function page() {
    const postPath = getPostsPath()
    const files = fs.readdirSync(postPath)
    const filesFiltered = files.filter(file => file.split('.')[1] == "mdx");

    const posts = filesFiltered.map(file => {
        const fileData = fs.readFileSync(path.join(postPath, file), 'utf-8');
        const { data } = matter(fileData);
        return {
            meta: data,
            slug: file.split('.')[0],
        }
    })

    const postsList2 = posts.map((post) =>
        <PostCard key={post.slug} slug={post.slug} meta={post.meta as metaType} />
    )
    return (
        <main className="flex flex-col px-8">
            <h1 className="text-3xl font-bold">
                My Blogging Site
            </h1>

            <section className='py-10'>
                <h2 className='text-2xl font-bold'>
                    Latest Blogs
                </h2>

                <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 '>
                    {postsList2}
                </div>
            </section>
        </main>
    )
}