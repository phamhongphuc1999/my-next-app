import Link from 'next/link';
import { THESIS_CLASS } from 'src/configs/constance';
import { useThesisObject } from 'src/context/ThesisConfigContext';
import { ThesisObjectModeType } from 'src/global';
import { cn } from 'src/lib/utils';

interface Props {
  toId: string;
  mode?: ThesisObjectModeType;
  className?: string;
}

export default function RefLink({ toId, mode, className }: Props) {
  const commonData = useThesisObject(toId, mode);

  return (
    <Link href={`#${toId}`} className={cn(THESIS_CLASS.ref, className)}>
      {mode != 'cite' ? `${mode ?? 'figure'} ${commonData?.index}` : `[${commonData?.index}]`}
    </Link>
  );
}
