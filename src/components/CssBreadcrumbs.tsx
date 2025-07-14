import Link from 'next/link';
import { DivProps } from 'src/global';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from './shadcn-ui/breadcrumb';
import { Fragment } from 'react';

export interface CssBreadcrumbsProps extends DivProps {
  configs: Array<{ link?: string; label: string; formatter?: (label: string) => string }>;
}

export default function CssBreadcrumbs({ configs, ...props }: CssBreadcrumbsProps) {
  const len = configs.length - 1;

  return (
    <div {...props}>
      <Breadcrumb>
        <BreadcrumbList>
          {configs.map((item, index) => {
            const formatter = item?.formatter;

            return (
              <Fragment key={index}>
                <BreadcrumbItem>
                  {item.link ? (
                    <Link href={item.link} className="no-underline">
                      <p>{formatter ? formatter(item.label) : item.label}</p>
                    </Link>
                  ) : (
                    <p color="text-background">{formatter ? formatter(item.label) : item.label}</p>
                  )}
                </BreadcrumbItem>
                {index < len && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
