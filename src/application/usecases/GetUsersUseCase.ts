import User from "../../domain/entities/User";
import UserRepository from "../../domain/repositories/UserRepository";

class GetUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    return this.userRepository.getUsers();
  }
}

export default GetUsersUseCase;
