import { UsersTable } from "src/features/users/components/UsersTable";
import { getUsers } from "../utils/UsersUtil";

async function fetchGetUsers() {
  try {
    const users = await getUsers();
    return users;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Home() {
  const users = await fetchGetUsers();
  return <UsersTable users={users} />;
}
