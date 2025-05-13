import { z } from 'zod';

// Schema for contact form validation
export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long.' }),
});

// State returned by contact form actions
export interface ContactFormState {
  message: string;
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}
