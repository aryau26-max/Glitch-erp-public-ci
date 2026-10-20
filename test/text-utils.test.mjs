import assert from 'node:assert/strict';
import test from 'node:test';
import { chunkArray, collapseWhitespace } from '../src/text-utils.mjs';

test('empty text', () => assert.equal(collapseWhitespace(''), ''));
test('whitespace-only text', () => assert.equal(collapseWhitespace(' \t\n'), ''));
test('normalizes synthetic text', () => assert.equal(collapseWhitespace('  alpha\t beta\n gamma  '), 'alpha beta gamma'));
test('preserves Unicode letters', () => assert.equal(collapseWhitespace('  café\u2003世界 '), 'café 世界'));
test('normalization is idempotent', () => {
  const once = collapseWhitespace(' one\t two ');
  assert.equal(collapseWhitespace(once), once);
});
test('rejects non-string text', () => assert.throws(() => collapseWhitespace(null), TypeError));
test('empty array', () => assert.deepEqual(chunkArray([], 2), []));
test('exact chunks', () => assert.deepEqual(chunkArray([1, 2, 3, 4], 2), [[1, 2], [3, 4]]));
test('partial final chunk', () => assert.deepEqual(chunkArray([1, 2, 3], 2), [[1, 2], [3]]));
test('oversized chunk', () => assert.deepEqual(chunkArray([1], 8), [[1]]));
test('preserves frozen input', () => {
  const input = Object.freeze([1, 2, 3]);
  const chunks = chunkArray(input, 2);
  chunks[0][0] = 99;
  assert.deepEqual(input, [1, 2, 3]);
});
test('rejects non-array input', () => assert.throws(() => chunkArray('abc', 1), TypeError));
test('rejects invalid chunk sizes', () => {
  for (const size of [0, -1, 1.5, NaN, Infinity, Number.MAX_SAFE_INTEGER + 1, '2']) {
    assert.throws(() => chunkArray([], size), RangeError);
  }
});
test('deterministic reconstruction across sizes', () => {
  const input = Array.from({ length: 25 }, (_, i) => i);
  for (let size = 1; size <= 30; size++) assert.deepEqual(chunkArray(input, size).flat(), input);
});
