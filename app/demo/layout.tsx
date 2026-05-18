import { ReactNode } from 'react';
import CommonLayout from 'src/components/Layouts/CommonLayout';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <CommonLayout>
      <div className="container">{children}</div>
    </CommonLayout>
  );
}
