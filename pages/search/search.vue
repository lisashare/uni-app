<template>
	<view class="content">
		<view class="m-tabct">
			<view class="tabctitem">
				<view class="m-hmsrch">
					<form class="m-input f-bd f-bd-btm" method="get" action="#">
						<view class="inputcover">
							<text class="iconfont icon-search"></text>
							<input confirm-type="search" focus name="search" class="input" placeholder="搜索歌曲、歌手、专辑" autocomplete="off" :value="inputValue" maxlength="30" @input="clearInput" @confirm="search()">
							<view class="close" v-show="showClearIcon" @click="clearIcon">
								<view class="uni-icon uni-icon-clear"></view>
							</view>
						</view>
					</form>
					<view class="m-default" v-show="showHot||showStorage">
						<view class="m-hotlist" v-show="showHot">
							<view class="title">热门搜索</view>
							<view class="list">
								<view class="item f-bd f-bd-full" v-for="(item, index) of hotSearchList" :key="index" @click="search(item.title)"><a class="link" href="javascript:void(0);">{{item.title}}</a></view>
							</view>
						</view>
						<view class="m-history" v-show="showStorage">
							<view class="list">
								<view class="item" v-for="(item,index) in storageList" :key="index" @click="search(item.first)">
									<text class="iconfont icon-musicfill"></text>
									<view class="histyr f-bd f-bd-btm">
										<text class="link f-thide">{{item.first}}</text>
										<view class="close" @click.stop="delStorage(item.first)"><text class="iconfont icon-close"></text></view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="m-recom" v-show="searchTemporary">
						<view class="title f-bd f-bd-btm f-thide">搜索“{{inputValue}}”</view>
						<view>
							<view class="recomitem" v-for="(item,index) in searchTemporaryList" :key="index" @click="search(item.name)">
								<text class="iconfont icon-search"></text>
								<text class="tit f-bd f-bd-btm f-thide">{{item.name}}</text>
							</view>
						</view>
					</view>
					<view class="m-searchresult" v-if="showSearchResult">
						<view class="m-songlist" v-if="!showEmpty">
							<view class="m-sglst">
								<view class="m-sgitem" href="/m/song?id=472361096" v-for="(item,index) in searchResultList" :key="index">
									<view class="sgfr f-bd f-bd-btm">
										<view class="sgchfl">
											<view class="f-thide sgtl">{{item.name}}</view>
											<view class="f-thide sginfo"><i class="iconfont icon-discover"></i>搜索结果11</view>
										</view>
										<view class="sgchfr">
											<text class="iconfont icon-video"></text>
										</view>
									</view>
								</view>
							</view>
							<p class="u-scroll">全部加载完</p>
						</view>
						<view class="m-noresult" v-else>暂无搜索结果</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import utils from '../../modules/utils.js';
	export default {
		data() {
			return {
				inputValue: '', // 输入框值
				showClearIcon: false, // 输入框的清除按钮
				searchTemporary: false, // 正在输入中
				showEmpty: false, // 搜索结果为空
				showSearchResult: false, // 显示搜索结果
				searchResultList: [ //  搜索结果列表
					{
						name: "二零三"
					}
				],
				storageList: [ // 本地存储列表
					{
						first: "啦啦啦啦"
					}
				],
				showStorage: false, // 显示本地存储
				showHot: true, // 显示热搜
				searchTemporaryList: [
					{
						name: "123木头人"
					},
					{
						name: "123我爱你"
					}
				], // 正在输入中列表
				hotSearchList: [ // 热搜列表
					{
						title: "年度音乐榜单"
					},
					{
						title: "二零三"
					},
					{
						title: "李荣浩麻雀"
					},
					{
						title: "好想爱这个世界啊"
					},
					{
						title: "周深念念有词"
					},
					{
						title: "张大仙复杂"
					},
					{
						title: "十二月"
					},
					{
						title: "黎小田"
					},
					{
						title: "王明宇倒数"
					},
					{
						title: "我们羞于表达的感情"
					}
				]
			}
		},
		onLoad() {
			// 进入页面 请求
			// uni.request({
			// 	method: "GET",
			//     url: '', 
			//     data: {},
			//     // header: {},
			//     success: (res) => {
			//         console.log(res);
			//         // this.text = 'request success';
			//     }
			// });
			this.getHistoryItems();
		},
		methods: {
			clearInput: function(event) {
				var value = event.target.value.replace(/(^\s*)|(\s*$)/g, "");
				if(value.length){	
					this.showClearIcon = true;
					this.searchTemporary = true;
					this.showHot = false;
					this.showStorage = false;
				}else{
					 this.showClearIcon = false;
					 
					 this.searchTemporary = false;
					 this.showHot = true;
					 this.getHistoryItems();
				}
				this.inputValue = value;
				this.showSearchResult = false;
			},
			clearIcon: function() {
				this.inputValue = '';
				this.showClearIcon = false;
				
				this.searchTemporary = false;
				this.showHot = true;
				this.showSearchResult = false;
				this.getHistoryItems();
			},
			search: function(item, event){ // 回车搜索
				if(item){ // 传值了
					this.inputValue = item;
					var value = item.replace(/(^\s*)|(\s*$)/g, "");
					if(value.length){
						this.showClearIcon = true;
					}
					this.searchResultFn();
				}else if(this.inputValue){
					this.searchResultFn();
				}
				// 存储
				this.searchTarget();
			},
			searchResultFn: function(){
				this.showHot = false;
				this.showStorage = false;
				this.searchTemporary = false;
				// 有结果
				this.showSearchResult = true;
				if(this.searchResultList.length){
					this.showEmpty = false;
				}else{
					this.showEmpty = true;
				}
			},
			getHistoryItems: function() { // 获取历史列表
			  var history = utils.getStore('searchHistory');
			  if (!(history && history.length)) {
				return false
			  }
			  if (history.length) {
				this.storageList = history;
				// 本地缓存中有数据显示数据
				this.showStorage = true
			  }
			},
			searchTarget: function() { // 存储搜索目标
				var history = utils.getStore('searchHistory')
			    // console.log(history);
				var inputValueObj = {};
			    if (history && history.length && this.inputValue) {
					var checkrepeat = false
					this.storageList.forEach(item => {
					  if (item.first == this.inputValue) {
						checkrepeat = true
					  }
					})
					if (!checkrepeat) {
					  inputValueObj.first = this.inputValue;
					  this.storageList.unshift(inputValueObj)
					}
			    } else {
					inputValueObj.first = this.inputValue;
					this.storageList.unshift(inputValueObj)
			    }
			    utils.setStore('searchHistory', this.storageList)
			},
			delStorage: function(str){
				var history = utils.getStore('searchHistory');
				var delReault = [];
				history.forEach((item) => {
				  if (item.first == str) {
					
				  }else{
					  delReault.push(item);
				  }
				})
				this.storageList = delReault;
				utils.setStore('searchHistory', delReault)
			},
			onPageScroll: function(){
				
			}
			// 如果获取的list 为空 showEmpty = show;
		}
	}
</script>

<style>
	.m-input {
	    padding: 15px 10px;
		display: block;
	}
	.f-bd {
	    position: relative;
	}
	.m-input .inputcover {
		box-sizing: border-box;
	    position: relative;
	    width: 100%;
	    height: 30px;
	    padding: 0 30px;
	    box-sizing: border-box;
	    background: #ebecec;
	    border-radius: 30px;
	}
	.inputcover .icon-search{
	    position: absolute;
	    left: 0;
	    top: 4px;
	    margin: 0 8px;
	    vertical-align: middle;
	}
	.m-input .input {
	    width: 100%;
	    height: 30px;
	    line-height: 18px;
	    background: transparent;
	    font-size: 14px;
	    color: #333;
	}
	.m-input .holder {
	    position: absolute;
	    left: 30px;
	    top: 5px;
	    font-size: 14px;
	    color: #c9c9c9;
	    background: transparent;
	    pointer-events: none;
	}
	.m-input .close {
	    position: absolute;
	    right: 0;
	    top: 0;
	    width: 30px;
	    height: 30px;
	    line-height: 28px;
	    text-align: center;
	}
	.m-hotlist {
	    padding: 15px 10px 0;
	}
	.m-hotlist .title {
	    font-size: 14px;
	    line-height: 12px;
	    color: #666;
	}
	.m-hotlist .list {
	    margin: 10px 0 7px;
	}
	.m-hotlist .item {
	    display: inline-block;
	    height: 32px;
	    margin-right: 8px;
	    margin-bottom: 8px;
	    padding: 0 14px;
	    font-size: 14px;
	    line-height: 32px;
	    color: #333;
	}
	.m-hotlist .item:after {
	    border-color: #d3d4da;
	    border-radius: 32px;
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
	    -webkit-transform-origin: top left;
	    -ms-transform-origin: top left;
	    transform-origin: top left;
	    border: 0 solid rgba(0,0,0,.1);
	}
	.m-input:after {
		border-bottom-width: 1px;
	    border-color: rgba(0,0,0,.1);
	}
	.f-bd-full:after {
	    border-width: 1px;
	}
	a, a:visited {
	    color: #333;
	}
	.m-history .item, .m-history .item .histyr {
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
	    -ms-flex-align: center;
	    align-items: center;
	    height: 45px;
	}
	.m-history .icon-musicfill {
	    margin: 0 10px;
	}
	.m-history .item .link {
	    margin-right: 10px;
	}
	.m-history .item .histyr, .m-history .item .link {
	    -webkit-box-flex: 1;
	    -webkit-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    width: 1%;
	}
	
	.f-thide {
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    word-break: normal;
	}
	.m-history .item .close {
	    -webkit-box-flex: 0;
	    -webkit-flex: 0 0 auto;
	    -ms-flex: 0 0 auto;
	    flex: 0 0 auto;
	    width: 32px;
	    height: 32px;
	    line-height: 32px;
	}
	.m-history .item .histyr:after {
		border-bottom-width: 1px;
	    border-color: rgba(0,0,0,.1);
	}
	
	.m-recom {
	    margin: 0 auto;
	}
	.m-recom .iconfont {
	    -webkit-box-flex: 0;
	    -webkit-flex: 0 0 auto;
	    -ms-flex: 0 0 auto;
	    flex: 0 0 auto;
	    margin-right: 7px;
	}
	.m-recom .title {
	    height: 50px;
	    margin-left: 10px;
	    padding-right: 10px;
	    font-size: 15px;
	    line-height: 50px;
	    color: #507daf;
	}
	.m-recom .recomitem {
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
	    -ms-flex-align: center;
	    align-items: center;
	    height: 45px;
	    padding-left: 10px;
	}
	.m-recom .tit {
	    display: inline-block;
	    -webkit-box-flex: 1;
	    -webkit-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    width: 1%;
	    padding-right: 10px;
	    font-size: 15px;
	    line-height: 45px;
	    color: #333;
	}
	.m-recom .tit:after {
		border-bottom-width: 1px;
	    border-color: rgba(0,0,0,.1);
	}
	.u-scroll,.m-noresult  {
		padding: 20px 0;
	    line-height: 30px;
	    color: #666;
	    font-size: 16px;
	    text-align: center;
	}
	/* 最终搜索结果 */
	.m-sgitem {
	    padding-left: 10px;
	}
	.m-sgitem .sgchfl, .m-sgitem .sgfr {
	    -webkit-box-flex: 1;
	    -webkit-flex: 1 1 auto;
	    -ms-flex: 1 1 auto;
	    flex: 1 1 auto;
	}
	.m-sgitem .sgfr {
	    display: flex;
	    position: relative;
	}
	.sgfr .icon-video{
		font-size: 22px;
	}
	.m-sgitem .sgchfl {
	    padding: 6px 0;
	    width: 0;
	}
	.m-sgitem .sgtl {
	    font-size: 16px;
	}
	.m-sgitem .sginfo {
	    font-size: 14px;
	    color: #777;
	}
	.m-sgitem .sginfo .icon-discover{
		vertical-align: middle;
	}
	.m-sgitem .sgchfr {
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
	    -ms-flex-align: center;
	    align-items: center;
	    padding: 0 10px;
	}
	
</style>
