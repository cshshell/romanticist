// formata a data tipo 2025.01.15, fica limpo no mono.
// uso utc pra nao ter drift de timezone no build estatico
export function formatDate(date: Date): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}.${m}.${d}`;
}
