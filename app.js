let johnAverage = (89 + 120 + 103)/3
let mikeAverage = (116 + 94 + 123)/3
let marryAverage =(97 + 134 + 105)/3
if (johnAverage > mikeAverage && johnAverage > marryAverage) {
  console.log(`John team wins with ${jonhAverage} points`)
} else if (mikeAverage > johnAverage && mikeAverage > marryAverage) {
  console.log(`Mike teams win with ${mikeAverage} points`)
} else {
  console.log (`Marry teams win with ${marryAverage} points`)
}

