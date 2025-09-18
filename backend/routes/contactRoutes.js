import express from "express";
import { body, validationResult } from "express-validator";
import Contact from "../models/contactModel.js";
import { sendContactMail } from "../controllers/nodemialer.js";

const router = express.Router();

router.post(
  "/",
  body("name").isLength({ min: 2 }).withMessage("Name too short"),
  body("email").isEmail().withMessage("Invalid email"),
  body("message").isLength({ min: 10 }).withMessage("Message too short"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
    try {
      const { name, email, message } = req.body;
      const c = new Contact({ name, email, message });
      await c.save();
      await sendContactMail(c);
      return res.status(201).json({ message: "Saved" });
    } 
    catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Server error" });
    }
  }
);

export default router;