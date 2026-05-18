'use client';

import { ComponentProps } from 'react';
import { SearchIcon, XIcon } from 'src/components/icons';
import BaseInput from './BaseInput';

interface Props extends ComponentProps<'input'> {
  name: string;
  rootprops?: ComponentProps<'div'>;
  events: {
    setSearchText: (value: string) => void;
  };
}

export default function SearchInput({ name, rootprops, events, ...props }: Props) {
  function onTextChange(text: string) {
    events.setSearchText(text);
  }

  function onResetSearch() {
    events.setSearchText('');
  }

  return (
    <BaseInput
      {...props}
      name={name}
      rootprops={rootprops}
      onChange={(event) => onTextChange(event.target.value)}
      icon={{
        start: <SearchIcon className="size-4" />,
        end: <XIcon className="size-4 cursor-pointer" onClick={onResetSearch} />,
      }}
    />
  );
}
