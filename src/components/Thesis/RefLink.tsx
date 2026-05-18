import Link from 'next/link';
import { THESIS_CLASS } from 'src/configs/constance';
import { ThesisObjectModeType } from 'src/global';
import { cn } from 'src/lib/utils';
import { capitalizeFirstLetter } from 'src/services';
import IndexLabel from './IndexLabel';

interface Props {
  toId: string;
  mode?: ThesisObjectModeType;
  className?: string;
}

export default function RefLink({ toId, mode, className }: Props) {
  const _mode = mode ?? 'figure';
  const _id = `${_mode}_${toId}`;

  return (
    <Link href={`#${_id}`} className={cn(THESIS_CLASS.ref, className)}>
      {_mode != 'cite' ? (
        <>
          {capitalizeFirstLetter(_mode)} <IndexLabel id={_id} mode={_mode} />
        </>
      ) : (
        <>
          [<IndexLabel id={_id} mode={_mode} />]
        </>
      )}
    </Link>
  );
}
