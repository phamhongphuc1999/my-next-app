'use client';

import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import { TableOfContentType } from 'src/global';
import { buildTableOfContent } from 'src/services/table-of-content';

interface ContentProps {
  parentIndex?: string | number;
  content: TableOfContentType;
}

function SubsectionTableOfContent({ parentIndex, content }: ContentProps) {
  return (
    <div>
      {content.map((item) => {
        const _title = parentIndex
          ? `${parentIndex}.${item.index} ${item.title}`
          : `${item.index} ${item.title}`;

        return (
          <Link key={item.id} href={`#${item.id}`} className="mb-4 hover:underline">
            {_title}
          </Link>
        );
      })}
    </div>
  );
}

function SectionTableOfContent({ parentIndex, content }: ContentProps) {
  return (
    <div>
      {content.map((item) => {
        const _index = parentIndex ? `${parentIndex}.${item.index}` : `${item.index}`;
        const _title = parentIndex ? `${_index} ${item.title}` : `${_index} ${item.title}`;

        return (
          <div key={item.id}>
            <Link href={`#${item.id}`} className="mb-4 hover:underline">
              {_title}
            </Link>
            <SubsectionTableOfContent parentIndex={_index} content={item.content} />
          </div>
        );
      })}
    </div>
  );
}

function ChapterTableOfContent({ content }: ContentProps) {
  return (
    <div>
      {content.map((item) => {
        return (
          <div key={item.id}>
            <Link
              href={`#${item.id}`}
              className="mb-4 text-lg font-bold hover:underline"
            >{`${item.index} ${item.title}`}</Link>
            <SectionTableOfContent parentIndex={item.index} content={item.content} />
          </div>
        );
      })}
    </div>
  );
}

interface Props {
  id: string;
  firstLevel: 'chapter' | 'section';
  children: ReactNode;
}

export default function TableOfContent({ id, firstLevel, children }: Props) {
  const [content, setContent] = useState<TableOfContentType>([]);

  useEffect(() => {
    const result = buildTableOfContent(id, firstLevel);
    if (result) setContent(result);
  }, [id, firstLevel]);

  return (
    <>
      <div className="mb-5">
        <p className="text-xl font-bold">Table of Content</p>
        {firstLevel == 'chapter' && <ChapterTableOfContent content={content} />}
        {firstLevel == 'section' && <SectionTableOfContent content={content} />}
      </div>
      {children}
    </>
  );
}
