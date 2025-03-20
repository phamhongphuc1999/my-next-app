'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';
import IconButton from 'src/components/buttons/IconButton';
import { CloseIcon } from 'src/components/icons';
import { Input } from 'src/components/shadcn-ui/input';
import { ReferenceConfig } from 'src/configs/constance';
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
        <Input
          placeholder="Search topic"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
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
      <ArticleUL className="mt-[1rem] list-decimal">
        {filteredTopics.map((item, index) => {
          return (
            <ArticleLI key={index}>
              <Link href={item.link} className="hover:underline">
                <p>{item.title}</p>
              </Link>
            </ArticleLI>
          );
        })}
      </ArticleUL>
    </>
  );
}
