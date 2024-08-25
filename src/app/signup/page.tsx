import FormInput from '@/components/FormInput';
import { EnvelopeIcon, KeyIcon, UserIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export default function Signup() {
  async function signup(formData: FormData) {
    'use server';
  }

  return (
    <div className="flex-grow flex items-center justify-center">
      <form
        action={signup}
        className="flex flex-col mb-12 bg-neutral-50 px-6 py-3 min-w-[500px] rounded-lg"
      >
        <h1
          className={clsx(
            'text-lg/10 text-lime-800 font-bold',
            playfairDisplay.className
          )}
        >
          Sign Up
        </h1>
        <div className="flex gap-2">
          <FormInput name="First Name" />
          <FormInput name="Last Name" />
        </div>
        <div className="h-[2px] w-full bg-neutral-100 mb-3"></div>
        <FormInput name="Email" icon={EnvelopeIcon} />
        <FormInput name="Username" icon={UserIcon} />
        <FormInput name="Password" icon={KeyIcon} />
        <div
          className={clsx(
            playfairDisplay.className,
            'flex items-center gap-4 justify-end'
          )}
        >
          <Link href="/login" className="text-neutral-500">
            Log in
          </Link>
          <input
            type="submit"
            value="Sign Up"
            className="bg-lime-800 text-neutral-50 rounded-lg px-3 py-1"
          />
        </div>
      </form>
    </div>
  );
}
