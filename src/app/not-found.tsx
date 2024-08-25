import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Playfair_Display, Roboto_Condensed } from 'next/font/google';
import Link from 'next/link';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });
const robotoCondensed = Roboto_Condensed({ subsets: ['latin'] });

export default function NotFound() {
  return (
    <div className="flex-grow flex items-center justify-center">
      <div className={robotoCondensed.className}>
        <h1
          className={clsx(
            playfairDisplay.className,
            'text-neutral-500 font-bold text-3xl leading-10 mb-4'
          )}
        >
          {'Sorry :('}
        </h1>
        <p className="mb-5">{"We couldn't find your page"}</p>
        <Link href="/" className="inline-block">
          <div className="flex gap-2 items-center px-3 py-2 bg-lime-800 text-neutral-100 rounded-lg">
            <ChevronLeftIcon className="size-4" />
            Return Home
          </div>
        </Link>
      </div>
    </div>
  );
}
