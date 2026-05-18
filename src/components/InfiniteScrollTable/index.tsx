'use client';

import { MouseEvent, useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { Button } from 'src/components/shadcn-ui/button';
import { Table, TableBody, TableCell, TableRow } from 'src/components/shadcn-ui/table';
import { cn } from 'src/lib/utils';

export interface ColumnDef<T> {
  header: string;
  cell: (row: T, index: number) => ReactNode;
  className?: string;
}

export interface InfiniteScrollTableProps<T> {
  rows: T[];
  totalItems: number;
  isLoading: boolean;
  hasMore: boolean;
  error?: string | null;
  onLoadMore: () => void;
  columns: ColumnDef<T>[];
  rowHeight?: number;
  overscan?: number;
  containerHeight?: string | number;
  containerMaxHeight?: number;
  header?: ReactNode;
  emptyMessage?: string;
  formatStats?: (loaded: number, total: number) => string;
  className?: string;
  /** Callback khi click vào một row. Nhận index (global) của row đó. */
  onRowClick?: (rowIndex: number, row: T) => void;
}

function Spinner() {
  return (
    <svg
      className="size-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <circle cx="12" cy="12" r="10" strokeDasharray="31.4 31.4" strokeLinecap="round" />
    </svg>
  );
}

const DEFAULT_FORMAT_STATS = (loaded: number, total: number) =>
  `${loaded.toLocaleString()} / ${total.toLocaleString()} rows loaded`;

export default function InfiniteScrollTable<T>({
  rows,
  totalItems,
  isLoading,
  hasMore,
  error,
  onLoadMore,
  columns,
  rowHeight = 44,
  overscan = 5,
  containerHeight = '70vh',
  containerMaxHeight = 700,
  header,
  emptyMessage = 'No data',
  formatStats = DEFAULT_FORMAT_STATS,
  className,
  onRowClick,
}: InfiniteScrollTableProps<T>) {
  const loadMoreRef = useRef(onLoadMore);
  loadMoreRef.current = onLoadMore;

  const sentryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentry = sentryRef.current;
    if (!sentry) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !isLoading && hasMore) {
          loadMoreRef.current();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(sentry);
    return () => observer.disconnect();
  }, [isLoading, hasMore]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      setViewportHeight(el.clientHeight);
    });
    ro.observe(el);
    setViewportHeight(el.clientHeight);

    return () => ro.disconnect();
  }, []);

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      setScrollTop(scrollRef.current.scrollTop);
    }
  }, []);

  const totalHeight = rows.length * rowHeight;
  const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan);
  const visibleCount = Math.ceil(viewportHeight / rowHeight) + overscan * 2;
  const endIndex = Math.min(rows.length, startIndex + visibleCount);
  const visibleRows = rows.slice(startIndex, endIndex);
  const offsetY = startIndex * rowHeight;

  function handleRowClick(event: MouseEvent<HTMLTableSectionElement>) {
    if (!onRowClick) return;

    const tr = (event.target as HTMLElement).closest('tr');
    if (!tr) return;

    const indexStr = tr.getAttribute('data-index');
    if (!indexStr) return;

    const rowIndex = parseInt(indexStr, 10);
    const row = rows[rowIndex];
    if (!row) return;

    onRowClick(rowIndex, row);
  }

  return (
    <div className={cn('mt-4 flex flex-col gap-3', className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">{header}</div>
        <span className="text-muted-foreground text-sm">
          {formatStats(rows.length, totalItems)}
        </span>
      </div>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="relative overflow-auto rounded-lg border"
        style={{ height: containerHeight, maxHeight: containerMaxHeight }}
      >
        <div className="bg-muted/80 text-muted-foreground sticky top-0 z-10 flex h-10 items-center border-b px-4 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
          {columns.map((col, i) => (
            <span key={i} className={cn(i === 0 ? 'w-20 shrink-0' : 'flex-1', col.className)}>
              {col.header}
            </span>
          ))}
        </div>
        <div aria-hidden style={{ height: totalHeight }} />
        <div
          className="absolute right-0 left-0"
          style={{ top: 40, transform: `translateY(${offsetY}px)` }}
        >
          <Table>
            <TableBody onClick={handleRowClick}>
              {rows.length === 0 && !isLoading && (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="text-muted-foreground py-8 text-center"
                  >
                    {emptyMessage}
                  </TableCell>
                </TableRow>
              )}
              {visibleRows.map((row, idx) => {
                // global index trong rows array
                const globalIndex = startIndex + idx;

                return (
                  <TableRow key={globalIndex} data-index={globalIndex}>
                    {columns.map((col, ci) => (
                      <TableCell
                        key={ci}
                        className={cn(
                          ci === 0
                            ? 'text-muted-foreground w-20 shrink-0 font-mono text-xs'
                            : 'flex-1 truncate',
                          col.className
                        )}
                      >
                        {col.cell(row, globalIndex)}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <div ref={sentryRef} className="flex items-center justify-center py-4">
            {isLoading && (
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <Spinner />
                Loading more rows...
              </div>
            )}
            {!hasMore && rows.length > 0 && (
              <p className="text-muted-foreground text-sm">
                All {totalItems.toLocaleString()} rows loaded.
              </p>
            )}
            {error && (
              <Button
                onClick={onLoadMore}
                variant="ghost"
                size="sm"
                className="text-red-500 hover:text-red-600"
              >
                {error} &mdash; Click to retry
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
