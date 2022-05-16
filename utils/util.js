const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function isNumber(val) {

  var regPos = /^\d+(\.\d+)?$/; //非负浮点数
  var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
  if (regPos.test(val) || regNeg.test(val)) {
    return true;
  } else {
    return false;
  }

}

function isIntNum(val) {
  var reg = /^[+]?(\d|[1-9]\d+)$/;
  if (reg.test(val)) return true;
  return false;
}

/**
 * @name byteConvert
 * @description 字节单位换算
 * @param   {Number} bytes
 * @return  {String}
 */
function byteConvert(bytes) {
  if (isNaN(bytes)) return '';

  let symbols = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let exp = Math.floor(Math.log(bytes) / Math.log(2));
  if (exp < 1) exp = 0;
  let i = Math.floor(exp / 10);
  bytes = bytes / Math.pow(2, 10 * i);

  if (bytes.toString().length > bytes.toFixed(2).toString().length) {
    bytes = +bytes.toFixed(2);
  }
  return bytes + ' ' + symbols[i];
};


/**
 * @name getSuffix
 * @description 获取文件名称及后缀名
 * @param   {String}} fileName
 * @return  {Object}
 */
function getSuffix(fileName) {
  const patternFileExtension = /\.([0-9a-z]+)(?:[#]|$)/i;
  const arr = (fileName || '').match(patternFileExtension);
  if (!arr) return { name: fileName };
  const [dotSuffix, suffix] = arr;

  return {
    name: fileName.replace(dotSuffix, ''),
    suffix: suffix.toLocaleLowerCase(),
    dotSuffix: dotSuffix.toLocaleLowerCase()
  };
};

module.exports = {
  formatTime, isNumber, isIntNum, byteConvert, getSuffix
}
