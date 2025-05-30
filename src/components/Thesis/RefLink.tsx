import Link from 'next/link';
import { THESIS_CLASS } from 'src/configs/constance';
import { useThesisObject } from 'src/context/ThesisConfigContext';
import { ThesisObjectType } from 'src/global';
import { cn } from 'src/lib/utils';

interface Props {
  toId: string;
  mode?: ThesisObjectType;
  className?: string;
}

export default function RefLink({ toId, mode, className }: Props) {
  const commonData = useThesisObject(toId, mode);

  return (
    <Link href={`#${toId}`} className={cn(THESIS_CLASS.refLink, className)}>
      {mode ?? 'figure'} {commonData?.index}
    </Link>
  );
}
