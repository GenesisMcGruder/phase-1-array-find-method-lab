// code your solution here
function superbowlWin (record) {
    let answer = record.find(element => element.result === "W")
   if (answer == null) {
     return undefined
   } else {
      return answer.year;
   }
 }
superbowlWin(record)