// estima tempo de leitura. tira comentarios e blocos de codigo pra nao inflar.
// retorna 0 se o post ta vazio (ai a gente esconde no layout)
export function readingTime(body: string): number {
  const text = body
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ') // comentario mdx {/* ... */}
    .replace(/<!--[\s\S]*?-->/g, ' ') // comentario html
    .replace(/```[\s\S]*?```/g, ' ') // bloco de codigo
    .replace(/`[^`]*`/g, ' ') // code inline
    .replace(/[#>*_~\[\]()!-]/g, ' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  if (words === 0) return 0;
  return Math.max(1, Math.round(words / 200));
}
