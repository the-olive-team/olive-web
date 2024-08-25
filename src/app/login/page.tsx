import FormInput from '@/components/FormInput';
import { KeyIcon, UserIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export default function Login() {
  async function login(formData: FormData) {
    'use server';
  }

  return (
    <div className="flex-grow flex items-center justify-center">
      <form
        action={login}
        className="flex flex-col mb-12 bg-neutral-50 px-6 py-3 min-w-[500px] rounded-lg"
      >
        <h1
          className={clsx(
            'text-lg/10 text-lime-800 font-bold',
            playfairDisplay.className
          )}
        >
          Log In
        </h1>
        <FormInput name="Username" icon={UserIcon} />
        <FormInput name="Password" icon={KeyIcon} />
        <div className="flex items-center mb-3 justify-between">
          <a className="text-sm underline text-neutral-500">Forgot Password?</a>
          <div
            className={clsx(
              playfairDisplay.className,
              'flex items-center gap-4'
            )}
          >
            <Link href="/signup" className="text-neutral-500">
              Sign Up
            </Link>
            <input
              type="submit"
              value="Log In"
              className="bg-lime-800 text-neutral-50 rounded-lg px-3 py-1"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
