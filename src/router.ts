import { Router } from 'express';
import { AuthenticateUserController } from './Controllers/AuthenticateUserController';
import { CreateComplimentController } from './Controllers/CreateComplimentController';
import { CreateTagController } from './Controllers/CreateTagController';
import { CreateUserController } from './Controllers/CreateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController(); 
const authenticateUserController = new AuthenticateUserController(); 
const createComplimentController = new CreateComplimentController();

router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/complimets", createComplimentController.handle);


export { router };

