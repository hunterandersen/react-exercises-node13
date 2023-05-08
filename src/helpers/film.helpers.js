//return an array with only the matching directors
export function filterFilmsByDirector(list, director) {
  if (!director) {
    return list;
  }
  return list.filter((ele) => ele.director == director);
}

export function getListOf(list, prop) {
    if (!prop) return list;
    const totalValuesArr = list.map((ele) => ele[prop]);
    const uniqueVals = new Set(totalValuesArr);
    return Array.from(uniqueVals);
}