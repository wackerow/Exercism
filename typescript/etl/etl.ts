type fromType = {[key: number]: string[]}

type toType = {[s: string]: number}

export default (_old: fromType): toType => {
  const result: toType = {}; 
  for (const [points, letters] of Object.entries(_old)) {
    for (const letter of letters) {
      result[letter.toLowerCase()] = parseInt(points);
    }
  }
  return result;
}
