const word_count = require('./word_count');

test('count one word', async () => {
    const data = await word_count('word');
    const expected = { word: 1 };
    expect(data).toStrictEqual(expected);
  });
  test('count one of each', async () => {
    const data = await word_count('one of each');
    expected = { one: 1, of: 1, each: 1 };
    expect(data).toEqual(expected);
  });
  test('count multiple occurrences', async () => {
    const data = await word_count('one fish two fish red fish blue fish');
    expected = { one: 1, fish: 4, two: 1, red: 1, blue: 1 };
    expect(data).toEqual(expected);
  });
  test('ignore punctuation', async () => {
    const data = await word_count('car : carpet as java : javascript!!&@$%^&');
    expected = { car: 1, carpet: 1, as: 1, java: 1, javascript: 1 };
    expect(data).toEqual(expected);
  });
  test('include numbers', async () => {
    const data = await word_count('testing, 1, 2 testing');
    expected = { testing: 2, 1: 1, 2: 1 };
    expect(data).toEqual(expected);
  });
  test('hyphens', async () => {
    const data = await word_count('co-operative');
    expected = { 'co-operative': 1 };
    expect(data).toEqual(expected);
  });
  test('ignore underscores', async () => {
    const data = await word_count('two_words');
    expected = { two: 1, words: 1 };
    expect(data).toEqual(expected);
  });
  test('normalize case', async () => {
    const data = await word_count('go Go GO');
    expected = { go: 3 };
    expect(data).toStrictEqual(expected);
  });
  