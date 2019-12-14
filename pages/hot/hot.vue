<template>
	<view class="content">
		<div class="m-hmhot">
			<div class="hotop">
				<div class="hotopct">
					<div class="u-hmsprt hoticon"></div>
					<div class="hottime">更新日期：12月12日</div>
				</div>
			</div>
			<div class="hotcont">
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
			</div>
			<div class="hotdn"><span class="hotview">查看完整榜单</span></div>
		</div>
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
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
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
