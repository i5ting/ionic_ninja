define("domready.js", function(exports) {
    /**
     * Creates a domready event function used to callback when page onload
     *
     * @private
     */

	function addEvent( obj, type, fn ) {
        obj.addEventListener( type, fn, false );
    }

    exports = function () {
        function ready( f ) {
            if( ready.done ) return f();

            if( ready.timer ) {
                ready.ready.push(f);
            } else {
                addEvent( window, "load", isDOMReady );
                ready.ready = [ f ];
                ready.timer = setInterval(isDOMReady, 13);
            }
        };

        function isDOMReady() {
            if( ready.done ) return false;

            if( document && document.getElementsByTagName && document.getElementById && document.body ) {
                clearInterval( ready.timer );
                ready.timer = null;
                for( var i = 0; i < ready.ready.length; i++ ) {
                    ready.ready[i]();
                }
                ready.ready = null;
                ready.done = true;
            }
        }
		
		console.log("INFO: <body onload> 已加载完成");
        return ready;
	    
	}();
	
	return exports;
});