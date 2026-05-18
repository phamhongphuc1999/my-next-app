'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import InfiniteScrollTable, { type ColumnDef } from 'src/components/InfiniteScrollTable';

interface RowData {
  id: number;
  title: string;
}

const BATCH_SIZE = 50;
const TOTAL_ITEMS = 10_000;

async function _fetch(cursor: number): Promise<RowData[]> {
  await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 600));

  const remaining = TOTAL_ITEMS - cursor;
  const count = Math.min(BATCH_SIZE, remaining);

  return Array.from({ length: count }, (_, i) => ({
    id: cursor + i + 1,
    title: `Row #${cursor + i + 1} — Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  }));
}

const columns: ColumnDef<RowData>[] = [
  {
    header: '#',
    cell: (row) => row.id,
    className: 'w-20 shrink-0 font-mono text-xs text-muted-foreground',
  },
  {
    header: 'Title',
    cell: (row) => row.title,
    className: 'flex-1 truncate',
  },
];

export default function TableView() {
  const [rows, setRows] = useState<RowData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const cursorRef = useRef(0);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    setError(null);

    try {
      const newRows = await _fetch(cursorRef.current);
      if (newRows.length === 0) {
        setHasMore(false);
      } else {
        setRows((prev) => [...prev, ...newRows]);
        cursorRef.current += newRows.length;
        if (cursorRef.current >= TOTAL_ITEMS) setHasMore(false);
      }
    } catch {
      setError('Failed to load data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasMore]);

  useEffect(() => {
    loadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InfiniteScrollTable
      rows={rows}
      totalItems={TOTAL_ITEMS}
      isLoading={isLoading}
      hasMore={hasMore}
      error={error}
      onLoadMore={loadMore}
      columns={columns}
      header={<h2 className="text-lg font-bold">Infinite Scroll Table</h2>}
      onRowClick={(index, data) => {
        alert(`Index: ${index}, data: ${JSON.stringify(data)}`);
      }}
    />
  );
}
