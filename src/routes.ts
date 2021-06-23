import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserConstroller = new CreateUserController();

router.post("/users", createUserConstroller.handle);

export { router }
