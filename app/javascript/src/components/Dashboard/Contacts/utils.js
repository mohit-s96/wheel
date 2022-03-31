export const createMockArray = (size, initialValue) => {
  const mockArray = [];
  const initialSize = initialValue.length;

  let idx = initialSize;
  while (idx < size) {
    mockArray.push(...initialValue);
    idx += initialSize;
  }

  return mockArray;
};
