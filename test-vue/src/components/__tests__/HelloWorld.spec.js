import { expect, test } from 'vitest';
import { getName } from '../../utils/helpers';

test('gets name as uppercase', () => {
  expect(getName('ahmed')).toBe('AHMED');
});
