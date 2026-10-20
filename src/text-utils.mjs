// Independent generic utilities; no application or domain dependencies.
export function collapseWhitespace(value) {
  if (typeof value !== 'string') throw new TypeError('Expected a string');
  return value.trim().replace(/\s+/gu, ' ');
}

export function chunkArray(values, size) {
  if (!Array.isArray(values)) throw new TypeError('Expected an array');
  if (!Number.isSafeInteger(size) || size < 1) throw new RangeError('Expected a positive safe integer');
  const chunks = [];
  for (let index = 0; index < values.length; index += size) chunks.push(values.slice(index, index + size));
  return chunks;
}
