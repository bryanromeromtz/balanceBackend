import { Request, Response } from "express";
import { inject } from "inversify";
import {
  controller,
  httpGet,
  httpPost,
  interfaces,
} from "inversify-express-utils";
import CreateUserUseCase from "../../application/usecases/CreateUserUseCase";
import GetUsersUseCase from "../../application/usecases/GetUsersUseCase";

@controller("/users")
class UserController implements interfaces.Controller {
  constructor(
    @inject(CreateUserUseCase) private createUserUseCase: CreateUserUseCase,
    @inject(GetUsersUseCase) private getUsersUseCase: GetUsersUseCase
  ) {}

  @httpPost("/")
  async createUser(req: Request, res: Response): Promise<void> {
    const { name, age } = req.body;
    const user = await this.createUserUseCase.execute(name, age);
    res.status(201).json(user);
  }

  @httpGet("/")
  async getUsers(req: Request, res: Response): Promise<void> {
    const users = await this.getUsersUseCase.execute();
    res.status(200).json(users);
  }
}

export default UserController;
