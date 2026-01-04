import { RoundingMode } from '@peter-present/format-number';
import { ToggleGroup, ToggleGroupItem } from '../shadcn-ui/toggle-group';

const configs: Array<RoundingMode> = ['half', 'up', 'down', 'truncate', 'banker'];

interface Props {
  mode: RoundingMode;
  setMode: (mode: RoundingMode) => void;
}

export default function RoundTypeSelect({ mode = 'half', setMode }: Props) {
  return (
    <ToggleGroup className="bg-accent mt-2" type="single">
      {configs.map((item) => {
        return (
          <ToggleGroupItem
            key={item}
            value={item}
            onClick={() => setMode(item)}
            className="relative"
          >
            {item}
            {mode == item && (
              <div className="bg-destructive absolute right-1.5 bottom-0 left-1.5 h-0.5" />
            )}
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
}
