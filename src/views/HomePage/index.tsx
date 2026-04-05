'use client';

import { Check, ChevronsUpDown, Search, X } from 'lucide-react';
import { AnimatePresence, motion, type Variants } from 'motion/react';
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
  const selectedId = searchParams.get('tab') as TabType | null;
  const [debouncedText] = useDebounceValue(searchText, 500);
  const totalTopics = Object.values(ReferenceConfig).length;

  function setQuery(key: string, value?: TabType) {
    const current = new URLSearchParams(searchParams.toString());
    if (value && value != TabType.all) current.set(key, value.toString());
    else current.delete(key);
    router.push(`?${current.toString()}`);
  }

  function onTextChange(text: string) {
    setSearchText(text);
    setCurrentPage(1);
  }

  const filteredTopics = useMemo(() => {
    const configs = Object.values(ReferenceConfig);
    if (debouncedText.length == 0) return configs;
    const lowFilterText = debouncedText.toLowerCase();
    return configs.filter((topic) => {
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

  function onSelectTab(id: TabType) {
    setQuery('tab', id);
    setOpen(false);
    setCurrentPage(1);
  }

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemAnim: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 260, damping: 24 },
    },
  };

  return (
    <Fragment>
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-24 h-64 overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 h-56 w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),rgba(56,189,248,0))] blur-2xl" />
          <div className="absolute top-8 right-4 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.2),rgba(251,146,60,0))] blur-2xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative"
        >
          <Badge variant="secondary" className="bg-card/70 border-border/60 border text-xs">
            Curated library
          </Badge>
          <h1 className="mt-3 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            Explore concepts, proofs, and tooling
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl text-sm sm:text-base">
            Search across the knowledge base, then narrow by category to jump straight into the
            topic you need.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
            <div className="bg-card/70 border-border/60 text-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1">
              <span className="text-muted-foreground">Total topics</span>
              <span className="font-semibold">{totalTopics}</span>
            </div>
            <div className="bg-card/70 border-border/60 text-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1">
              <span className="text-muted-foreground">Showing</span>
              <span className="font-semibold">{filteredTabTopics.length}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45, ease: 'easeOut' }}
          className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="flex flex-1 flex-wrap gap-3 sm:items-center">
            <div className="relative w-full sm:w-80 lg:w-96">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <Input
                placeholder="Search topic..."
                value={searchText}
                onChange={(event) => onTextChange(event.target.value)}
                className="bg-background/80 border-border/70 focus-visible:ring-primary/40 h-11 pl-9 shadow-sm transition-shadow focus-visible:shadow-md"
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
                  className="border-border/70 bg-background/80 w-full justify-between sm:w-[200px]"
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
                      <CommandItem value="all" onSelect={() => onSelectTab(TabType.all)}>
                        All categories
                        <Check
                          className={cn('ml-auto', !selectedId ? 'opacity-100' : 'opacity-0')}
                        />
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
        </motion.div>
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
                <motion.div key={item.id} variants={itemAnim} layout>
                  <Link
                    href={item.link}
                    className="group border-border/60 from-card/90 to-card/70 hover:border-primary/50 relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border bg-linear-to-b p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute top-0 -right-12 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),rgba(59,130,246,0))] blur-2xl" />
                      <div className="absolute bottom-0 -left-8 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.16),rgba(249,115,22,0))] blur-2xl" />
                    </div>
                    <div className="relative">
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
                      <h3 className="group-hover:text-primary text-lg leading-tight font-semibold transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <div className="relative mt-4 flex items-center justify-between text-xs font-semibold text-orange-500 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <span>Learn more</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
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

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
        className="mt-12 flex justify-center"
      >
        <AppPagination
          currentPage={currentPage}
          totalPages={totalPage}
          events={{ onPageChange: (page) => setCurrentPage(page) }}
        />
      </motion.div>
    </Fragment>
  );
}
