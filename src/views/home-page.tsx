'use client';

import debounce from 'lodash/debounce';
import { Check, ChevronsUpDown } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import AppPagination from 'src/components/AppPagination';
import { ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';
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
import { ITEMS_PER_PAGE } from 'src/configs/constance';
import { ReferenceConfig, TabConfig } from 'src/configs/layout.config';
import { TabType } from 'src/global';
import { cn } from 'src/lib/utils';

export default function HomePage() {
  const [searchText, setSearchText] = useState('');
  const [filterText, setFilterText] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<TabType | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  const _setFilterText = debounce((value: string) => {
    setFilterText(value);
  }, 500);

  function onTextChange(text: string) {
    setSearchText(text);
    _setFilterText(text);
  }

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

  const paginatedTopics = useMemo(() => {
    return filteredTabTopics.slice(
      currentPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  }, [filteredTabTopics, currentPage]);

  const totalPage = useMemo(() => {
    return Math.ceil(filteredTabTopics.length / ITEMS_PER_PAGE);
  }, [filteredTabTopics]);

  function onSelectTab(id: TabType | 'all') {
    if (id == 'all') setSelectedId(undefined);
    else setSelectedId(id);
    setOpen(false);
  }

  return (
    <>
      <div className="relative w-full md:w-[50%]">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search topic"
            value={searchText}
            onChange={(event) => onTextChange(event.target.value)}
            className="w-96"
          />
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-25 justify-between"
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
                          onSelect={() => onSelectTab(topic.id)}
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
        </div>
        {(selectedId || filterText.length > 0) && (
          <Button
            onClick={() => {
              setSearchText('');
              setFilterText('');
              setSelectedId(undefined);
            }}
            className="mt-2"
          >
            Clear filters
          </Button>
        )}
      </div>
      <div className={cn('mt-[4px]', searchText.length > 0 ? 'visible' : 'invisible')}>
        <p className="textSecondary text-[12px]">
          {filteredTabTopics.length} {filteredTabTopics.length > 1 ? 'results' : 'result'}
        </p>
      </div>
      <ArticleUL className="mt-[1rem]">
        {paginatedTopics.map((item) => {
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
      <AppPagination
        currentPage={currentPage}
        totalPages={totalPage}
        events={{ onPageChange: (page) => setCurrentPage(page) }}
      />
    </>
  );
}
