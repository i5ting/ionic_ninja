define("each.js", function(exports) {
    /**
     * Creates a each function used to callback when page onload
     *
     * @private
     */

	//数组与伪数组的遍历 
	function _Array_forEach(array, block, context) { 
		if (array == null) return; 
		//对String进行特殊处理 
		if(typeof array == 'string'){ 
			array = array.split(''); 
		} 
		var i = 0,length = array.length; 
		for (;i < length && block.call(context, array[i], (i+1), array)!==false; i++) {} 
	}; 
	
	//对象的遍历 
	function _Function_forEach(object, block, context) { 
		for (var key in object) { 
			//只遍历本地属性 
			if (object.hasOwnProperty(key)&&block.call(context, object[key], key, object)===false){ 
				break; 
			} 
		} 
	}; 

	return exports = function(object, block, context){ 
		if (object == null) return; 
		if (typeof object.length == "number") { 
			_Array_forEach(object, block, context); 
		}else{ 
			_Function_forEach(object, block, context); 
		} 
	};
});