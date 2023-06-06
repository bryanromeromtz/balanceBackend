import User from "../../domain/entities/User";
import UserRepository from "../../domain/repositories/UserRepository";

class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(name: string, age: number): Promise<User> {
    const user = new User(name, age);
    return this.userRepository.createUser(user);
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.getUsers();
  }
}

export default UserService;
