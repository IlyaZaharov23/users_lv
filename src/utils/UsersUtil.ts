import fspromise from "fs/promises";
import path from "path";
import { UserType } from "../features/users/types";
export class UsersUtil {
  private static pathToUsers() {
    return path.join(process.cwd(), "users.json");
  }
  static async getUsers() {
    try {
      const users = await fspromise.readFile(this.pathToUsers(), "utf-8");
      return users.length ? JSON.parse(users) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  private static async updateUsers(newUsers: UserType[]) {
    try {
      await fspromise.writeFile(this.pathToUsers(), JSON.stringify(newUsers));
    } catch (error) {
      console.log(error);
    }
  }

  static async createUser(data: UserType) {
    try {
      const users: UserType[] = await this.getUsers();
      users.push(data);
      await this.updateUsers(users);
    } catch (error) {
      console.log(error);
    }
  }

  static async editUser(data: UserType) {
    try {
      const users: UserType[] = await this.getUsers();
      const currentUserIndex = users.findIndex((user) => user.id === data.id);
      if (currentUserIndex !== -1) {
        users[currentUserIndex] = data;
        await this.updateUsers(users);
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteUser(data: UserType) {
    try {
      const users: UserType[] = await this.getUsers();
      const currentUserIndex = users.findIndex((user) => user.id === data.id);
      if (currentUserIndex !== -1) {
        users.splice(currentUserIndex, 1);
        await this.updateUsers(users);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
