'use client';

import { FN, RoundingMode } from '@peter-present/format-number';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArticleLI, ArticleUL } from 'src/components/box/ArticleBox';
import TitleBox from 'src/components/box/TitleBox';
import CopyClipboard from 'src/components/CopyClipboard';
import RoundTypeSelect from 'src/components/format-number/RoundTypeSelect';
import { Input } from 'src/components/shadcn-ui/input';
import { Toggle } from 'src/components/shadcn-ui/toggle';
import { useDebounceValue } from 'usehooks-ts';

export default function FormatPage() {
  const [value, setValue] = useState('1234.567');
  const [debounceValue] = useDebounceValue(value, 500);
  const [rounding, setRounding] = useState<RoundingMode>('half');
  const [precision, setPrecision] = useState('2');
  const [prefix, setPrefix] = useState('$');
  const [suffix, setSuffix] = useState('');
  const [isCompact, setIsCompact] = useState(false);

  const result = useMemo(() => {
    let formatter = FN(debounceValue).round({
      rounding,
      precision: precision ? parseInt(precision) : undefined,
    });
    if (isCompact) formatter = formatter.compact();
    if (prefix) formatter = formatter.prefix(prefix);
    if (suffix) formatter = formatter.suffix(suffix);
    return formatter.toNumber();
  }, [debounceValue, rounding, precision, prefix, suffix, isCompact]);

  const fnCode = useMemo(() => {
    let code = `FN('${debounceValue}')`;
    if (rounding !== 'half' || (precision && precision !== '0')) {
      const opts: string[] = [];
      if (rounding !== 'half') opts.push(`rounding: '${rounding}'`);
      if (precision && precision !== '0') opts.push(`precision: ${precision}`);
      code += `.round({ ${opts.join(', ')} })`;
    }
    if (isCompact) code += '.compact()';
    if (prefix) code += `.prefix('${prefix}')`;
    if (suffix) code += `.suffix('${suffix}')`;
    code += '.toNumber();';
    return code;
  }, [debounceValue, rounding, precision, prefix, suffix, isCompact]);

  return (
    <div className="flex flex-col gap-6">
      <section>
        <div id="fn" className="bg-secondary scroll-mt-20 rounded-sm p-2">
          <span className="text-keyword">function</span> <span className="text-name">FN</span>(
          <span className="text-params">value</span>:{' '}
          <Link href="/format-number/types#NumberType">
            <span className="font-semibold hover:underline">NumberType</span>
          </Link>
          ): <span className="text-name">Formatter</span>
        </div>
        <p className="mt-2">
          {'Fluent API for performing multiple formatting operations in a readable chain.'}
        </p>
      </section>

      <p className="my-4 text-lg font-bold">Params</p>
      <ArticleUL className="list-disc">
        <ArticleLI isFirst>
          <span>
            <span className="text-params">value</span> (
            <Link href="/format-number/types#NumberType">
              <span className="font-semibold hover:underline">NumberType</span>
            </Link>
            )
          </span>
          {': The initial value to format. Can be a number, string, or bigint.'}
        </ArticleLI>
      </ArticleUL>

      <p className="my-4 text-lg font-bold">Methods</p>
      <ArticleUL className="list-disc text-sm">
        <ArticleLI isFirst>
          <code className="text-blue-400">.round(options)</code>: Sets rounding strategy and
          precision.
        </ArticleLI>
        <ArticleLI>
          <code className="text-blue-400">.compact()</code>: Formats the number into a short,
          human-readable string (K, M, B).
        </ArticleLI>
        <ArticleLI>
          <code className="text-blue-400">.prefix(symbol)</code>: Prepends a string (e.g., "$").
        </ArticleLI>
        <ArticleLI>
          <code className="text-blue-400">.suffix(symbol)</code>: Appends a string (e.g., " units").
        </ArticleLI>
        <ArticleLI>
          <code className="text-blue-400">.toNumber()</code>: Returns the final formatted string.
        </ArticleLI>
      </ArticleUL>

      <p className="my-4 text-lg font-bold">Returns</p>
      <p>(Formatter): A chainable object for further formatting.</p>

      <p className="my-4 text-lg font-bold">Try it out</p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <p className="text-lg font-bold">Configuration</p>
          <TitleBox
            title="value"
            value={
              <Input
                placeholder="Number"
                onChange={(event) => setValue(event.target.value)}
                value={value}
              />
            }
          />
          <TitleBox
            title="rounding"
            value={<RoundTypeSelect mode={rounding} setMode={setRounding} />}
          />
          <div className="grid grid-cols-2 gap-2">
            <TitleBox
              title="precision"
              value={
                <Input
                  className="mt-2"
                  placeholder="precision"
                  onChange={(event) => setPrecision(event.target.value)}
                  type="number"
                  value={precision}
                />
              }
            />
            <TitleBox
              title="isCompact"
              value={
                <Toggle
                  pressed={isCompact}
                  onPressedChange={setIsCompact}
                  variant="outline"
                  className="mt-2 w-full"
                >
                  {isCompact ? 'ON' : 'OFF'}
                </Toggle>
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <TitleBox
              title="prefix"
              value={
                <Input
                  className="mt-2"
                  placeholder="prefix"
                  onChange={(event) => setPrefix(event.target.value)}
                  value={prefix}
                />
              }
            />
            <TitleBox
              title="suffix"
              value={
                <Input
                  className="mt-2"
                  placeholder="suffix"
                  onChange={(event) => setSuffix(event.target.value)}
                  value={suffix}
                />
              }
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-lg font-bold">Interactive Example</p>
          <div className="bg-sidebar group border-sidebar-border relative min-h-32 rounded-sm border p-4">
            <CopyClipboard
              copyText={fnCode}
              className="absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100"
              iconprops={{ className: 'size-4' }}
            />
            <code className="block font-mono text-sm leading-relaxed whitespace-pre-wrap">
              {fnCode}
            </code>
            <div className="border-sidebar-border mt-6 border-t pt-4">
              <p className="text-muted-foreground mb-1 text-xs tracking-wider uppercase">Output</p>
              <p className="text-primary font-mono text-xl font-bold">{`"${result}"`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
