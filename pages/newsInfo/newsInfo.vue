<template>
	<view class="content">
		<!-- #ifdef H5 -->
		<header-title :title="newsinfo.title"></header-title>
		<view class="paddingTop"></view>
		<!-- #endif -->
		<view class="info">
			<view class="title">{{newsinfo.title}}</view>
			<view class="art-content">
				<rich-text class="richText" :nodes="newsinfo.content"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	import headerTitle from "../../components/headerTitle.vue"
	export default {
		data() {
			return {
				newsinfo: ''
			}
		},
		components: {headerTitle},
		onLoad(e) {
			uni.showLoading({
				title: '加载中...',
				mask: false
			});
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + e.newsid,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res);
					this.newsinfo = res.data;
					uni.hideLoading();
				},
				fail: () => {},
				complete: () => {}
			});
			
		},
		methods: {

		}
	}
</script>

<style>
	.paddingTop{
		padding-top: 80rpx;
	}
	.info{
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		padding: 10rpx 4%;
		width: 100%;
	}
	.title{
		text-align: center;
		line-height: 1.4em;
		font-size: 38rpx;
		font-weight: 700;
	}

</style>
