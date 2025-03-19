import { DivProps } from 'src/global';
import { twMerge } from 'tailwind-merge';
import AppNextSeo, { AppNextSeoProps } from './AppNextSeo';
import CssBreadcrumbs, { CssBreadcrumbsProps } from './CssBreadcrumbs';
import TabBox, { TabBoxProps } from './box/TabBox';

interface Props extends DivProps {
  seoProps?: AppNextSeoProps;
  breadcrumbProps: CssBreadcrumbsProps;
  tabProps: TabBoxProps;
}

export default function TopicHeader({ seoProps = {}, breadcrumbProps, tabProps, ...props }: Props) {
  return (
    <div {...props} className={twMerge('my-[1rem]', props.className)}>
      <AppNextSeo {...seoProps} />
      <CssBreadcrumbs {...breadcrumbProps} />
      <TabBox {...tabProps} className={twMerge('mt-[1rem]', tabProps.className)} />
    </div>
  );
}
