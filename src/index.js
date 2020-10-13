module.exports = function check(str, bracketsConfig) {
  let arrFirstSide=[];
  let arrSecondSide=[];
  for (let i = 0; i < bracketsConfig.length; i++) {
      arrFirstSide.push(bracketsConfig[i][0]);
      arrSecondSide.push(bracketsConfig[i][1]);
    }
  let arrStr=str.split('');  
  let count=-1;
  for (let i = 0; i < arrStr.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        if(arrStr[i] === arrFirstSide[j] && arrStr[i + 1] === arrSecondSide[j]){
          arrStr.splice(i, 2);
          i=count;
        }
      }
    }
    return arrStr.length == 0 ? true: false
}
