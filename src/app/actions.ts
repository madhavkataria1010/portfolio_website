'use server';

import { z } from 'zod';
import { contactFormSchema, ContactFormState } from '../lib/contactForm';

// Original action for use with useActionState
export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  'use server';
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Form submission failed. Please check the errors.',
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  console.log('New contact form submission (via submitContactForm):');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  
  return { message: 'Your message has been received! (Simulated via useActionState)', success: true };
}

// New action for manual invocation from client-side handler
export async function handleManualContactForm(
  data: z.infer<typeof contactFormSchema>
): Promise<ContactFormState> {
  'use server';
  // Optionally re-validate on server
  const validatedFields = contactFormSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      message: 'Server validation failed. Please check the errors.',
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { name, email, message } = validatedFields.data;
  console.log('New contact form submission (via handleManualContactForm):');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  // Simulate sending an email
  // In a real application, integrate an email service here.
  return { message: 'Your message has been sent successfully! (Simulated)', success: true };
}
