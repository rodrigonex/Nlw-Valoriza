import { Router } from 'express';
import { AuthenticateUserController } from './Controllers/AuthenticateUserController';
import { CreateTagController } from './Controllers/CreateTagController';
import { CreateUserController } from './Controllers/CreateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController(); 
const authenticateUserController = new AuthenticateUserController(); 

router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);


export { router };

