function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function (n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}

function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}
var dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function (milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function (dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function (number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDate()) + '-' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function (str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	}
};

var storageUtils = {
	/**
	* 存储sessionStorage
	*/
	 setSessionStore (name, content) {
	   if (!name) return
	   if (typeof content !== 'string') {
	     content = JSON.stringify(content)
	   }
	   window.sessionStorage.setItem(name, content)
	 },
	
	 /**
	* 获取sessionStorage
	*/
	 getSessionStore (name) {
	   if (!name) return
	   return window.sessionStorage.getItem(name)
	 },
	
	 /**
	* 存储localStorage
	*/
	
	 setStore (name, content) {
	   if (!name) return
	   if (typeof content !== 'string') {
	     content = JSON.stringify(content)
	   }
	   window.localStorage.setItem(name, content)
	 },
	
	 /**
	* 获取localStorage
	*/
	 getStore (name) {
	   if (!name) return
	   var value = JSON.parse(window.localStorage.getItem(name));
	   // var value = window.localStorage.getItem(name)
	   return value
	 },
	
	 /**
	* 删除localStorage
	*/
	 removeStore (name) {
	   if (!name) return
	   window.localStorage.removeItem(name)
	 },
	
	 /**
	* 存储cookie
	*/
	 setCookie (objName, objValue, objHours = 30) {
	   var str = objName + '=' + escape(objValue)
	   if (objHours != null) {
	     var date = new Date()
	     var ms = objHours * 3600 * 1000 * 24
	     date.setTime(date.getTime() + ms)
	     str += '; expires=' + date.toGMTString()
	   }
	   document.cookie = str
	 },
	
	 /**
	  * 获取cookie
	  */
	 getCookie (objName) {
	   var search = objName + '='
	   if (document.cookie.length > 0) {
		  var offset = document.cookie.indexOf(search)
		  if (offset != -1) {
			  offset += search.length
			  var end = document.cookie.indexOf(';', offset)
			  if (end == -1) end = document.cookie.length
			  return unescape(document.cookie.substring(offset, end))
		  } else {
			  return ''
		  }
	   }
	   return ''
	 },
	 /**
	  * 删除cookie
	  */
	 delCookie (name) {
	   var exp = new Date()
	   exp.setTime(exp.getTime() - 1)
	   var cval = getCookie(name)
	   if (cval != null) {
		  document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
	   }
	 },
	 /**
	  * 删除所有cookie
	  */
	 clearCookie () {
	   var keys = document.cookie.match(/[^ =;]+(?=\=)/g)
	   if (keys) {
		  for (var i = keys.length; i--;) {
	       document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
		  }
	   }
	 }
}

module.exports = {
	formatTime: formatTime,
	formatLocation: formatLocation,
	dateUtils: dateUtils,
	storageUtils: storageUtils
}
