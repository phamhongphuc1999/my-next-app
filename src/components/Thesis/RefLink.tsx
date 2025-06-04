import Link from 'next/link';
import { THESIS_CLASS } from 'src/configs/constance';
import { useThesisObject } from 'src/context/ThesisConfigContext';
import { ThesisObjectModeType } from 'src/global';
import { cn } from 'src/lib/utils';
import { capitalizeFirstLetter } from 'src/services';

interface Props {
  toId: string;
  mode?: ThesisObjectModeType;
  isUppercase?: boolean;
  className?: string;
}

export default function RefLink({ toId, mode, isUppercase, className }: Props) {
  const commonData = useThesisObject(toId, mode);
  const _title = mode ?? 'figure';

  return (
    <Link href={`#${toId}`} className={cn(THESIS_CLASS.ref, className)}>
      {mode != 'cite'
        ? `${isUppercase ? capitalizeFirstLetter(_title) : _title} ${commonData?.index}`
        : `[${commonData?.index}]`}
    </Link>
  );
}
