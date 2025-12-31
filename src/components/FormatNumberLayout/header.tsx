'use client';

import { SearchNormal1 } from 'iconsax-reactjs';
import { useState } from 'react';
import { useDebounceValue } from 'usehooks-ts';
import ThemeButton from '../buttons/ThemeButton';
import BaseInput from '../input/BaseInput';
import SearchInput from '../input/SearchInput';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../shadcn-ui/dialog';

export default function Header() {
  const [searchText, setSearchText] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [debouncedText] = useDebounceValue(searchText, 500);

  return (
    <div className="border-b-black-350 bg-grey-50 fixed z-1205 flex h-[55px] w-full items-center justify-between px-2">
      <ThemeButton />
      <Dialog>
        <DialogTrigger className="w-1/6 cursor-pointer">
          <BaseInput
            name="search"
            icon={{ start: <SearchNormal1 size={14} /> }}
            rootprops={{ className: 'w-full' }}
            readOnly
          />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
          </DialogHeader>
          <div className="scroll-hidden h-fit max-h-[75vh] overflow-auto">
            <SearchInput name="search" events={{ setSearchText }} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
