'use client';

import Link from 'next/link';
import { Fragment, ReactNode } from 'react';
import { GithubIcon } from '../icons';
import Header from './Header';

interface Props {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: Props) {
  return (
    <Fragment>
      <Header />
      <div className="bg-black-200">
        <div className="flex h-full flex-col justify-between pt-[55px]">
          <div className="min-h-screen">{children}</div>
          <div className="border-t-black-350 bg-grey-50 flex w-full flex-col items-center py-[16px]">
            <p className="text-center">COPYRIGHT © {new Date().getFullYear()}&nbsp;</p>
            <div className="flex items-center gap-2">
              <Link href="https://github.com/phamhongphuc1999/my-next-app" target="_blank">
                <GithubIcon className="mt-[4px] h-auto w-[32px]" />
              </Link>
              <Link href="/master-thesis">My Master Thesis</Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
