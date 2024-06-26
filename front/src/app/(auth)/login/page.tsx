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
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/FormInput";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default function Login() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    const postData = {
      ...data,
      email: data.email,
      password: data.password,
    };
  try {
    const response = await fetch('http://localhost:8081/account/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      console.log('Login success');
      // Redirection ou gestion du state de session ici
    } else {
      throw new Error('Failed to login');
    }
  } catch (error) {
    console.error('Login error:', error);
  }
};

  return (
    <main>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <FormInput
                  control={form.control}
                  name="email"
                  label="Email"
                  InputProps={{
                    placeholder: "email@mail.com",
                  }}
                />
              </div>
              <div className="grid gap-2">
                <FormInput
                  control={form.control}
                  name="password"
                  label="Password"
                  InputProps={{
                    placeholder: "password",
                    type: "password",
                  }}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
