"use client";

import { ApiRoutes } from "@/enums/ApiRoutes";
import { User } from "@/schema";
import { FC, useEffect, useState } from "react";

export const UsersList: FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(ApiRoutes.Users)
      .then((response) => response.json())
      .then((data: User[]) => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map((user: User) => (
        <li key={user.id}>
          {user.fullName}, <a href={`callto:${user.phone}`}>{user.phone}</a>
        </li>
      ))}
    </ul>
  );
};
