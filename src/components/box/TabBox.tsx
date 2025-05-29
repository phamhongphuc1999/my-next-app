import { ReferenceConfig } from 'src/configs/layout.config';
import { DivProps, TabType } from 'src/global';
import { cn } from 'src/lib/utils';
import { Badge } from '../shadcn-ui/badge';

interface SpecialTabBoxProps extends DivProps {
  tabs: Array<TabType>;
}

export function SpecialTabBox({ tabs, ...props }: SpecialTabBoxProps) {
  return (
    <div {...props} className={cn('flex flex-wrap items-center gap-1', props.className)}>
      {tabs.map((tab) => {
        return (
          <Badge key={tab} className="cursor-pointer">
            {tab}
          </Badge>
        );
      })}
    </div>
  );
}

export interface TabBoxProps extends DivProps {
  index: number;
}

export default function TabBox({ index, ...props }: TabBoxProps) {
  return <SpecialTabBox tabs={ReferenceConfig[index].tabs} {...props} />;
}
