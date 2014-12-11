define(function (require,exports,module) {
	
	var oInput = document.getElementById('oInput');
	var oDiv1 = document.getElementById('box');
	var oDiv2 = document.getElementById('ooo');
	var oDiv3 = document.getElementById('ccc');
	
	var $ = require('jquery-1.4.2.min.js');
	require('less.min.js');
	require('modules/drag.js').drag(oDiv1);

	oInput.onclick = function () {
		oDiv2.style.display = 'block';
		require('modules/scale.js').scale(oDiv2,oDiv3)
	}



})