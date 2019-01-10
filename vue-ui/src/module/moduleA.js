var obj = {
  name: 'moduleA',
  test(){

	}
}
var mytest = function(){

}
// module.exports = obj
export default {
  mytest,
  obj
}
//export default 只能有一个，可以跟export 组合使用