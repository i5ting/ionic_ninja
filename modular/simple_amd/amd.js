void function() {
	var mapping = {}, cache = {};
	window.define = function(id, func) {
		mapping[id] = func
	};
	window.require = function(id) {
		if (!/\.js$/.test(id)) {
			id += ".js"
		}
		if (cache[id]) {
			return cache[id]
		} else {
			return cache[id] =   [id]()
		}
	}
}();