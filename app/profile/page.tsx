import { getProfile } from "@/actions/fetch-data.action";
import { PageBody } from "@/components/layouts/page-body";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function ProfilePage() {
  const user = await getProfile();

  if (!user) throw new Error("Something went wrong!");
  console.log(`http://localhost:3001/uploads/${user.avatar}`);

  console.log(user);

  return (
    <PageBody>
      <h1>Profile Page</h1>
      <p>{user?.toString()}</p>
      <Avatar>
        <AvatarImage src="" alt="" />
        <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
      </Avatar>
    </PageBody>
  );
}
