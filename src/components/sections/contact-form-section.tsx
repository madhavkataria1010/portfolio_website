'use client';

import { useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { handleManualContactForm } from '@/app/actions';
import { contactFormSchema, type ContactFormState } from '@/lib/contactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';
import { Mail } from 'lucide-react';

// Schema is now imported from actions.ts
type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactFormSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const { register, handleSubmit, formState: { errors, isSubmitting }, setError, reset } = form;

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    const result = await handleManualContactForm(data);

    toast({
      title: result.success ? 'Success!' : 'Error',
      description: result.message,
      variant: result.success ? 'default' : 'destructive',
    });

    if (result.success) {
      reset();
    } else if (result.errors) {
      if (result.errors.name?.[0]) setError("name", { type: "server", message: result.errors.name[0] });
      if (result.errors.email?.[0]) setError("email", { type: "server", message: result.errors.email[0] });
      if (result.errors.message?.[0]) setError("message", { type: "server", message: result.errors.message[0] });
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 scroll-mt-20">
      <SectionHeading>Get In Touch</SectionHeading>
      <p className="mt-4 mb-10 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
        Have a project in mind or just want to say hi? Feel free to reach out.
      </p>
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Mail className="h-6 w-6 text-primary" /> Contact Me
          </CardTitle>
          <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                {...register('name')}
                className="mt-1"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                className="mt-1"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                {...register('message')}
                rows={5}
                className="mt-1"
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
              )}
            </div>
            
            <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
