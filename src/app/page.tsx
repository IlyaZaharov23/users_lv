import { UsersTable } from "src/features/users/components/UsersTable";
import { UsersUtil } from "../utils/UsersUtil";

async function getUsers() {
  try {
    const users = await UsersUtil.getUsers();
    return users;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const users = await getUsers();
  return <UsersTable users={users} />;
}
