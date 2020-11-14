// 1. returns max number from array
function getMaxNumber(numbersArray){
    return Math.max(...numbersArray);
}

// 2. returns average of positive numbers from numbersArray
function getPositiveNumbersAverage(numbersArray) {
  const positiveNums = numbersArray.filter((number) => {
    return number > 0;
  })
  const positiveNumsSum = positiveNums.reduce((accumulator, number) => {
    return accumulator + number;
  }, 0)
  return positiveNumsSum / positiveNums.length;
}

// 3. this title was too long :)
function getTopStudents(studentsArray1, studentsArray2) {
  const merged = [...studentsArray1, ...studentsArray2];
  const sorted = merged.sort((student1, student2) => {
    return student2.gpa - student1.gpa;
  });
  while (sorted.length > 5) {
    sorted.pop();
  }
  return sorted;
}
