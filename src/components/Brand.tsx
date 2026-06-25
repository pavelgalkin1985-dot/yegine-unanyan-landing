import { specialist } from '../data/siteContent';

export function Brand({ ariaLabel }: { ariaLabel?: string }) {
  return (
    <a className="brand" href="#top" aria-label={ariaLabel}>
      <span className="brand-mark">{'ЕУ'}</span>
      <span>{specialist.shortName}</span>
    </a>
  );
}
