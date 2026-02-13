import { DivProps } from 'src/global';
import { cn } from 'src/lib/utils';
import CssBreadcrumbs, { CssBreadcrumbsProps } from './CssBreadcrumbs';
import TabBox, { TabBoxProps } from './box/TabBox';

interface Props extends DivProps {
  breadcrumbProps: CssBreadcrumbsProps;
  tabProps: TabBoxProps;
}

export default function TopicHeader({ breadcrumbProps, tabProps, ...props }: Props) {
  return (
    <div {...props} className={cn('container my-4', props.className)}>
      <CssBreadcrumbs {...breadcrumbProps} />
      <TabBox {...tabProps} className={cn('mt-4', tabProps.className)} />
    </div>
  );
}
