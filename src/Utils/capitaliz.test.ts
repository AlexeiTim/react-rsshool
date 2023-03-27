import { getCapitalizedString } from './capitaliz';

test('capitalized test', () => {
  expect(getCapitalizedString('asd')).toBe('Asd');
});
