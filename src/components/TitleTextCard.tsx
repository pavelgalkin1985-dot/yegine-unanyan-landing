export function TitleTextCard({ title, text, className }: { title: string; text: string; className?: string }) {
  return (
    <article className={className}>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
