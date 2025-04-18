import { PostCardType } from "@/types/types";
import { Box, Card, Text } from "@radix-ui/themes";
import Link from "next/link";

export default function PostCard({ slug, meta }: PostCardType) {
    return (
        <div>
            <Card asChild size={"5"}>
                <div className="">
                    <Link href={'/blog/' + slug}>
                        <Box >{meta.thumbnail}</Box>
                        <Box>{meta.title}</Box>
                        <Box>{meta.date}</Box>
                        <Box>{meta.description}</Box>
                    </Link>
                </div>
            </Card>
        </div>
    )
}