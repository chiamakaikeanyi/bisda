import { composeClasses, isNotEmptyArray } from '../utils';

describe('composeClasses', () => {
  it('returns true when a non empty array is passed', () => {
    expect(composeClasses('input', 'valid')).toBe('input valid');
  });
});

describe('isNotEmptyArray', () => {
  it('returns true when a non empty array is passed', () => {
    expect(isNotEmptyArray(['Google', 'Tesla', 'Zoom'])).toBe(true);
  });

  it('returns false when an empty array is passed', () => {
    expect(isNotEmptyArray([])).toBe(false);
  });

  it('returns false when nothing is passed', () => {
    expect(isNotEmptyArray()).toBe(false);
  });
});
