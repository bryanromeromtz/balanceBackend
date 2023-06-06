import User from "../entities/User";

interface UserRepository {
  createUser(user: User): Promise<User>;
  getUsers(): Promise<User[]>;
}

export default UserRepository;
