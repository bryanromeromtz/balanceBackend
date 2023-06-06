import User from "../../../domain/entities/User";
import UserRepository from "../../../domain/repositories/UserRepository";

class UserRepositoryImpl implements UserRepository {
  private users: User[] = [];

  async createUser(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async getUsers(): Promise<User[]> {
    return this.users;
  }
}

export default UserRepositoryImpl;
