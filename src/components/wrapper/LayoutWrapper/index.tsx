import { Typography } from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';
import Header from './Header';

interface Props {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: Props) {
  return (
    <div>
      <Header />
      <div className="bg-black-200">
        <div className="flex h-full flex-col justify-between pt-[55px]">
          <div className="min-h-screen">{children}</div>
          <div className="flex h-[50px] w-full flex-col items-center py-[8px]">
            <Typography sx={{ textAlign: 'center' }}>
              COPYRIGHT © {new Date().getFullYear()}&nbsp;
            </Typography>
            <Link href="https://github.com/phamhongphuc1999/web-practice" target="_blank">
              Main page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
