import Link from 'next/link';
import type { ReactNode } from 'react';

import LocaleSwitch from '@/components/LocaleSwitch';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="text-3xl font-bold text-gray-900">
            {AppConfig.title}
          </div>
          <div className="text-xl">{AppConfig.description}</div>
        </div>
        <ul className="flex justify-between text-xl">
          <div className="flex">
            <li className="mr-6">
              <Link href="/">
                <a className="border-none text-gray-700 hover:text-gray-900">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about/">
                <a className="border-none text-gray-700 hover:text-gray-900">
                  About
                </a>
              </Link>
            </li>
          </div>
          <li>
            <LocaleSwitch />
          </li>
        </ul>
      </div>

      <div className="py-5">{props.children}</div>

      <div
        className="border-t border-gray-300 py-8 text-center text-sm"
        data-testid="footer"
      >
        {new Date().getFullYear()} {AppConfig.title}
      </div>
    </div>
  </div>
);

export { Main };
