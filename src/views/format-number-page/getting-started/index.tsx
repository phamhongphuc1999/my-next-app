'use client';

import Image from 'next/image';
import { useState } from 'react';
import CopyClipboard from 'src/components/CopyClipboard';
import { Separator } from 'src/components/shadcn-ui/separator';
import { ToggleGroup, ToggleGroupItem } from 'src/components/shadcn-ui/toggle-group';

type CliType = 'npm' | 'yarn' | 'pnpm' | 'bun';

const configs: { [id in CliType]: { id: CliType; img: string; title: string; cli: string } } = {
  npm: {
    id: 'npm',
    img: '/images/cli/npm.svg',
    title: 'npm',
    cli: 'npm install @peter-present/format-number',
  },
  yarn: {
    id: 'yarn',
    img: '/images/cli/yarn.svg',
    title: 'Yarn',
    cli: 'yarn add @peter-present/format-number',
  },
  pnpm: {
    id: 'pnpm',
    img: '/images/cli/pnpm.svg',
    title: 'pnpm',
    cli: 'pnpm create @peter-present/format-number',
  },
  bun: {
    id: 'bun',
    img: '/images/cli/bun.svg',
    title: 'Bun',
    cli: 'bun add @peter-present/format-number',
  },
};

export default function GettingStartedPage() {
  const [cli, setCli] = useState<CliType>('npm');

  return (
    <div>
      <p className="text-2xl font-bold">Getting Started</p>
      <p className="mt-2">
        {
          'A lightweight, high-precision JavaScript/TypeScript library for rounding and formatting numbers. It handles everything from large financial figures and crypto balances to extremely small fractions with scientific subscripts.'
        }
      </p>
      <p className="mt-5 text-lg font-bold">Installation</p>
      <Separator />
      <div className="bg-secondary rounded-2xl">
        <ToggleGroup className="mt-2" type="single">
          {Object.values(configs).map((config) => {
            return (
              <ToggleGroupItem key={config.id} value={config.id} onClick={() => setCli(config.id)}>
                <Image src={config.img} alt={config.title} width={12} height={12} />
                <p>{config.title}</p>
              </ToggleGroupItem>
            );
          })}
        </ToggleGroup>
        <div className="border-border mx-3 flex items-center justify-between border-t">
          <p className="text-xl">{configs[cli].cli}</p>
          <CopyClipboard copyText={configs[cli].cli} iconprops={{ className: 'size-3.5' }} />
        </div>
      </div>
    </div>
  );
}
