import { Router } from 'express';
import { CreateTagController } from './Controllers/CreateTagController';
import { CreateUserController } from './Controllers/CreateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController(); 

router.post("/tags", createTagController.handle);
router.post("/users", ensureAdmin, createUserController.handle);


export { router };

