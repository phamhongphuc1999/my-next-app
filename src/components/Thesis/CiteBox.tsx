'use client';

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
    <div {...props} id={`cite_${cite.id}`} className={cn(THESIS_CLASS.cite, props.className)}>
      <p>
        {citeData?.index && `[${citeData.index}] `}
        {cite.author}, {`"${cite.title},"`} {cite.journal}, {cite.year}
      </p>
    </div>
  );
}
