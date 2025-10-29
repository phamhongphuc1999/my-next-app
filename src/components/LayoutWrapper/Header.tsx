import Link from 'next/link';
import CommonContainer from 'src/components/box/CommonContainer';
import ThemeButton from 'src/components/buttons/ThemeButton';
import { Button } from '../shadcn-ui/button';

export default function Header() {
  return (
    <div className="border-b-black-350 bg-grey-50 fixed z-1205 h-[55px] w-full">
      <CommonContainer className="flex h-full items-center justify-between">
        <ThemeButton />
        <Link href="/links">
          <Button>Go to Link</Button>
        </Link>
      </CommonContainer>
    </div>
  );
}
