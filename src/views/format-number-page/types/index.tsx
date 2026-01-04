import { ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';
import { Separator } from 'src/components/shadcn-ui/separator';

export default function TypesPage() {
  return (
    <div>
      <div id="NumberType" className="bg-secondary scroll-mt-20 rounded-sm p-2">
        <span>
          <span className="text-keyword">type</span> <span className="text-name">NumberType</span> =
          number | string | bigint
        </span>
      </div>
      <p className="mt-2">{'Supported input types for number formatting'}</p>
      <Separator className="my-2" />
      <div id="RoundingMode" className="bg-secondary scroll-mt-20 rounded-sm p-2">
        <span className="text-keyword">type</span> <span className="text-name">RoundingMode</span> =
        'half' | 'up' | 'down' | 'banker' | 'truncate'
      </div>
      <p className="mt-2">{'Strategies for rounding numbers'}</p>
      <Separator className="my-2" />
      <div id="RoundingConfigType" className="bg-secondary scroll-mt-20 rounded-sm p-2">
        <span className="text-keyword">type</span>{' '}
        <span className="text-name">RoundingConfigType</span> <span>{' = Partial<{ '}</span>
        <span className="text-params">mode</span>
        <span>{': RoundingMode; '}</span>
        <span className="text-params">precision</span>
        <span>{': number; }>'}</span>
      </div>
      <p className="mt-2">{'Configuration for rounding operations'}</p>
      <ArticleUL className="list-disc">
        <ArticleLI isFirst>
          <span className="text-params">mode</span>: The rounding strategy to use
        </ArticleLI>
        <ArticleLI>
          <span className="text-params">precision</span>: Number of decimal places to keep
        </ArticleLI>
      </ArticleUL>
      <Separator className="my-2" />
      <div id="OtherMetadataType" className="bg-secondary scroll-mt-20 rounded-sm p-2">
        <span>
          <span className="text-keyword">type</span>{' '}
          <span className="text-name">OtherMetadataType</span> = Partial
        </span>
        <span>{'<{ '}</span>
        <span>
          <span className="text-params">prefix</span>: string;{' '}
          <span className="text-params">suffix</span>: string;{' '}
          <span className="text-params">isSmall</span>: boolean;
          <span className="text-params">isScientific</span>: boolean;
        </span>
        <span>{' }>'}</span>
      </div>
      <p className="mt-2">Metadata for adding prefix, suffix or special notations</p>
      <ArticleUL className="list-disc">
        <ArticleLI isFirst>
          <span className="text-params">prefix</span>: Text to prepend to the number
        </ArticleLI>
        <ArticleLI isFirst>
          <span className="text-params">suffix</span>: Text to append to the number
        </ArticleLI>
        <ArticleLI isFirst>
          <span className="text-params">isSmall</span>: Whether to use subscript notation for small
          numbers
        </ArticleLI>
        <ArticleLI isFirst>
          <span className="text-params">isScientific</span>: Whether to use scientific notation for
          very large/small numbers
        </ArticleLI>
      </ArticleUL>
    </div>
  );
}
