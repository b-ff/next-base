import { formatPostDate } from "./formatPostDate"

describe('Utility formatPostDate', () => {
  it('Should format given Date instance', () => {
    expect(formatPostDate(new Date('2023-06-20T14:00:00'))).toBe('20 June 2023 at 14:00')
  })

  it('Should format given ISO8601 string', () => {
    expect(formatPostDate('2023-06-20T14:00:00')).toBe('20 June 2023 at 14:00')
  })
})