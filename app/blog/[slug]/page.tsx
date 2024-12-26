import { PageBody } from "@/components/layouts/page-body";

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <PageBody>Post Detail Page</PageBody>;
}
