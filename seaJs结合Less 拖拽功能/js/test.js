define(function (require,exports,module) {
	
	var oInput = document.getElementById('oInput');
	var oDiv1 = document.getElementById('box');
	var oDiv2 = document.getElementById('ooo');
	var oDiv3 = document.getElementById('ccc');

	require('drag.js').drag(oDiv1);

	oInput.onclick = function () {
		oDiv2.style.display = 'block';
		require('scale.js').scale(oDiv2,oDiv3)
	}



})