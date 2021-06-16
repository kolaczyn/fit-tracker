import capitalizeFirstLetter from './capitalizeFirstLetter'

describe('capitalizeFirstLetter', () => {
  it('correctly capitalizes a string', () => {

    expect(capitalizeFirstLetter('hello world')).toBe('Hello world')
    expect(capitalizeFirstLetter('kolaczyn')).toBe('Kolaczyn')
    expect(capitalizeFirstLetter('SCREAMING_SNAKE_KASE')).toBe('SCREAMING_SNAKE_KASE')
    expect(capitalizeFirstLetter('gItHuB')).toBe('GItHuB')
  })
})
