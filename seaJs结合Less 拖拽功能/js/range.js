define(function (require,exports,module) {
	//控制最大最小功能
	function range(iNum,iMax,iMin) {
		if (iNum > iMax) {
			return iMax;
		} else if (iNum < iMin) {
			return iMin;
		} else {
			return iNum;
		}

	}

	exports.range = range;
})