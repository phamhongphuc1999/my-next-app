'use client';

import Link from 'next/link';
import { THESIS_CLASS } from 'src/configs/constance';
import { useThesisObject } from 'src/context/ThesisConfigContext';
import { ThesisObjectModeType } from 'src/global';
import { cn } from 'src/lib/utils';
import { capitalizeFirstLetter } from 'src/services';

interface Props {
  toId: string;
  mode?: ThesisObjectModeType;
  className?: string;
}

export default function RefLink({ toId, mode, className }: Props) {
  const _mode = mode ?? 'figure';
  const _id = `${_mode}_${toId}`;
  const commonData = useThesisObject(_id, _mode);

  return (
    <Link href={`#${_id}`} className={cn(THESIS_CLASS.ref, className)}>
      {_mode != 'cite'
        ? `${capitalizeFirstLetter(_mode)} ${commonData?.index}`
        : `[${commonData?.index}]`}
    </Link>
  );
}
