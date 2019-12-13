<template>
	<view class="content">
		<!-- #ifdef H5 -->
		<header-title :title="title" :showback="false"></header-title>
		<view class="paddingTop"></view>
		<!-- #endif -->
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in newsList" :key="index" @tap="openInfo" :data-newsid="item.post_id">
				<!-- <navigator url="">一种跳转方式</navigator> -->
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="item.author_avatar"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.title}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
					</view>
				</view>
			</view>
		</view>
		<recommend-item></recommend-item>
	</view>
</template>

<script>
	import headerTitle from "../../components/headerTitle.vue"
	import recommendItem from './recommendItem.vue';
	export default {
		data() {
			return {
				title: "推荐新闻",
				newsList: []
			}
		},
		components:{
			recommendItem,headerTitle
		},
		onLoad() {
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news',
				method: 'GET',
				data: {},
				success: res => {
					this.newsList = res.data
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			openInfo(e) {
				var newsid = e.currentTarget.dataset.newsid;
				console.log(newsid);
				uni.navigateTo({
					url: '../newsInfo/newsInfo?newsid=' + newsid
				});
			}
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
	.paddingTop{
		padding-top: 80rpx;
	}
	.uni-media-list-body{
		height: auto;
	}
	.uni-media-list-text-top{
		line-height: 1.6em;
	}
</style>
