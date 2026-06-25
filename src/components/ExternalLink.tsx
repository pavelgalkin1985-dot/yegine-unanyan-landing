import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

export function ExternalLink({ children, ...rest }: ExternalLinkProps) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}
