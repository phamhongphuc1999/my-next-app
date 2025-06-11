'use client';

import Link from 'next/link';
import { THESIS_CLASS } from 'src/configs/constance';
import { useThesisObject } from 'src/context/ThesisConfigContext';
import { DivProps, ThesisCiteType } from 'src/global';
import { cn } from 'src/lib/utils';

interface Props extends DivProps {
  cite: ThesisCiteType;
}

export default function CiteBox({ cite, ...props }: Props) {
  const citeData = useThesisObject(`cite_${cite.id}`, 'cite');

  return (
    <div
      {...props}
      id={`cite_${cite.id}`}
      className={cn(THESIS_CLASS.cite, 'mt-2', props.className)}
    >
      <p>
        {citeData?.index && `[${citeData.index}] `}
        {cite.author}, {`"${cite.title},"`} <span className="italic">{cite.journal}</span>,{' '}
        {cite.year}.{' '}
        {cite.DOI && (
          <>
            DOI:{' '}
            <Link target="_blank" href={cite.DOI} className="hover:underline">
              {cite.DOI}
            </Link>
            .
          </>
        )}
        {cite.url && (
          <>
            {' '}
            [Online]. Available:{' '}
            <Link target="_blank" href={cite.url} className="hover:underline">
              {cite.url}
            </Link>
            .
          </>
        )}
      </p>
    </div>
  );
}
