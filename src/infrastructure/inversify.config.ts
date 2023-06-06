import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import UserController from "./controllers/UserController";
import UserRepositoryImpl from "./persistence/repositories/UserRepositoryImpl";
import CreateUserUseCase from "../application/usecases/CreateUserUseCase";
import GetUsersUseCase from "../application/usecases/GetUsersUseCase";
import UserService from "../application/services/UserService";
import UserRepository from "../domain/repositories/UserRepository";

const container = new Container();

// Repositories
container.bind<UserRepository>(UserRepository).to(UserRepositoryImpl);

// Use Cases
container.bind<CreateUserUseCase>(CreateUserUseCase).to(CreateUserUseCase);
container.bind<GetUsersUseCase>(GetUsersUseCase).to(GetUsersUseCase);

// Services
container.bind<UserService>(UserService).to(UserService);

// Controllers
container.bind<UserController>(UserController).to(UserController);

const server = new InversifyExpressServer(container);

export default server;
