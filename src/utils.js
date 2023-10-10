// return a new array with the moved element
export function moveItemWithinArray(array, fromIndex, toIndex) {
  if (fromIndex === toIndex) return array.slice();

  const newArr = array.slice();
  const [item] = newArr.splice(fromIndex, 1);
  newArr.splice(toIndex, 0, item);

  return newArr;
}
