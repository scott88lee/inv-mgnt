const worth = [
    [1,2,3,3,4,10],
    [1,2,2,2,3,5,10]
  ]
  
  function goodVsEvil(good, evil){
      let goodSplit = good.split(' ');
      let goodArmyCount = goodSplit.map( (x) => parseInt(x));
  
      let evilSplit = evil.split(' ');
      let evilArmyCount = evilSplit.map( (x) => parseInt(x));
      
      let goodScore = 0,
          evilScore = 0;
  
      for (let i=0; i<worth[0].length; i++){
          goodScore += (worth[0][i] * goodArmyCount[i]);
      }
      for (let i=0; i<worth[1].length; i++){
          evilScore += (worth[1][i] * evilArmyCount[i]);
      }
      console.log("good: " + goodScore);
      console.log("evil: " + evilScore);
      if (goodScore == evilScore){
          return "Battle Result: No victor on this battle field"
      } else if (goodScore > evilScore){
          return "Battle Result: Good triumphs over Evil"
      } else {
          return "Battle Result: Evil eradicates all trace of Good"
      }
  }

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));
console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'));
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'));