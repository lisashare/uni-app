<template>
	<view class="content">
		<view class="home-header">
			<swiper class="swiper-wrapper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item,index) in headerBanner" :key="index">
					<view class="swiper-item"><image :src="item.src"></image></view>
				</swiper-item>
			</swiper>
			<view class="header-tip">
				<!-- #ifndef H5 -->
				<text class="iconfont icon-discover" @click="scan"></text>
				<!-- #endif -->
				<text class="iconfont icon-sound" @click="call"></text>
			</view>
		</view>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '首页',
				headerBanner: [
					{src:"/static/banner/IMG_2369.JPG"},
					{src:"/static/banner/IMG_2370.JPG"},
					{src:"/static/banner/IMG_2371.JPG"},
					{src:"/static/banner/IMG_2372.JPG"}
				]
			}
		},
		onLoad() {

		},
		methods: {
			scan() {
				// 允许从相机和相册扫码
				uni.scanCode({
				    success: function (res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
				    }
				});
			},
			call() {
				uni.makePhoneCall({
				    phoneNumber: '18310740000'
				});
			}
		}
	}
</script>

<style>
	.swiper-wrapper{
		width: 100%;
		height: 216px;
		
	}
	image{
		width: 100%;
	}
	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.home-header{
		position: relative;
	}
	.header-tip{
		position: absolute;
		top: 0;right: 0;bottom: 0;
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 80rpx;
		z-index: 1;
	}
	.header-tip text{
		font-size: 46rpx;
		margin: 0 10px;
	}
</style>
