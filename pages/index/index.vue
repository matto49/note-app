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
		<uni-drawer ref="showLeft" mode="left" :mask-click="true" >
			<scroll-view style="height: 100%;" scroll-y="true">
				<drawer></drawer>
			</scroll-view>
		</uni-drawer>
	</view>
</template>

<script>
const chineseNum = ['一', '二', '三', '四', '五', '六', '七', '八', '九'];
export default {
	data() {
		return {
			date: '',
			month: '',
			day: '',
			articles: [
				{
					createAt: 'Sat Jun 18 2022 16:24:18 GMT+0800 (中国标准时间)',
					content: '摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了',
					labels: ['摸了']
				},
				{
					createAt: 'Sat Jun 18 2022 16:24:18 GMT+0800 (中国标准时间)',
					content: '摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了',
					labels: ['摸了']
				},
				{
					createAt: 'Sat Jun 18 2022 16:24:18 GMT+0800 (中国标准时间)',
					content: '摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了',
					labels: ['摸了']
				},
				{
					createAt: 'Sat Jun 15 2022 16:24:18 GMT+0800 (中国标准时间)',
					content: '摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了',
					labels: ['摸了']
				},
				{
					createAt: 'Sat July 15 2022 16:24:18 GMT+0800 (中国标准时间)',
					content: '摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了',
					labels: ['摸了']
				},
				{
					createAt: 'Sat Jun 15 2022 16:24:18 GMT+0800 (中国标准时间)',
					content: '摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了',
					labels: ['摸了']
				},
				{
					createAt: 'Sat July 15 2022 16:24:18 GMT+0800 (中国标准时间)',
					content: '摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了',
					labels: ['摸了']
				}
			]
		};
	},
	methods: {
		showMore() {
			this.$refs.showLeft.open()
		}
	},
	onLoad() {
		const date = new Date();
		this.date = date.getDate();
		this.month = chineseNum[date.getMonth()];
		this.day = chineseNum[date.getDay() - 1];
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
