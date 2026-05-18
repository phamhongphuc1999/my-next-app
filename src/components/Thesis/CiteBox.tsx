import Link from 'next/link';
import { Fragment } from 'react';
import { THESIS_CLASS } from 'src/configs/constance';
import { DivProps, ThesisCiteType } from 'src/global';
import { cn } from 'src/lib/utils';
import IndexLabel from './IndexLabel';

interface Props extends DivProps {
  cite: ThesisCiteType;
}

export default function CiteBox({ cite, ...props }: Props) {
  return (
    <div
      {...props}
      id={`cite_${cite.id}`}
      className={cn(THESIS_CLASS.cite, 'mt-2', props.className)}
    >
      <p>
        <IndexLabel id={`cite_${cite.id}`} mode="cite" prefix="[" suffix="] " />
        {cite.author}, {`"${cite.title},"`}{' '}
        {cite.journal && <Fragment>{<span className="italic">{cite.journal},</span>}</Fragment>}{' '}
        {cite.year}.{' '}
        {cite.DOI && (
          <Fragment>
            DOI:{' '}
            <Link target="_blank" href={cite.DOI} className="hover:underline">
              {cite.DOI}
            </Link>
            .
          </Fragment>
        )}
        {cite.url && (
          <Fragment>
            {' '}
            [Online]. Available:{' '}
            <Link target="_blank" href={cite.url} className="hover:underline">
              {cite.url}
            </Link>
            .
          </Fragment>
        )}
      </p>
    </div>
  );
}
