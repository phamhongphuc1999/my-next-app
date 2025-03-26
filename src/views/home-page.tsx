'use client';

import { ChevronsUpDown } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';
import IconButton from 'src/components/buttons/IconButton';
import { CloseIcon } from 'src/components/icons';
import { Button } from 'src/components/shadcn-ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from 'src/components/shadcn-ui/command';
import { Input } from 'src/components/shadcn-ui/input';
import { Popover, PopoverContent, PopoverTrigger } from 'src/components/shadcn-ui/popover';
import { ReferenceConfig, TabConfig } from 'src/configs/constance';
import { twMerge } from 'tailwind-merge';

export default function HomePage() {
  const ref = useRef('');
  const [searchText, setSearchText] = useState('');
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    if (ref.current != searchText) {
      ref.current = searchText;
      const _delay = setTimeout(() => {
        setFilterText(searchText);
      }, 500);

      return () => clearTimeout(_delay);
    }
  }, [searchText]);

  const filteredTopics = useMemo(() => {
    if (filterText.length == 0) return ReferenceConfig;
    const lowFilterText = filterText.toLowerCase();
    return ReferenceConfig.filter((topic) => {
      if (topic.title.toLowerCase().includes(lowFilterText)) return true;
      else return false;
    });
  }, [filterText]);

  return (
    <>
      <div className="relative w-full md:w-[50%]">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search topic"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                Choose topics <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search topic..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No topic found.</CommandEmpty>
                  <CommandGroup>
                    {Object.values(TabConfig).map((topic) => {
                      return (
                        <CommandItem key={topic.id} value={topic.title}>
                          {topic.title}
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <IconButton
          onClick={() => setSearchText('')}
          className={twMerge(
            'absolute right-0 top-[50%] h-[24px] w-[24px] translate-y-[-50%]',
            searchText.length > 0 ? 'visible' : 'invisible'
          )}
        >
          <CloseIcon fill="#ffffff" />
        </IconButton>
      </div>
      <div className={twMerge('mt-[4px]', searchText.length > 0 ? 'visible' : 'invisible')}>
        <p className="textSecondary text-[12px]">
          {filteredTopics.length} {filteredTopics.length > 1 ? 'results' : 'result'}
        </p>
      </div>
      <ArticleUL className="mt-[1rem]">
        {filteredTopics.map((item) => {
          return (
            <ArticleLI key={item.id}>
              <Link href={item.link} className="inline-block hover:underline">
                <p>
                  {item.id}. {item.title}
                </p>
              </Link>
            </ArticleLI>
          );
        })}
      </ArticleUL>
    </>
  );
}
