export const generateArray = (size: number) => (
  Array.from(Array(size).keys())
);

export const formatWord = (word: string) => (
  word
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toUpperCase()
);
