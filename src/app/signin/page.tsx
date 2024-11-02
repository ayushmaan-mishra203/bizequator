'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

const SignIn: FC = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = e.currentTarget.email.value; // Get email input value
    const password = e.currentTarget.password.value; // Get password input value

    // Perform sign-in action with email and password
    const result = await signIn('credentials', {
      redirect: false, // Prevent automatic redirect
      email,
      password,
    });

    // Check if sign-in was successful
    if (result?.error) {
      console.error('Sign in failed', result.error);
      // Optionally display an error message to the user
    } else {
      console.log('Sign in successful, redirecting...');
      router.push('/'); // Redirects to home after sign-in
    }
  };

  const handleGoogleSignIn = async () => {
    const result = await signIn('google', { redirect: false });
    // Check if result is defined before accessing properties
    if (result && !result.error) {
      router.push('/'); // Redirect to home after successful sign-in
    } else if (result) {
      console.error('Google sign-in failed', result.error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-4">
          {session ? 'Welcome Back!' : 'Sign In'}
        </h2>
        {!session ? (
          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email" // Add name attribute for form data
                required
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password" // Add name attribute for form data
                required
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-500 transition"
            >
              Sign In
            </button>
          </form>
        ) : (
          <div className="text-center">
            {session.user?.image && (
              <img
                src={session.user.image}
                alt="User Logo"
                className="w-24 h-24 rounded-full mx-auto mb-4" // Style the image as needed
              />
            )}
            <p className="mb-4">Welcome, {session.user?.name || 'User'}!</p>
            <button
              onClick={() => signOut({ callbackUrl: '/' })} // Redirects to home after sign-out
              className="w-full bg-red-600 text-white font-semibold py-2 rounded hover:bg-red-500 transition"
            >
              Sign Out
            </button>
            <div className="mt-4">
              <button
                onClick={() => router.push('/')} // Navigate to home
                className="w-full bg-gray-400 text-white font-semibold py-2 rounded hover:bg-gray-300 transition"
              >
                Back to Home
              </button>
            </div>
          </div>
        )}
        {!session && (
          <div className="mt-4 text-center">
            <button
              onClick={handleGoogleSignIn}
              className="w-full bg-red-600 text-white font-semibold py-2 rounded hover:bg-red-500 transition"
            >
              Sign In with Google
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
