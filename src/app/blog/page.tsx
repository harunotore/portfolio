import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head';
import { getPostsPath } from '@/utils/utils';

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
    });

    console.log(posts)
    return (
        <main className="flex flex-col">
            <h1 className="text-3xl font-bold">
                My Blogging Site
            </h1>


            <section className='py-10'>
                <h2 className='text-2xl font-bold'>
                    Latest Blogs
                </h2>

                <div className='py-2'>
                    {posts.map(blog => (
                        <Link href={'/blog/' + blog.slug} passHref key={blog.slug}>
                            <div className='py-2 flex justify-between align-middle gap-2'>
                                <div>
                                    <h3 className="text-lg font-bold">{blog.meta.title}</h3>
                                    <p className="text-gray-400">{blog.meta.description}</p>
                                </div>
                                <div className="my-auto text-gray-400">
                                    <p>{blog.meta.date}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}