import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

// Define validation schema
const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const result = userSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { message: 'Invalid input data', errors: result.error.format() },
        { status: 400 }
      );
    }
    
    const { name, email, password } = result.data;
    
    // Check if user already exists (mock implementation)
    // In a real app, you would query your database
    if (email === 'user@example.com') {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 409 }
      );
    }
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create the user (mock implementation)
    // In a real app, you would save to your database
    const user = {
      id: Date.now().toString(),
      name,
      email,
      password: hashedPassword,
    };
    
    // For demonstration purposes, log the created user
    // In production, you would not log sensitive information
    console.log('User created:', { id: user.id, name: user.name, email: user.email });
    
    // Return success response (exclude password from response)
    return NextResponse.json(
      { 
        message: 'User registered successfully',
        user: { id: user.id, name: user.name, email: user.email }
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
