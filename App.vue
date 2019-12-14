<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "./common/uni.css";
	@import "./static/iconfont/iconfont.css";
	/* #ifdef H5 */
	uni-page-head {
		display: none;
	}
	/* #endif */
	image{
		width: 100%;
	}
	a, a:visited {
	    color: #333;
	}
	a, del, ins, s, u{
		text-decoration: none;
	}
	a, button {
	    cursor: pointer;
	}
	
	
	
	
	.f-thide {
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    word-break: normal;
	}
</style>
