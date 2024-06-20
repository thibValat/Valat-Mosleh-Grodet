"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DatePicker } from "@/components/DatePicker";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormInput from "@/components/FormInput";

const AdresseSchema = z.object({
    city: z.string(),
    postCode: z.string(),
    streetName: z.string(),
    streetNumber: z.string(),
})

const RegisterSchema = z
  .object({
    firstName: z.string().min(2),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
    birthDate: z.date(),
    address: AdresseSchema,

  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function Register() {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
  });

const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    console.log(data);
    const postData = {
      ...data,
      confirmPassword: undefined,
      birthDate: data.birthDate.toISOString(),
    };

    try {
      const response = await fetch('http://localhost:8081/account/inscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error during registration:', error);
    }
};

  return (
    <main>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="grid gap-2" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <FormInput
                    control={form.control}
                    label="First name"
                    name="firstName"
                    InputProps={{ placeholder: "John" }}
                  />
                </div>
                <div className="grid gap-2">
                  <FormInput
                    control={form.control}
                    label="Last name"
                    name="lastName"
                    InputProps={{ placeholder: "Doe" }}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <FormInput
                  control={form.control}
                  label="Email"
                  name="email"
                  InputProps={{ placeholder: "john.doe@email.com" }}
                />
              </div>
              <div className="grid gap-2">
                <FormInput
                  control={form.control}
                  label="Password"
                  name="password"
                  InputProps={{ type: "password" }}
                />
              </div>
              <div className="grid gap-2">
                <FormInput
                  control={form.control}
                  label="Confirm Password"
                  name="confirmPassword"
                  InputProps={{ type: "password" }}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="birthDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Birthdate</FormLabel>
                      <FormControl>
                        <DatePicker
                          date={field.value}
                          onChange={(date) => field.onChange(date)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <FormInput
                    control={form.control}
                    label="City"
                    name="address.city"
                    InputProps={{ placeholder: "Paris" }}
                  />
                </div>
                <div className="grid gap-2">
                  <FormInput
                    control={form.control}
                    label="PostCode"
                    name="address.postCode"
                    InputProps={{ placeholder: "75001" }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <FormInput
                    control={form.control}
                    label="Street Name"
                    name="address.streetName"
                    InputProps={{ placeholder: "Rue de Rivoli" }}
                  />
                </div>
                <div className="grid gap-2">
                  <FormInput
                    control={form.control}
                    label="Street Number"
                    name="address.streetNumber"
                    InputProps={{ placeholder: "1" }}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Create an account
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="#" className="underline">
                Sign in
              </Link>
            </div>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
