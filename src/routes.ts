import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./midllewares/ensureAdmin";

const router = Router();

const createUserConstroller = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/users", createUserConstroller.handle);
router.post("/tags", ensureAdmin, createTagController.handle);

export { router };
