import { ReactNode } from 'react';
import CommonLayout from 'src/components/Layouts/CommonLayout';
import MathJaxProvider from 'src/components/MathJaxProvider';

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <MathJaxProvider>
      <CommonLayout>
        <div className="container">{children}</div>
      </CommonLayout>
    </MathJaxProvider>
  );
}
