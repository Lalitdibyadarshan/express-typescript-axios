import { Router } from "express";
import { getUser } from "../api/userApi";

const router = Router();

router.get("/", async (req, res, next) => {
    const users = await getUser();
    
    return res.json(users);
  });

export default router;
  