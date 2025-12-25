'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronsUpDown, Search, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Fragment, useMemo, useState } from 'react';
import AppPagination from 'src/components/AppPagination';
import { Badge } from 'src/components/shadcn-ui/badge';
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
import { useDebounceValue } from 'usehooks-ts';

export default function HomePage() {
  const [searchText, setSearchText] = useState('');
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedId = searchParams.get('tab') as TabType | undefined;
  const [debouncedText] = useDebounceValue(searchText, 500);

  function setQuery(key: string, value?: string) {
    const current = new URLSearchParams(searchParams.toString());
    if (value && value !== 'all') current.set(key, value);
    else current.delete(key);
    router.push(`?${current.toString()}`);
  }

  function onTextChange(text: string) {
    setSearchText(text);
    setCurrentPage(1);
  }

  const filteredTopics = useMemo(() => {
    if (debouncedText.length == 0) return ReferenceConfig;
    const lowFilterText = debouncedText.toLowerCase();
    return ReferenceConfig.filter((topic) => {
      if (topic.title.toLowerCase().includes(lowFilterText)) return true;
      else return false;
    });
  }, [debouncedText]);

  const filteredTabTopics = useMemo(() => {
    return filteredTopics.filter((topic) => {
      const _tabs = topic.tabs;
      if (!selectedId) return true;
      else if (_tabs.includes(selectedId as TabType)) return true;
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
    setQuery('tab', id);
    setOpen(false);
    setCurrentPage(1);
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Fragment>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-1 flex-wrap gap-3 sm:items-center">
          <div className="relative w-full sm:w-80 lg:w-96">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              placeholder="Search topic..."
              value={searchText}
              onChange={(event) => onTextChange(event.target.value)}
              className="pl-9"
            />
            {searchText && (
              <button
                onClick={() => onTextChange('')}
                className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild className="cursor-pointer">
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between sm:w-[200px]"
              >
                {selectedId ? TabConfig[selectedId]?.title : 'All categories'}{' '}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0" align="start">
              <Command>
                <CommandInput placeholder="Search category..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No category found.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem value="all" onSelect={() => onSelectTab('all')}>
                      All categories
                      <Check className={cn('ml-auto', !selectedId ? 'opacity-100' : 'opacity-0')} />
                    </CommandItem>
                    {Object.values(TabConfig)
                      .filter((t) => t.id !== 'all')
                      .map((topic) => {
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

          {(selectedId || debouncedText.length > 0) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearchText('');
                setQuery('tab', undefined);
              }}
              className="px-2 text-xs"
            >
              Clear filters
            </Button>
          )}
        </div>
        <div className={cn('text-right', searchText.length > 0 ? 'visible' : 'invisible')}>
          <p className="text-muted-foreground text-[12px]">
            {filteredTabTopics.length} {filteredTabTopics.length > 1 ? 'results' : 'result'}
          </p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {paginatedTopics.length > 0 ? (
          <motion.div
            key={selectedId || debouncedText || currentPage}
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {paginatedTopics.map((item) => {
              return (
                <motion.div key={item.id} variants={itemAnim}>
                  <Link
                    href={item.link}
                    className="group bg-card hover:border-primary/50 flex h-full flex-col justify-between rounded-xl border p-5 shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <div>
                      <div className="mb-3 flex flex-wrap gap-2">
                        {item.tabs.map((tabId) => (
                          <Badge
                            key={tabId}
                            variant="secondary"
                            className="text-[10px] font-medium"
                          >
                            {TabConfig[tabId as TabType]?.title || tabId}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="group-hover:text-primary text-lg leading-tight font-bold transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs font-semibold text-orange-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <span>Learn more</span>
                      <span>→</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border-2 border-dashed p-12 text-center"
          >
            <div className="bg-muted mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <Search className="text-muted-foreground h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">No results found</h3>
            <p className="text-muted-foreground mt-2 max-w-sm">
              We couldn&apos;t find any topics matching your current search or filter. Try adjusting
              them or clearing all filters.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchText('');
                setQuery('tab', undefined);
              }}
              className="mt-6"
            >
              Clear all filters
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-12 flex justify-center">
        <AppPagination
          currentPage={currentPage}
          totalPages={totalPage}
          events={{ onPageChange: (page) => setCurrentPage(page) }}
        />
      </div>
    </Fragment>
  );
}
