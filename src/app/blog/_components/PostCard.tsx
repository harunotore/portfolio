import { metaType } from "@/types/types";
import { Box, Card } from "@radix-ui/themes";
import Link from "next/link";

export default function PostCard({ slug, meta }: {
    slug: string, meta: metaType
}) {
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