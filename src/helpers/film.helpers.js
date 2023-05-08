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

export function getFilmStats(list) {
  //Average is (sum of the things)/(number of things)
  const accScore = list.reduce((acc, curr) => {
    return acc + parseInt(curr.rt_score);
  }, 0);
  console.log("RT Score Total:", accScore);

  const avgScore = accScore / list.length;
  console.log("Average Score:", avgScore);

  //Convert our list of objects into a list of numbers
  const mappedList = list.map((ele) => {
    return Number(ele.release_date);
  });
  //Find the latest year by finding the largest number in the array
  const latest = Math.max(...mappedList);
  console.log("Latest Year:", latest);

  return {
    acc_score: accScore,
    avg_score: avgScore,
    total: list.length,
    latest
  }
}