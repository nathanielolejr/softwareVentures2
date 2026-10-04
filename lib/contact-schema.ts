import { z } from "zod";
import { budgetOptions, projectTypeOptions } from "@/content/contact";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(200),
  company: z.string().trim().max(120).optional().default(""),
  budget: z.enum(budgetOptions, { error: "Please select a budget range" }),
  projectType: z.enum(projectTypeOptions, { error: "Please select a project type" }),
  message: z.string().trim().min(10, "Please tell us a bit more (10+ characters)").max(5000),
  // Honeypot: real users never see or fill this.
  website: z.string().max(0).optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;
