import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeProps {
  isInline: boolean;
  value: {
    code: string;
    language: string;
  };
}

const serializers = {
  types: {
    code: (props: CodeProps) => (
      <SyntaxHighlighter language={props.value.language} style={docco}>
        {props.value.code}
      </SyntaxHighlighter>
    ),
  },
};

export default serializers;
