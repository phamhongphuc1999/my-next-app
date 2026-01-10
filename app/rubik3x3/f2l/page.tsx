import { Info } from 'lucide-react';
import AppNextSeo from 'src/components/AppNextSeo';
import TabBox from 'src/components/box/TabBox';
import CssBreadcrumbs from 'src/components/CssBreadcrumbs';
import { Tooltip, TooltipContent, TooltipTrigger } from 'src/components/shadcn-ui/tooltip';
import F2lView from 'src/views/rubik3x3/F2lView';

export default function F2L() {
  return (
    <div className="container">
      <div className="my-4">
        <AppNextSeo title="Rubik 3x3 | F2L" />
        <CssBreadcrumbs
          configs={[
            { label: 'Home', link: '/' },
            { label: 'Rubik 3x3', link: '/rubik3x3' },
            { label: 'f2l' },
          ]}
        />
        <div className="mt-4 flex items-center gap-2">
          <TabBox index={9} />
          <Tooltip>
            <TooltipTrigger>
              <Info width={12} height={12} />
            </TooltipTrigger>
            <TooltipContent className="w-10">
              <p>
                {
                  'Some the first methods have more steps than others but because they focus on R and U faces, players can solve faster than other methods'
                }
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <F2lView />
    </div>
  );
}
