import {
  Squares2X2Icon,
  TrophyIcon,
  Bars3Icon,
  HeartIcon,
  PlusIcon,
} from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export default function Dashboard() {
  return (
    <main className="flex justify-center">
      <div className="w-[800px] mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_2fr] gap-4 mb-4 md:h-72">
          <div className="bg-neutral-50 p-6 rounded-lg overflow-x-hidden overflow-y-scroll">
            <div className="flex gap-4 items-end mb-3">
              <div className="flex items-center justify-center w-[100px] h-[100px]">
                <Image
                  src="/profile.svg"
                  width={90}
                  height={90}
                  alt="Profile"
                  className="rounded-xl"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={clsx(
                    playfairDisplay.className,
                    'text-xl text-neutral-800'
                  )}
                >
                  John Smith
                </span>
                <span className="text-sm text-neutral-500">
                  Member since 2024
                </span>
              </div>
            </div>
            <div>
              <h3 className={clsx('mb-2', playfairDisplay.className)}>
                My Top Cookbooks
              </h3>
              <div className="flex flex-col text-neutral-800">
                {[
                  ['Sweet Treats: Indulgent Recipes', true],
                  [
                    'Fire & Steam: The Art of Cooking with Smoke and Vapor',
                    false,
                  ],
                  ['Flavors of the Forest: Wild Foraging', false],
                ].map(([cookbook, topRated]) => (
                  <div className="flex items-center gap-2 odd:bg-neutral-100 even:bg-transparent">
                    <div>
                      {topRated ? (
                        <TrophyIcon className="size-4 text-yellow-500" />
                      ) : (
                        <div className="h-4 w-4" />
                      )}
                    </div>
                    <div className="whitespace-nowrap text-ellipsis overflow-hidden">
                      {cookbook}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <div className="bg-neutral-50 p-6 rounded-lg overflow-x-hidden overflow-y-scroll h-full">
              <div className="flex justify-between items-center mb-3">
                <h2 className={playfairDisplay.className}>My Cookbooks</h2>
                <div className="flex gap-2 text-neutral-500">
                  <button type="button">
                    <Bars3Icon className="size-4" />
                  </button>
                  <button type="button">
                    <Squares2X2Icon className="size-4" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                {[
                  ['Sweet Treats: Indulgent Recipes', 12],
                  ['Fire & Steam: The Art of Cooking with Smoke and Vapor', 8],
                  ['Flavors of the Forest: Wild Foraging', 3],
                  ['Quick & Easy Weeknight Dinners', 1],
                  ['One-Pot Wonders: Simple Meals for Busy Nights', 1],
                ].map(([cookbook, bookmarks]) => (
                  <div className="flex items-center justify-between odd:bg-neutral-100 even:bg-transparent">
                    <div className="whitespace-nowrap text-ellipsis overflow-hidden text-neutral-800">
                      {cookbook}
                    </div>
                    <div className="flex text-sm items-center gap-1">
                      <HeartIcon className="size-4 text-neutral-400" />
                      <span className="text-neutral-800 font-black min-w-4 text-right">
                        {bookmarks}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 bg-neutral-50/90 w-full flex justify-end px-3 py-2">
              <button
                type="button"
                className="px-3 py-1 bg-lime-700 text-neutral-100 rounded-lg flex items-center gap-2 text-sm"
              >
                <PlusIcon className="size-4" />
                Add Cookbook
              </button>
            </div>
          </div>
        </div>
        <div className="bg-neutral-50 p-6 rounded-lg overflow-hidden">
          <div className="flex justify-between items-center mb-5">
            <h2 className={playfairDisplay.className}>Top Cookbooks</h2>
            <div className="flex gap-2 text-neutral-500">
              <button type="button">
                <Bars3Icon className="size-4" />
              </button>
              <button type="button">
                <Squares2X2Icon className="size-4" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Simple Pasta Recipes for Every Night',
              'Easy Vegetarian Cooking',
              'Quick Breakfast Ideas',
              'Everyday Chicken Dishes',
              'The Soup and Salad Cookbook',
              'Fast and Fresh Seafood Recipes',
              'Basic Baking for Beginners',
              'Homemade Pizza and Bread',
              'Simple Desserts for Any Occasion',
              'Family-Friendly Meals on a Budget',
            ].map((cookbook) => (
              <div className="flex flex-col justify-center items-center mb-5">
                <div className="w-8/12 aspect-[3/4] bg-gradient-to-br from-green-800 via-lime-600 to-yellow-500 rounded-sm" />
                <span className="text-neutral-700">{cookbook}</span>
                <div className="flex text-sm items-center gap-1">
                  <HeartIcon className="size-4 text-neutral-400" />
                  <span className="text-neutral-800 font-black min-w-4 text-right">
                    12
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
