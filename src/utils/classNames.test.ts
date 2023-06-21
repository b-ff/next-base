import { classNames } from "./classNames"

describe('Utility classNames', () => {
  it('Should combine given array of string to string', () => {
    expect(classNames(['foo', 'bar'])).toBe('foo bar')
  })

  it('Should bypass empty values', () => {
    expect(classNames(['foo', null, '', undefined, 'bar'])).toBe('foo bar')
  })
})