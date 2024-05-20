'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Input,
  Slider,
  SliderClose,
  SliderContent,
  SliderDescription,
  SliderHeader,
  SliderTitle,
  SliderTrigger,
} from '../ui';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Textarea } from '../ui/textarea';

type ContactMeProps = {
  children?: React.ReactNode;
};

export const ContactMe: React.FC<ContactMeProps> = ({
  children = (
    <Button variant={'default'} className='max-w-fit'>
      Contact Me
    </Button>
  ),
}) => {
  return (
    <Slider>
      <SliderTrigger asChild>{children}</SliderTrigger>
      <SliderContent side={'right'} className='sm:max-w-3xl'>
        <SliderHeader>
          <SliderTitle className='font-space-grotesk text-lg font-semibold'>
            Contact Me
          </SliderTitle>
          <SliderDescription>
            Please fill the form below to contact me.
          </SliderDescription>
        </SliderHeader>
        <ContactForm />
        <div>
          Want to just speak to me? you can schedule a call with me{' '}
          <a
            href='https://cal.com/ram-codes'
            target='_blank'
            className='text-primary underline underline-offset-2'
          >
            here
          </a>
        </div>
      </SliderContent>
    </Slider>
  );
};

const contactFormFieldSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(1, { message: 'Name is required' }),
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  company: z
    .string()
    .min(1, { message: 'Please enter the name of your company' }),
  budget: z.number().int().min(0).max(1000000).optional(),
  projectDetails: z
    .string({
      required_error: 'Please enter some details about your project',
    })
    .min(10, { message: 'Please enter some details about your project' })
    .optional(),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof contactFormFieldSchema>>({
    resolver: zodResolver(contactFormFieldSchema),
  });

  const onSubmit = async (data: z.infer<typeof contactFormFieldSchema>) => {
    await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <div className='py-4'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Ruskin Bond' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type='email'
                    placeholder='e.g. ruskin.bond@mail.com'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='company'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder='e.g. bond.inc' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='projectDetails'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Details</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='e.g. I want to build a website for my company that showcases our products and services. I want the website to be fast, secure, and SEO optimized. I also want to be able to update the content of the website myself.'
                    className='resize-none'
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Please provide as much detail as possible
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <SliderClose asChild>
            <Button disabled={!form.formState.isValid} type='submit'>
              Send
            </Button>
          </SliderClose>
        </form>
      </Form>
    </div>
  );
};
