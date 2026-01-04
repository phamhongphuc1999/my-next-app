import SyntaxHighlighter, { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CopyClipboard from '../CopyClipboard';

export type SyntaxHighlighterLanguage =
  | 'javascript'
  | 'typescript'
  | 'jsx'
  | 'tsx'
  | 'json'
  | 'html'
  | 'xml'
  | 'css'
  | 'scss'
  | 'less'
  | 'bash'
  | 'shell'
  | 'sh'
  | 'python'
  | 'java'
  | 'c'
  | 'cpp'
  | 'csharp'
  | 'go'
  | 'php'
  | 'ruby'
  | 'rust'
  | 'sql'
  | 'kotlin'
  | 'swift'
  | 'r'
  | 'perl'
  | 'lua'
  | 'scala'
  | 'haskell'
  | 'markdown'
  | 'yaml'
  | 'toml'
  | 'ini'
  | 'dockerfile'
  | 'powershell'
  | 'solidity'
  | 'react'
  | 'graphql'
  | 'nginx'
  | 'dart';

export interface CodeBlockProps {
  code: string;
  language?: SyntaxHighlighterLanguage;
  isShowCopy?: boolean;
  codeProps?: Omit<SyntaxHighlighterProps, 'children'>;
}

export default function CodeBlock({
  code,
  language,
  isShowCopy = true,
  codeProps,
}: CodeBlockProps) {
  return (
    <div className="relative">
      {isShowCopy && (
        <CopyClipboard
          copyText={code}
          className="absolute top-1/2 right-3 -translate-y-1/2"
          iconprops={{ width: 12, height: 12 }}
        />
      )}
      <SyntaxHighlighter
        {...codeProps}
        style={{ ...atelierCaveDark, ...codeProps?.style }}
        language={language}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
