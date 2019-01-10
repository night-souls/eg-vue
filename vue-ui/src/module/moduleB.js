var obj = {
  name: 'moduleB',
  test(){

  }
}


var mytest = function(){

}


var mydefault = function(){
	console.log("default")
}

// module.exports = obj
export {
	mytest,
	obj
}

export default mydefault
