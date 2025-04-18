import React from 'react'


export default function PostCard({ post }) {
    return (
        <div>
            <img src="{post.frontMatter.thumbnail}" alt="postCardImage" />
            <div>
                <h2>{post.frontMatter.title}</h2>
                <p>{post.frontMatter.description}</p>
            </div>
            <div>
                <h2> 📅{post.frontMatter.date}</h2>
                <p>⏰{post.frontMatter.readTime} min read</p>
            </div>
        </div>
    )
}
