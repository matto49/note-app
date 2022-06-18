<template>
	<view>
		<view class="article-container" v-for="month in articles">
			<view class="month"><text>{{month.month}}</text></view>
			<view class="article-innercontainer" v-for="article in month.articles">
				<view class="article">
					<view class="time">
						<view class="date">16</view>
						<view class="day">{{article.day}}</view>
						<view class="miniute">11:50</view>
					</view>
					<view class="line"></view>
					<view class="content"><text>{{article.content}}</text></view>
				</view>
			</view>
			<view class="blank"></view>
		</view>
	</view>
</template>
<script>
import { formatMonth, formatWeek, formatMiniute } from '@/utils/index.js';
export default {
	name: 'articles',
	props: {
		articles: {
			type:Array
		}
	},
	data() {
		return {

		};
	},
	created() {
		this.articles.forEach(item => {
			const date = new Date(item.createAt)
			item.month = formatMonth(date);
			item.day = formatWeek(date);
			item.miniute = formatMiniute(date);
		});
		let currentMonth = '';
		this.articles = this.articles.reduce((pre, cur, index) => {
			console.log(currentMonth,cur.month)
			if (currentMonth === '' || currentMonth !== cur.month) {
				let newMonth = {
					month: cur.month,
					articles: [cur]
				};
				currentMonth = cur.month
				pre.push(newMonth)
			} else {
				pre[pre.length-1].articles.push(cur)
			}
			return pre;
		}, []);
		console.log(this.articles)
	}
};
</script>

<style lang="scss">
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
</style>
