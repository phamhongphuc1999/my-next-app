import { ReactNode } from 'react';
import { Separator } from '../shadcn-ui/separator';

interface Props {
  id: string;
  title: ReactNode;
  description: string;
  isSeparator?: boolean;
  children?: ReactNode;
}

export default function ElementItem(params: Props) {
  const { id, title, description, isSeparator = true, children } = params;

  return (
    <div>
      <div id={id} className="bg-secondary scroll-mt-20 rounded-sm p-2">
        {title}
      </div>
      <p className="mt-2">{description}</p>
      {children}
      {isSeparator && <Separator className="my-2" />}
    </div>
  );
}
