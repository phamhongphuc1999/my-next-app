import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
  code: string;
  language?: 'react' | 'javascript';
}

export default function CodeBlock({ code, language }: Props) {
  return (
    <SyntaxHighlighter style={atelierCaveDark} language={language}>
      {code}
    </SyntaxHighlighter>
  );
}
