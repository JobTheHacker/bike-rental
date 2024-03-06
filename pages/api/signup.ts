import prisma from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { id, fname, lname, email, dob, password } = req.body;
    try {
      console.log(req.body)
      const user = await prisma.user.create({
        data: {
          id,
          fname,
          lname,
          email,
          dob,
          password
        }
      });
      res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
      console.error('User creation failed:', error.message);
      res.status(500).json({ error: 'User creation failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
