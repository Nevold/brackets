module.exports = function check(str, bracketsConfig) {
  let tempVar='';
 for (let i=0;i <bracketsConfig.length;i++){
  tempVar+=bracketsConfig[i].join('')
  }
  let tempVarStr=str.split('').sort().join('');

  return tempVarStr.includes(tempVar);
}
