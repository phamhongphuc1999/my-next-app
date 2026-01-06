import { ReactNode } from 'react';

interface Props {
  id: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}

export default function Item({ id, title, description, children }: Props) {
  return (
    <div>
      <div id={id} className="bg-secondary scroll-mt-20 rounded-sm p-2">
        {title}
      </div>
      <p className="mt-2">{description}</p>
      {children}
    </div>
  );
}
