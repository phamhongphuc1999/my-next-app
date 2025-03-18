import Link from 'next/link';
import { DivProps } from 'src/global';
import { Breadcrumb, BreadcrumbItem } from './shadcn-ui/breadcrumb';

interface Props extends DivProps {
  configs: Array<{ link?: string; label: string; formatter?: (label: string) => string }>;
}

export default function CssBreadcrumbs({ configs, ...props }: Props) {
  return (
    <div {...props}>
      <Breadcrumb>
        <BreadcrumbItem>
          {configs.map((item, index) => {
            const formatter = item?.formatter;

            return item.link ? (
              <Link key={index} href={item.link} className="no-underline">
                <p>{formatter ? formatter(item.label) : item.label}</p>
              </Link>
            ) : (
              <p color="textSecondary" key={index}>
                {formatter ? formatter(item.label) : item.label}
              </p>
            );
          })}
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}
