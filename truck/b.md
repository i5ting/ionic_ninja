
  ionic.Gestures.utils = {
    /**
     * extend method,
     * also used for cloning when dest is an empty object
     * @param   {Object}    dest
     * @param   {Object}    src
     * @param	{Boolean}	merge		do a merge
     * @returns {Object}    dest
     */
    extend: function extend(dest, src, merge) {
      for (var key in src) {
        if(dest[key] !== undefined && merge) {
          continue;
        }
        dest[key] = src[key];
      }
      return dest;
    },



这个代码为什么没有抽出来呢？

