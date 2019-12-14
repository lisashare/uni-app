<template>
	<view class="content">
		<swiper class="swiper-wrapper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in headerBanner" :key="index">
				<view class="swiper-item"><image :src="item.src"></image></view>
			</swiper-item>
		</swiper>
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

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
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
</style>
