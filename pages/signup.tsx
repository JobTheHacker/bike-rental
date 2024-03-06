import { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FormEvent } from 'react'
import type { NextApiRequest, NextApiResponse } from 'next';

interface FormData {
  fname: string;
  lname: string;
  email: string;
  dob: string;
  password: string;
}

export default function SignUp() {
  const [formData, setFormData] = useState<FormData>({
    fname: '',
    lname: '',
    email: '',
    dob: '',
    password: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form data
    const validationErrors: Partial<FormData> = {};

    // Email validation
    if (!formData.email.trim().includes('@') || !formData.email.trim().endsWith('.com')) {
      validationErrors.email = 'Invalid email format';
    }

    // Password validation
    if (formData.password.trim().length < 8) {
      validationErrors.password = 'Password must be at least 8 characters long';
    }

    // Date of Birth validation
    const dobDate = new Date(formData.dob);
    const today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
      age--;
    }
    if (age < 18) {
      validationErrors.dob = 'You must be at least 18 years old';
    }

    // Check if any fields are empty
    for (const key in formData) {
      if (formData[key as keyof FormData].trim() === '') {
        validationErrors[key as keyof FormData] = 'This field is required';
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Signup successful!');
        // Handle successful signup if needed
      } else {
        console.error('Signup failed:', response.statusText);
        // Handle signup error if needed
      }
    } catch (error) {
      console.error('Signup failed:', error.message);
      // Handle signup error if needed
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto prose prose-gray dark:prose-invert">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-gray-500 dark:text-gray-400">Enter your information to get started</p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 max-w-md space-y-6">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input type='text' name='fname' placeholder="Enter your first name" value={formData.fname} onChange={handleChange} />
              {errors.fname && <p className="text-red-500">{errors.fname}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input type='text' name='lname' placeholder="Enter your last name" value={formData.lname} onChange={handleChange} />
              {errors.lname && <p className="text-red-500">{errors.lname}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type='email' name='email' placeholder="Enter your email" value={formData.email} onChange={handleChange} />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date of birth</Label>
              <Input type="date" name='dob' value={formData.dob} onChange={handleChange} />
              {errors.dob && <p className="text-red-500">{errors.dob}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input name='password' type="password" value={formData.password} onChange={handleChange} />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
            <Button type="submit" className="w-full">Sign up</Button>
          </form>
          <div className="text-center text-sm">
            Already have an account?
            <Link className="underline" href="/Userindex.tsx">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}