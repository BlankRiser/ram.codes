import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Input,
  Slider,
  SliderClose,
  SliderContent,
  SliderDescription,
  SliderFooter,
  SliderHeader,
  SliderTitle,
  SliderTrigger,
} from "../ui";
import { Button } from "../ui/button";
import { cn } from "~/utils/text-transforms";
import React from "react";

export const ContactMe = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Slider>
        <SliderTrigger asChild>
          <Button variant={"default"}>Contact Me</Button>
        </SliderTrigger>
        <SliderContent side={"right"} className="sm:max-w-3xl">
          <SliderHeader>
            <SliderTitle className="font-space-grotesk text-lg font-semibold">
              Contact Me
            </SliderTitle>
            <SliderDescription>
              Please fill the form below to contact me.
            </SliderDescription>
          </SliderHeader>
          <ContactForm />
          <SliderFooter>
            <SliderClose asChild>
              <Button type="submit">Contact Me</Button>
            </SliderClose>
          </SliderFooter>
        </SliderContent>
      </Slider>
    </div>
  );
};

const contactFormFieldSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  company: z
    .string()
    .min(1, { message: "Please enter the name of your company" }),
  // budget: z.number().int().min(0).max(1000000),
  // service: z
  //   .enum(["design", "development", "consulting"])
  //   .default("development"),
  // projectDetails: z.string(),
});

type ContactFormFields = z.infer<typeof contactFormFieldSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormFields>({
    resolver: zodResolver(contactFormFieldSchema),
  });

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <div className="grid gap-4 py-4">
        <ContactInput
          label={"Name"}
          type="text"
          {...register("name", { required: true })}
          error={errors.name?.message}
        />
        <ContactInput
          label={"Email"}
          placeholder="e.g. example.mail@example.com"
          {...register("email", { required: true })}
          error={errors.email?.message}
        />
        <ContactInput
          label={"Company"}
          placeholder="e.g. acme.inc"
          {...register("company", { required: true })}
          error={errors.company?.message}
        />
      </div>
      <button type="submit">save it</button>
    </form>
  );
};

type ContactInputProps = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const ContactInput = React.forwardRef<HTMLInputElement, ContactInputProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <div
        className={cn([
          " flex flex-col rounded-md border border-neutral-600 bg-neutral-800 px-2 py-1 focus-within:border ",
          error
            ? "focus-within:border-red-400 border-red-400"
            : "focus-within:border-devhaven-500",
        ])}
      >
        <label htmlFor="name" className="p-1 text-left">
          {label}
        </label>
        <Input
          border={false}
          focus={false}
          id="name"
          placeholder="e.g. Van Dyke"
          className="outline-none"
          {...rest}
        />
        {error && <span className="text-sm">{error}</span>}
      </div>
    );
  }
);
ContactInput.displayName = "ContactInput";
