const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
function isW(record){
    return record.result === 'W';
}

  function superbowlWin(record){
  if (record.find(isW)){
    return record.find(isW).year;
  } else return undefined;
  }