
## 判断元素是否在数组中

```
Array.prototype.contain = function(obj) {
  return this.indexOf(obj) !== -1;
}
```

```
function _is_contain_in_array(arr, str){
	return arr.indexOf(str) !== -1;
}
```
