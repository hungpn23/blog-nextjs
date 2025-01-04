import { getUser } from "@/actions/fetch-data.action";
import { Container } from "@/components/layouts/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
  Table,
} from "@/components/ui/table";
import { IMAGE_HOST } from "@/lib/constants";
import dayjs from "dayjs";
import Image from "next/image";

const posts = [
  {
    id: "POST001",
    title:
      "Getting Started with Next.js... (this is a long title..............................)",
    status: "Published",
    date: "2025-01-01",
    comments: 5,
  },
  {
    id: "POST002",
    title: "Why I Love React",
    status: "Draft",
    date: "2025-01-02",
    comments: 0,
  },
  {
    id: "POST003",
    title: "Building with shadcn/ui",
    status: "Published",
    date: "2025-01-03",
    comments: 12,
  },
  {
    id: "POST004",
    title: "The Future of Web Development",
    status: "Published",
    date: "2025-01-03",
    comments: 8,
  },
];

export default async function ProfilePage() {
  const user = await getUser();

  if ("statusCode" in user) throw new Error("Something went wrong!");

  return (
    <Container>
      {/* user profile */}
      <Card className="border-none shadow-none">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Image
                className="rounded-full"
                src={`${IMAGE_HOST}${user.avatar}`}
                alt={user.username}
                height={100}
                width={100}
              />
              <div>
                <CardTitle className="text-2xl">{user.username}</CardTitle>
                <Badge variant="outline">{user.role}</Badge>
              </div>
            </div>

            {/* TODO: add functionality */}
            <Button variant="outline">Update profile</Button>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">
                <em>Email</em>
              </h3>
              <div className="flex gap-4">
                <p>{user.email}</p>
                {!user.isEmailVerified && (
                  <Badge variant="destructive">not verified</Badge>
                )}
              </div>
            </div>

            <div>
              <h3 className="font-semibold">
                <em>Bio</em>
              </h3>
              <p>{user.bio || "No bio provided"}</p>
            </div>

            <div>
              <h3 className="font-semibold">
                <em>Account Created</em>
              </h3>
              <time>{dayjs(user.createdAt).format("DD-MM-YYYY")}</time>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* user posts */}
      <Card className="mt-10">
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle className="text-xl">Your posts</CardTitle>

            {/* TODO: add functionality */}
            <Button variant="outline">Add a new post</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>TODO: add some captions here...</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.id}</TableCell>
                  <TableCell>{post.title}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        post.status === "Published" ? "default" : "secondary"
                      }
                    >
                      {post.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{post.date}</TableCell>
                  <TableCell className="text-right">{post.comments}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}>Total Posts</TableCell>
                <TableCell className="text-right">{posts.length}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </CardContent>
      </Card>
    </Container>
  );
}
