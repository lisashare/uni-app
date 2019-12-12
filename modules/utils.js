export default {
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