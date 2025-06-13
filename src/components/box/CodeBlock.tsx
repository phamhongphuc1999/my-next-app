import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <SyntaxHighlighter style={atelierCaveDark} language={language}>
      {code}
    </SyntaxHighlighter>
  );
}
