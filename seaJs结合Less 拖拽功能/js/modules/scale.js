define(function (require,exports,module) {

	//拖拽改变大小
	function scale(obj1,obj2) {
		var disX = 0,disY=0,disW=0,disH=0;

		obj2.onmousedown = function (eve) {
			var eve = eve || window.event;
			disX = eve.clientX;
			disY = eve.clientY;
			disW = obj1.offsetWidth;
			disH = obj1.offsetHeight;

			document.onmousemove = function (eve) {
				var eve = eve || window.event;

				var W = require('modules/range.js').range(eve.clientX - disX + disW,500,100);
				var H = require('modules/range.js').range(eve.clientY - disY + disH,300,100);

				obj1.style.width = W +'px';
				obj1.style.height = H +'px';
			}

			document.onmouseup = function () {
				document.onmousemove = null;
				document.onmouseup = null;
			}
		}
	}

	exports.scale = scale;
})