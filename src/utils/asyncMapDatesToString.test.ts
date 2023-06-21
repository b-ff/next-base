import { asyncMapDatesToString } from "./asyncMapDatesToString"

const mockUser = {
  id: 'that-id',
  name: 'Kermit The Frog',
  email: 'kermit@yahoo.com',
  emailVerified: null,
  image: 'that-image',
  createdAt: new Date('2023-06-16T16:42:18.507Z'),
  updatedAt: new Date('2023-06-16T16:42:18.507Z')
}

describe('Utility asyncMapDatesToString', () => {
  it('should replace all Date objects with ISO8601 strings in promised object', async () => {
    const promisedData = Promise.resolve(mockUser)
    const result = await asyncMapDatesToString(promisedData) as {createdAt: string, updatedAt: string}
    expect(result).toBeInstanceOf(Object)
    expect(result.createdAt).toBe(mockUser.createdAt.toISOString())
    expect(result.updatedAt).toBe(mockUser.createdAt.toISOString())
  })

  it('should replace all Date objects with ISO8601 strings in promised array of objects', async () => {
    const promisedData = Promise.resolve(new Array(10).fill(mockUser))
    const result = await asyncMapDatesToString(promisedData) as {createdAt: string, updatedAt: string}[]
    expect(result).toBeInstanceOf(Array)
    expect(result[0].createdAt).toBe(mockUser.createdAt.toISOString())
    expect(result[0].updatedAt).toBe(mockUser.createdAt.toISOString())
  })

  it('should should ignore falsy types', async () => {
    const promisedData = Promise.resolve(null)
    const result = await asyncMapDatesToString(promisedData)
    expect(result).toBeNull()
  })
})