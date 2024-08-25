'use client';

import clsx from 'clsx';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
  BookmarkIcon,
  BookOpenIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav
      className={clsx(
        playfairDisplay.className,
        'block md:flex items-end px-5 py-5 justify-between text-neutral-600'
      )}
    >
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Olive Logo"
            className=""
            width={60}
            height={60}
            priority
          />
          <span className="text-4xl ml-2 tracking-wider text-lime-900">
            Olive
          </span>
        </div>
        <button
          className="p-3 block md:hidden"
          type="button"
          onClick={() => setShowNav((status) => !status)}
        >
          <ChevronDownIcon className="size-6" />
        </button>
      </div>
      <div
        className={clsx(
          showNav ? 'flex' : 'hidden md:flex',
          'bg-neutral-50 md:bg-transparent border border-neutral-300 md:border-none rounded-lg flex-col text-lg md:flex-row gap-2 md:gap-6 items-center pt-2 pb-4 mt-5 md:mt-0'
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2 hover:bg-neutral-200 md:hover:bg-inherit w-full md:w-auto px-5 md:px-0 py-2 md:py-0 rounded md:rounded-none"
        >
          <Squares2X2Icon className="size-5 block md:hidden" />
          Dashboard
        </Link>
        <Link
          href="/bookmarks"
          className="flex items-center gap-2 hover:bg-neutral-200 md:hover:bg-inherit w-full md:w-auto px-5 md:px-0 py-2 md:py-0 rounded md:rounded-none"
        >
          <BookmarkIcon className="size-4 block md:hidden" />
          Bookmarks
        </Link>
        <Link
          href="/cookbooks"
          className="flex items-center gap-2 hover:bg-neutral-200 md:hover:bg-inherit w-full md:w-auto px-5 md:px-0 py-2 md:py-0 rounded md:rounded-none"
        >
          <BookOpenIcon className="size-4 block md:hidden" />
          Cookbooks
        </Link>
        <Link
          href="/recipes"
          className="flex items-center gap-2 hover:bg-neutral-200 md:hover:bg-inherit w-full md:w-auto px-5 md:px-0 py-2 md:py-0 rounded md:rounded-none"
        >
          <DocumentTextIcon className="size-4 block md:hidden" />
          Recipes
        </Link>
        <div className="w-full h-[1px] bg-neutral-300 block md:hidden" />
        <Link
          href="/account"
          className="md:hidden flex items-center gap-2 hover:bg-neutral-200 md:hover:bg-inherit w-full md:w-auto px-5 md:px-0 py-2 md:py-0 rounded md:rounded-none"
        >
          <Cog6ToothIcon className="size-4 block md:hidden" />
          Account Settings
        </Link>
        <div className="hidden md:block">
          <Menu>
            <MenuButton className="flex items-center">
              <UserCircleIcon className="size-8 text-neutral-500" />
              <ChevronDownIcon className="size-4 stroke-[3px]" />
            </MenuButton>
            <MenuItems
              transition
              anchor="bottom end"
              className="text-neutral-600 border border-neutral-200 w-60 mt-2 origin-top-right rounded-lg bg-neutral-50 p-1 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <Link
                  href="/account"
                  className={clsx(
                    playfairDisplay.className,
                    'transition duration-100 group flex w-full items-center gap-2 rounded-lg py-2 px-4 data-[focus]:bg-neutral-200 data-[focus]:text-neutral-800'
                  )}
                >
                  <Cog6ToothIcon className="size-4" />
                  Account Settings
                </Link>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </nav>
  );
}
