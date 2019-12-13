<template>
	<view class="header">
		<view class="header-left" @click="goback()">
			<image src="../../static/icon_back@3x.png" mode=""></image>
		</view>
		<view class="header-content uni-ellipsis">
			{{title}}
		</view>
		<view class="header-right">
			<!-- <image src="../../static/images/search.png" mode=""></image> -->
		</view>
	</view>
</template>

<script>
	export default {
		props: ["title"],
		data() {
			return {}
		},
		methods: {
			goback: function () {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style>
	.header {
		position: fixed;
		top: 0;right: 0;left: 0;
		height: 80rpx;
		width: 100%;
		display: flex;
		box-sizing: border-box;
		align-items: center;
		background-color: #fff;
		box-shadow: 0px 4px 8px 0px rgba(238, 238, 238, 0.5);
		z-index: 1;
	}
	.header image{
		width: 24rpx;
		height: 45rpx;
	}
	.header-left,
	.header-right {
		width: 88rpx;
		height: 88rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.header-content {
		flex: 1;
		font-size: 36rpx;
		text-align: center;
	}
</style>
