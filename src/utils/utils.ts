import path from "path"

export const getPostsPath = () => {
    const filePath = path.join(process.cwd(), "/src/posts")
    return filePath

}