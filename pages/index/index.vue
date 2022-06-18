<template>
	<view class="container">
		<headder></headder>
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
		<view class="article-container">
			<view class="month"><text>二零二二年 六月</text></view>
			<view class="article-innercontainer">
				<view class="article">
					<view class="time">
						<view class="date">16</view>
						<view class="day">周一</view>
						<view class="miniute">11:50</view>
					</view>
					<view class="line"></view>
					<view class="content"><text>摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了</text></view>
				</view>
			</view>
			<view class="month"><text>二零二二年 六月</text></view>
			<view class="article-innercontainer">
				<view class="article">
					<view class="time">
						<view class="date">16</view>
						<view class="day">周一</view>
						<view class="miniute">11:50</view>
					</view>
					<view class="line"></view>
					<view class="content"><text>摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了</text></view>
				</view>
			</view>
			<view class="blank"></view>
			<view class="article-innercontainer">
				<view class="article">
					<view class="time">
						<view class="date">16</view>
						<view class="day">周一</view>
						<view class="miniute">11:50</view>
					</view>
					<view class="line"></view>
					<view class="content"><text>摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了</text></view>
				</view>
			</view>
			<view class="month"><text>二零二二年 六月</text></view>
			<view class="article-innercontainer">
				<view class="article">
					<view class="time">
						<view class="date">16</view>
						<view class="day">周一</view>
						<view class="miniute">11:50</view>
					</view>
					<view class="line"></view>
					<view class="content"><text>摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了摸了摸了摸了睡了</text></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
const chineseNum = ['一', '二', '三', '四', '五', '六', '七', '八', '九'];
export default {
	data() {
		return {
			date: '',
			month: '',
			day: ''
		};
	},
	methods: {},
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
		border-left:1px solid #c7c9ce
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
	.article-container {
		.month {
			padding-top: 8px;
			padding-bottom: 5px;
			text-align: center;
			font-size: 10px;
			color: #8f939c;
		}
		.article-innercontainer {
			background-color: white;
			padding: 30rpx 30rpx 30rpx 45rpx;
			.article {
				display: flex;
				.time {
					text-align: center;
					padding-right: 30rpx;
					.date {
						font-size: 50rpx;
					}
					.day {
						font-size: 25rpx;
					}
					.miniute {
						font-size: 25rpx;
						color: #8f939c;
					}
				}
				.content {
					padding: 8rpx 10rpx 0 30rpx;
					width: 400rpx;
					font-size: 30rpx;
					display: flex;
					flex-wrap: wrap;
				}
			}
		}
		.blank {
			height: 10rpx;
		}
	}
}
</style>
