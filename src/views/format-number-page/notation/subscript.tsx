import { subscript } from '@peter-present/format-number';
import { useMemo, useState } from 'react';
import { ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';
import TitleBox from 'src/components/box/TitleBox';
import CopyClipboard from 'src/components/CopyClipboard';
import { Input } from 'src/components/shadcn-ui/input';
import { useDebounceValue } from 'usehooks-ts';

export default function Subscript() {
  const [value, setValue] = useState('0');
  const [debounceValue] = useDebounceValue(value, 500);

  const result = useMemo(() => {
    return subscript(debounceValue);
  }, [debounceValue]);

  const fnText = useMemo(() => {
    return `subscript(${debounceValue})`;
  }, [debounceValue]);

  return (
    <div>
      <div id="subscript" className="bg-secondary scroll-mt-20 rounded-sm p-2">
        <span className="text-keyword">function</span> <span className="text-name">subscript</span>(
        <span className="text-params">value</span>: string): string
      </div>
      <p className="text-muted-foreground mt-2 text-sm">
        {
          'Formats the decimal part of small numbers using subscript characters to represent leading zeros (e.g., 0.0₄123).'
        }
      </p>
      <p className="my-4 text-lg font-bold">Params</p>
      <ArticleUL className="list-disc">
        <ArticleLI isFirst>
          <span>
            <span className="text-params">value</span> (string)
          </span>
          {': The number string to format.'}
        </ArticleLI>
      </ArticleUL>
      <p className="my-4 text-lg font-bold">Returns</p>
      <p>(string): The formatted number string in the specified notation.</p>
      <p className="my-4 text-lg font-bold">Example</p>
      <TitleBox
        title="value"
        value={
          <Input
            placeholder="Number"
            onChange={(event) => setValue(event.target.value)}
            value={value}
            type="number"
          />
        }
      />
      <div className="bg-sidebar relative mt-2 min-h-20 rounded-sm p-2">
        <CopyClipboard
          copyText={fnText}
          className="absolute top-2 right-2"
          iconprops={{ className: 'size-4' }}
        />
        <p>{fnText}</p>
        <p>{`Result: ${result}`}</p>
      </div>
    </div>
  );
}
