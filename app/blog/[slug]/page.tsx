import { Container } from "@/components/layouts/container";

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <Container>{slug}</Container>;
}
