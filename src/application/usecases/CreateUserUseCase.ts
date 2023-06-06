import User from "../../domain/entities/User";
import UserRepository from "../../domain/repositories/UserRepository";

class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string, age: number): Promise<User> {
    const user = new User(name, age);
    return this.userRepository.createUser(user);
  }
}

export default CreateUserUseCase;
