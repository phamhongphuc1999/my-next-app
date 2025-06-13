'use client';

import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import { TableOfContentType, ThesisFigureType } from 'src/global';
import { buildTableOfContent } from 'src/services/table-of-content';

interface ContentProps {
  parentIndex?: string | number;
  content: TableOfContentType;
}

function SubsectionTableOfContent({ parentIndex, content }: ContentProps) {
  return (
    <div className="ml-4">
      {content.map((item) => {
        const _title = parentIndex
          ? `${parentIndex}.${item.index} ${item.title}`
          : `${item.index} ${item.title}`;

        return (
          <div key={item.id}>
            <Link href={`#${item.id}`} className="mb-4 hover:underline">
              {_title}
            </Link>
          </div>
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
              className="mb-4 text-lg font-bold uppercase hover:underline"
            >{`Chapter ${item.index}. ${item.title}`}</Link>
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
  const [figures, setFigures] = useState<Array<Array<ThesisFigureType>>>([]);

  useEffect(() => {
    const { content, figures } = buildTableOfContent(id, firstLevel);
    setContent(content);
    setFigures(figures);
  }, [id, firstLevel]);

  return (
    <>
      <div className="mb-5">
        <p className="text-xl font-bold">Table of Content</p>
        {firstLevel == 'chapter' && <ChapterTableOfContent content={content} />}
        {firstLevel == 'section' && <SectionTableOfContent content={content} />}
      </div>
      <div className="mb-5">
        <p className="text-xl font-bold">List of Figures</p>
        {figures.map((chapterFigure, index) => {
          return (
            <div key={index} className="mt-3">
              {chapterFigure.map((figure) => {
                const title = `Figure ${figure.index} ${figure.title}`;

                return (
                  <div key={figure.id}>
                    <Link href={`#${figure.id}`} className="mb-4 hover:underline">
                      {title}
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      {children}
    </>
  );
}
