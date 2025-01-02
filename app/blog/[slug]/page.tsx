import { PageBody } from "@/components/layouts/page-body";

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <PageBody>{slug}</PageBody>;
}
