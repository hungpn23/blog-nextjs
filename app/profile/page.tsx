import { getUser } from "@/actions/fetch-data.action";
import { UserAvatar } from "@/components/client-components/user-avatar";
import { PageBody } from "@/components/layouts/page-body";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IMAGE_HOST } from "@/lib/constants";
import dayjs from "dayjs";
import Image from "next/image";

export default async function ProfilePage() {
  const user = await getUser();

  if ("statusCode" in user) throw new Error("Something went wrong!");

  return (
    <PageBody>
      <div className="container mx-auto p-4 text-base">
        <Card className="mx-auto w-full max-w-3xl">
          <div className="flex">
            <div>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    className="rounded-full"
                    src={`${IMAGE_HOST}${user.avatar}`}
                    alt={user.username}
                    height={60}
                    width={60}
                  />
                  <div>
                    <CardTitle className="mb-1 text-2xl">
                      {user.username}
                    </CardTitle>
                    <Badge variant="outline">{user.role}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-1 font-semibold">Email</h3>
                    <p>{user.email}</p>
                    {!user.isEmailVerified && (
                      <Badge variant="destructive" className="mt-1">
                        Not Verified
                      </Badge>
                    )}
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Bio</h3>
                    <p>{user.bio || "No bio provided"}</p>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Account Created</h3>
                    <time>{dayjs(user.createdAt).format("DD-MM-YYYY")}</time>
                  </div>
                </div>
              </CardContent>
            </div>
            <div>
              <UserAvatar user={user} />
            </div>
          </div>
        </Card>
      </div>
    </PageBody>
  );
}
