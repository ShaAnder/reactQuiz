export function shuffleARR(a, b) {
  let new_arr = [];
  a.push(b);
  new_arr.push(a);

  let shuffled = [...new Set(new_arr[0])]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled;
}
