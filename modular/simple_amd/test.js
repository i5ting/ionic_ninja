define("test.js", function(exports) {
	exports = {};
	
	exports.var = 1;
	
	exports.say = function(){
		alert(this.var);
	}
	
	return exports;
});	