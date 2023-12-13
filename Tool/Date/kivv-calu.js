// 计算状态时长
export const calcDuration = function() {
	console.info('calcDuration');
	let calcTimer = 0;
	let lastTime = 0;

	function dateDiff(startTime, EndTime) {
		if (!EndTime) {
			EndTime = Date.now();
		}

		var res = {
			D: 0,
			H: 0,
			M: 0,
			S: 0,
			MS: 0
		};
		var restTime = EndTime - startTime;
		res.D = Math.floor(restTime / 864e5);
		restTime = restTime - res.D * 864e5;
		res.H = Math.floor(restTime / 36e5);
		restTime = restTime - res.H * 36e5;
		res.M = Math.floor(restTime / 6e4);
		restTime = restTime - res.M * 6e4;
		res.S = Math.floor(restTime / 1e3);
		restTime = restTime - res.S * 1e3;
		res.MS = restTime;
		return res;
	}

	function getTime() {
		let diff = dateDiff(lastTime);
		let duration = (diff.D && (diff.D + '&nbsp;')) || '';
		duration += (diff.H && (diff.H < 10 ? ('0' + diff.H) : diff.H) + ':') || '';
		duration += ((diff.M < 10 ? ('0' + diff.M) : diff.M) + ':');
		duration += ((diff.S < 10 ? ('0' + diff.S) : diff.S));
		return duration
		// $('#incalltime').html(duration);
	};

    /**
     * 暂停功能扩展
     */
	function getCounTime(countime) {
		/* 获取时间差数据 */
		const countimelist = countime.split(':').map(i => Number(i)).reverse()
		/* 获取秒数差 */
		let s = 0
		countimelist[1] ?
			(s = countimelist[0] + countimelist[1] * 60) : (s = countimelist[0])

		return Date.parse(new Date(new Date().getTime() - s * 1000))
	}

	return {
		start: function(fn) {
			lastTime = Date.now();
			fn && fn(getTime())
			calcTimer = setInterval(function() {
				fn(getTime())
			}, 1000);
		},
		continue: function(countime, fn) {
			lastTime = getCounTime(countime)
			fn && fn(getTime())
			calcTimer = setInterval(function() {
				fn(getTime())
			}, 1000);
		},
		stop: function(fn) {
			fn && fn(getTime())
			clearInterval(calcTimer);
			calcTimer = 0;
			lastTime = 0;
			// $('#incalltime').html('--:--');
		},
		restart: function(fn) {
			this.stop(fn);
			this.start(fn);
		}
	};
};

/**
 * use demo (vue method code)
if (!Calc) {
    Calc = calcDuration()
}
Calc.start((time) => {
    this.time = time
})
Calc.continue(this.time, (time) => {
    this.time = time
})
Calc.stop((time) => {
    this.time = time
})
 */