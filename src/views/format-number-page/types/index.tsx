import { ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';
import { Separator } from 'src/components/shadcn-ui/separator';
import Item from './item';

export default function TypesPage() {
  return (
    <div>
      <Item
        id="NumberType"
        title={
          <span>
            <span className="text-keyword">type</span> <span className="text-name">NumberType</span>{' '}
            = number | string | bigint
          </span>
        }
        description="Supported input types for number formatting"
      />
      <Separator className="my-2" />
      <Item
        id="RoundingMode"
        title={
          <>
            <span className="text-keyword">type</span>{' '}
            <span className="text-name">RoundingMode</span> = 'half' | 'up' | 'down' | 'banker' |
            'truncate'
          </>
        }
        description="Strategies for rounding numbers"
      >
        <ArticleUL className="list-disc">
          <ArticleLI isFirst>
            {'half: Round to the nearest neighbor. If equidistant, round away from zero.'}
          </ArticleLI>
          <ArticleLI>{'up: Round towards Positive Infinity.'}</ArticleLI>
          <ArticleLI>{'down: Round towards Negative Infinity.'}</ArticleLI>
          <ArticleLI>{'truncate: Round towards Zero.'}</ArticleLI>
          <ArticleLI>
            {'banker: Round to the nearest even neighbor (Statistical rounding).'}
          </ArticleLI>
        </ArticleUL>
      </Item>
      <Separator className="my-2" />
      <Item
        id="NotationMode"
        title={
          <>
            <span className="text-keyword">type</span>{' '}
            <span className="text-name">NotationMode</span> = 'subscript' | 'scientific'
          </>
        }
        description="Modes for special numerical notation"
      />
      <Separator className="my-2" />
      <Item
        id="SignType"
        title={
          <>
            <span className="text-keyword">type</span> <span className="text-name">SignType</span> =
            '-' | ''
          </>
        }
        description="Possible sign values for internal number representation"
      />
      <Separator className="my-2" />
      <Item
        id="RoundingConfigType"
        description="Configuration for rounding operations"
        title={
          <>
            <span className="text-keyword">type</span>{' '}
            <span className="text-name">RoundingConfigType</span> <span>{' = Partial<{ '}</span>
            <span className="text-params">rounding</span>
            <span>{': RoundingMode; '}</span>
            <span className="text-params">precision</span>
            <span>{': number; }>'}</span>
          </>
        }
      >
        <ArticleUL className="list-disc">
          <ArticleLI isFirst>
            <span className="text-params">rounding</span>: The rounding strategy to use
          </ArticleLI>
          <ArticleLI>
            <span className="text-params">precision</span>: Number of decimal places to keep
          </ArticleLI>
        </ArticleUL>
      </Item>
      <Separator className="my-2" />
      <Item
        id="NumberConfigType"
        description="Configuration for basic number display properties"
        title={
          <>
            <span className="text-keyword">type</span>{' '}
            <span className="text-name">NumberConfigType</span> <span>{' = Partial<{ '}</span>
            <span className="text-params">prefix</span>
            <span>{': string; '}</span>
            <span className="text-params">suffix</span>
            <span>{': string; '}</span>
            <span className="text-params">notation</span>
            <span>{': NotationMode; }>'}</span>
          </>
        }
      >
        <ArticleUL className="list-disc">
          <ArticleLI isFirst>
            <span className="text-params">prefix</span>: Text to prepend to the number (e.g., '$')
          </ArticleLI>
          <ArticleLI>
            <span className="text-params">suffix</span>: Text to append to the number (e.g., '
            units')
          </ArticleLI>
          <ArticleLI>
            <span className="text-params">notation</span>: The notation style to apply
          </ArticleLI>
        </ArticleUL>
      </Item>
      <Separator className="my-2" />
      <Item
        id="ObjectNumberType"
        description="Internal object structure containing full formatting state"
        title={
          <>
            <span className="text-keyword">type</span>{' '}
            <span className="text-name">ObjectNumberType</span>{' '}
            <span>{' = { sign: SignType; value: string } & NumberConfigType & Partial<{ '}</span>
            <span className="text-params">compactedSymbol</span>
            <span>{': string; }>'}</span>
          </>
        }
      >
        <ArticleUL className="list-disc">
          <ArticleLI isFirst>
            <span className="text-params">compactedSymbol</span>: The symbol used for compact
            notation (e.g., 'K', 'M')
          </ArticleLI>
        </ArticleUL>
      </Item>
      <Separator className="my-2" />
      <Item
        id="FormattingConfigType"
        description="Full configuration options for the formatNumber function"
        title={
          <>
            <span className="text-keyword">type</span>{' '}
            <span className="text-name">FormattingConfigType</span>{' '}
            <span>{' = RoundingConfigType & NumberConfigType & Partial<{ '}</span>
            <span className="text-params">isCompact</span>
            <span>{': boolean; }>'}</span>
          </>
        }
      >
        <ArticleUL className="list-disc">
          <ArticleLI isFirst>
            <span className="text-params">isCompact</span>: Whether to use compact notation (K, M,
            B, etc.)
          </ArticleLI>
        </ArticleUL>
      </Item>
    </div>
  );
}
