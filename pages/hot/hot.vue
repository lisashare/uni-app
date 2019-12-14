<template>
	<view class="content">
		<view class="m-hmhot">
			<view class="hotop">
				<view class="hotopct">
					<view class="u-hmsprt hoticon"></view>
					<view class="hottime">更新日期：12月12日</view>
				</view>
			</view>
			<view class="hotcont">
				<div class="m-sglst">
					<a class="m-sgitem" href="/m/song?id=1407551413">
						<div class="sgfl sgfl-cred">01</div>
						<div class="sgfr f-bd f-bd-btm">
							<div class="sgchfl">
								<div class="f-thide sgtl">麻雀</div>
								<div class="f-thide sginfo"><i class="u-hmsprt sghot"></i>李荣浩 - 麻雀</div>
							</div>
							<div class="sgchfr"><span class="u-hmsprt sgchply"></span></div>
						</div>
					</a>
				</div>
			</view>
			<view class="hotdn"><text class="hotview">查看完整榜单<text class="iconfont icon-right"></text></text></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '热歌'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.m-hmhot .hotop {
	    position: relative;
		width: 100%;
		height: 292rpx;
	    /* padding-top: 38.9%; */
	    overflow: hidden;
	    background: url(//s3.music.126.net/mobile-new/img/hot_music_bg_2x.jpg?f01a252…=) no-repeat;
	    background-size: cover;
	}
	.m-hmhot .hotopct {
	    display: flex;
	    flex-direction: column;
	    justify-content: center;
	    position: absolute;
	    left: 0;
	    right: 0;
	    top: 0;
	    bottom: 0;
	    z-index: 2;
	    padding-left: 20px;
	    box-sizing: border-box;
	}
	.m-hmhot .hoticon {
	    width: 142px;
	    height: 67px;
	    background-position: -24px -30px;
	}
	.u-hmsprt {
	    background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=) no-repeat;
	    background-size: 166px 97px;
	}
	.m-hmhot .hottime {
	    margin-top: 10px;
	    color: hsla(0,0%,100%,.8);
	    font-size: 12px;
	    transform: scale(.91);
	    transform-origin: left top;
	}
	.m-hmhot .hotcont {
	    position: relative;
	}
	
	.m-sgitem, .m-sgitem .sgfl {
	    display: flex;
	}
	.m-sgitem {
	    padding-left: 10px;
	}
	.m-sgitem .sgfl {
	    align-items: center;
	    justify-content: center;
	    width: 40px;
	    font-size: 17px;
	    color: #999;
	    margin-left: -10px;
	}
	.m-sgitem .sgfl-cred {
	    color: #df3436;
	}
	.m-sgitem .sgchfl, .m-sgitem .sgfr {
	    flex: 1 1 auto;
	}
	.m-sgitem .sgchfl {
	    padding: 6px 0;
	    /* width: 0; */
	}
	.m-sgitem .sgfr {
	    display: flex;
	    position: relative;
	}
	.m-sgitem .sgtl {
	    font-size: 17px;
	}
	.m-sgitem .sginfo {
	    font-size: 12px;
	    color: #888;
	}
	.m-sgitem .sghot {
	    display: inline-block;
	    width: 12px;
	    height: 8px;
	    margin-right: 4px;
	}
	.u-hmsprt {
	    background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=) no-repeat;
	    background-size: 166px 97px;
	}
	.m-sgitem .sgchfr {
	    display: flex;
	    align-items: center;
	    padding: 0 10px;
	}
	.m-sgitem .sgchply {
	    display: inline-block;
	    width: 22px;
	    height: 22px;
	    background-position: -24px 0;
	}
	.u-hmsprt {
	    background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=) no-repeat;
	    background-size: 166px 97px;
	}
	
	.m-hmhot .hotdn {
	    height: 55px;
	    line-height: 55px;
	    text-align: center;
	}
	.m-hmhot .hotview {
	    display: inline-block;
	    color: #999;
	    padding-right: 14px;
	}
	
	
	.f-bd:after {
	    position: absolute;
	    z-index: 2;
	    content: "";
	    top: 0;
	    left: 0;
	    pointer-events: none;
	    box-sizing: border-box;
	    width: 100%;
	    height: 100%;
	    transform-origin: top left;
	    border: 0 solid rgba(0,0,0,.1);
	}
	.f-bd-btm:after {
	    border-bottom-width: 1px;
	}
</style>
