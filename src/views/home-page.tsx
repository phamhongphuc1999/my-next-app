'use client';

import { Check, ChevronsUpDown } from 'lucide-react';
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
import { TabType } from 'src/global';
import { cn } from 'src/lib/utils';
import { twMerge } from 'tailwind-merge';

export default function HomePage() {
  const ref = useRef('');
  const [searchText, setSearchText] = useState('');
  const [filterText, setFilterText] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<TabType | undefined>(undefined);

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

  const filteredTabTopics = useMemo(() => {
    return filteredTopics.filter((topic) => {
      const _tabs = topic.tabs;
      if (!selectedId) return true;
      else if (_tabs.includes(selectedId)) return true;
      return false;
    });
  }, [selectedId, filteredTopics]);

  return (
    <>
      <div className="relative w-full md:w-[50%]">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search topic"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[400px] justify-between"
              >
                {selectedId ? TabConfig[selectedId]?.title : 'Choose topics'}{' '}
                <ChevronsUpDown className="opacity-50" />
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
                        <CommandItem
                          key={topic.id}
                          value={topic.title}
                          onSelect={() => {
                            setSelectedId(topic.id);
                            setOpen(false);
                          }}
                        >
                          {topic.title}
                          <Check
                            className={cn(
                              'ml-auto',
                              selectedId === topic.id ? 'opacity-100' : 'opacity-0'
                            )}
                          />
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          {(selectedId || filterText.length > 0) && (
            <Button
              onClick={() => {
                setSearchText('');
                setFilterText('');
                setSelectedId(undefined);
              }}
            >
              Clear filters
            </Button>
          )}
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
          {filteredTabTopics.length} {filteredTabTopics.length > 1 ? 'results' : 'result'}
        </p>
      </div>
      <ArticleUL className="mt-[1rem]">
        {filteredTabTopics.map((item) => {
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
