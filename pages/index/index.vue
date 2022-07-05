<template>
	<view class="container">
		<headder @showMore="showMore"></headder>
		<view class="headder-day">
			<view class="date">
				<text>{{ date }}</text>
			</view>
			<view class="below">
				<text class="text">{{ month }}月</text>
				<view class="line"></view>
				<text class="text">周{{ day }}</text>
			</view>
		</view>
		<articles :articles="articles"></articles>
		<uni-drawer ref="showLeft" mode="left" :mask-click="true">
			<scroll-view style="height: 100%;" scroll-y="true"><drawer></drawer></scroll-view>
		</uni-drawer>
	</view>
</template>

<script>
const chineseNum = ['一', '二', '三', '四', '五', '六', '七', '八', '九'];
import { openDatabase, isOpen, closeDatabase, getArticles, modifyData, getNoteList, addArticle } from '@/utils';
let token;
let localData;
let serverData;
export default {
	data() {
		return {
			date: '',
			month: '',
			day: '',
			articles: []
		};
	},
	methods: {
		showMore() {
			this.$refs.showLeft.open();
		}
	},
	onLoad() {
		const date = new Date();
		this.date = date.getDate();
		this.month = chineseNum[date.getMonth()];
		this.day = chineseNum[date.getDay() - 1];
	},
	async onShow() {
		if (uni.getStorageSync('token')) {
			token = uni.getStorageSync('token');
		}
		// uni.clearStorageSync("token")
		// console.log(uni.getStorageSync('token'))
		await openDatabase();
		// plus.sqlite.executeSql({
		// 	name: 'articles',
		// 	sql: 'drop table article',
		// });
		localData = await getArticles();
		if (localData.length === 0) {
			serverData = (await getNoteList(99, 1, token)).data.notes;
			console.log(serverData);
			this.articles = modifyData(serverData);
			serverData.reverse().forEach(async item => {
				await addArticle(item.content, item.createAt, item.text, item.tags);
			});
		} else {
			this.articles = modifyData(localData);
		}
		await closeDatabase();
		if (!uni.getStorageSync('token')) {
			uni.navigateTo({
				url: '/pages/enter/enter'
			});
		}
	}
};
</script>

<style lang="scss">
.container {
	line-height: normal;
	padding-left: 10rpx;
	padding-right: 10rpx;
	.line {
		width: 1rpx;
		display: inline;
		border-left: 1px solid #c7c9ce;
	}
	.headder-day {
		background-color: white;
		padding-top: calc(var(--status-bar-height) + 30px);
		.date {
			font-size: 100rpx;
			text-align: center;
		}
		.below {
			text-align: center;
			font-size: 30rpx;
			padding-bottom: 40rpx;
		}
		.text {
			margin: 15rpx;
		}
	}
}
</style>
