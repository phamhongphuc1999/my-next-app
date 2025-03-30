import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeBlock(
  props: Omit<SyntaxHighlighterProps, 'children'> & { code: string }
) {
  return (
    <SyntaxHighlighter style={docco} {...props}>
      {props.code}
    </SyntaxHighlighter>
  );
}
