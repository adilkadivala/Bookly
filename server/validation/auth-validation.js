const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at lest of 3 chars" })
    .max(255, { message: "Name must not be more than 255 charactor " }),

  email: z
    .string({ required_error: "Email is require" })
    .trim()
    .email({ message: "Invalid email address" }),

  phone: z
    .string({ required_error: "Phone is require" })
    .trim()
    .min(10, { message: "Phone number must be at lest of 10 chars" })
    .max(20, { message: "Phone number must not be more than 20 charactor " }),
  password: z
    .string({ required_error: "Password is require" })
    .trim()
    .min(7, { message: "Password must be at lest of 7 chars" })
    .max(20, { message: "Password must not be more than 20 charactor " }),
});

module.exports = signupSchema;
