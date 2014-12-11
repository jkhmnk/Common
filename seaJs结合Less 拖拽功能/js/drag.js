define(function (require,exports,module) {
	//拖拽改变位置
	function drag(obj) {
		var disX = 0;
		var disY = 0;
		obj.onmousedown = function (eve) {
			var eve = eve || window.event;
			disX = eve.clientX - obj.offsetLeft;
			disY = eve.clientY - obj.offsetTop;

			document.onmousemove = function (eve) {
				var eve = eve || window.event;
				
				var L = require('range.js').range(eve.clientX - disX,document.documentElement.clientWidth - obj.offsetWidth,0);
				var T = require('range.js').range(eve.clientY - disY,document.documentElement.clientHeight - obj.offsetHeight,0);

				obj.style.left = L + 'px';
				obj.style.top = T + 'px';
			};

			document.onmouseup = function () {
				document.onmousemove = null;
				document.onmouseup = null;
			}
		}
	}

	exports.drag = drag;
})