"use server";

import fspromise from "fs/promises";
import path from "path";
import { UserType } from "../features/users/types";

const filePath = path.join(process.cwd(), "users.json");

export const getUsers = async (): Promise<UserType[]> => {
  try {
    const data = await fspromise.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const createUser = async (data: UserType) => {
  try {
    const users = await getUsers();
    users.unshift(data);
    await fspromise.writeFile(filePath, JSON.stringify(users));
    return users;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const editUser = async (data: UserType) => {
  try {
    const users = await getUsers();
    const index = users.findIndex((user) => user.id === data.id);

    if (index !== -1) {
      users[index] = data;
      await fspromise.writeFile(filePath, JSON.stringify(users));
    }

    return users;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteUser = async (id: number) => {
  try {
    const users = await getUsers();
    const filtered = users.filter((user) => user.id !== id);
    await fspromise.writeFile(filePath, JSON.stringify(filtered));
    return filtered;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const isEmailExists = async (email: string, userId?: number) => {
  try {
    const users = await getUsers();
    return users.some(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() && user.id !== userId // исключаем текущего пользователя, если userId передан
    );
  } catch (err) {
    console.error(err);
    return false;
  }
};
