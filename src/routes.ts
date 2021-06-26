import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./midllewares/ensureAdmin";
import { AuthenticateUserContreller } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

const router = Router();

const createUserConstroller = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserContreller();
const createComplimentController = new CreateComplimentController();

router.post("/users", createUserConstroller.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", createComplimentController.handle)

export { router };
