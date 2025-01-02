"use client";

import { UserType } from "@/types/data.type";

export function UserAvatar({ user }: { user: UserType }) {
  if (!user.avatar) {
    return (
      <div className="h-10 w-10 rounded-full">
        {user.username.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return <>user avatar</>;
}
