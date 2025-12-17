declare module 'react-katex' {
  import { ReactNode } from 'react';

  interface KatexProps {
    children?: string;
    math?: string;
    errorColor?: string;
    renderError?: (error: Error) => ReactNode;
  }

  export const BlockMath: React.FC<KatexProps>;
  export const InlineMath: React.FC<KatexProps>;
}
