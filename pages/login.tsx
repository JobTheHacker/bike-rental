/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6kmOxZFXLfb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { useState } from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: email
        }
      });

      if (!user || user.password !== password) {
        setError('Invalid email or password');
        return;
      }

      // If login is successful, redirect to Userindex page
      window.location.href = '/Userindex.tsx';
    } catch (error) {
      console.error('Login failed:', error.message);
      setError('Login failed. Please try again later.');
    }
  };

  return (
    <>
    <div className="flex justify-center items-center h-screen">
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Enter your email and password to login to your account.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </CardContent>
      <CardFooter>
        <Button onClick={handleLogin} className="w-full">Sign in</Button>
      </CardFooter>
    </Card>
    </div>
    </>
  )
}

