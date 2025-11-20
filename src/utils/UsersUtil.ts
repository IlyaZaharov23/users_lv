"use server";

import fspromise from "fs/promises";
import path from "path";
import { UserType } from "../features/users/types";

const filePath = path.join(process.cwd(), "users.json");

export async function getUsers(): Promise<UserType[]> {
  try {
    const data = await fspromise.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function getUserById(id: number) {
  const users = await getUsers();
  return users.find((user) => user.id === id);
}

export async function createUser(data: UserType) {
  const users = await getUsers();
  users.push(data);
  await fspromise.writeFile(filePath, JSON.stringify(users));
}

export async function editUser(data: UserType) {
  const users = await getUsers();
  const index = users.findIndex((user) => user.id === data.id);

  if (index !== -1) {
    users[index] = data;
    await fspromise.writeFile(filePath, JSON.stringify(users));
  }

  return users;
}

export async function deleteUser(id: number) {
  const users = await getUsers();
  const filtered = users.filter((user) => user.id !== id);
  await fspromise.writeFile(filePath, JSON.stringify(filtered));
  return filtered;
}
