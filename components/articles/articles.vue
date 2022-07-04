<template>
	<view>
		<view class="article-container" v-for="month in datalist">
			<view class="month">
				<text>{{ month.month }}</text>
			</view>
			<view class="article-innercontainer" v-for="article in month.articles" @click="enterArticle(article)">
				<view class="article">
					<view class="time">
						<view class="date">{{ article.date }}</view>
						<view class="day">{{ article.day }}</view>
						<view class="miniute">{{ article.miniute }}</view>
					</view>
					<view class="line"></view>
					<view class="content">
						<text>{{ article.text }}</text>
					</view>
				</view>
				<view class="blank"></view>
			</view>
		</view>
	</view>
</template>
<script>
import { formatMonth, formatWeek, formatMiniute } from '@/utils/index.js';
export default {
	name: 'articles',
	props: {
		articles: {
			type: Array
		}
	},
	data() {
		return {};
	},
	computed: {
		datalist() {
			let temp = this.articles;
			console.log(temp)
			temp.forEach(item => {
				const date = new Date(item.createAt);
				item.month = formatMonth(date);
				item.date = date.getDate();
				item.day = formatWeek(date);
				item.miniute = formatMiniute(date);
			});
			let currentMonth = '';
			return temp.reduce((pre, cur, index) => {
				if (currentMonth === '' || currentMonth !== cur.month) {
					let newMonth = {
						month: cur.month,
						articles: [cur]
					};
					currentMonth = cur.month;
					pre.push(newMonth);
				} else {
					pre[pre.length - 1].articles.push(cur);
				}
				return pre;
			}, []);
		}
	},
	created() {},
	methods: {
		enterArticle(article) {
			let data = JSON.stringify(article);
			uni.navigateTo({
				url: '/pages/article/article?article=' + data
			});
		}
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
		.article {
			background-color: white;
			padding: 30rpx 30rpx 30rpx 45rpx;
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
				height: 134rpx;
				width: 500rpx;
				font-size: 30rpx;
				display: flex;
				flex-wrap: wrap;
				overflow: hidden;
			}
		}
		.blank {
			height: 10px;
			background-color: #f5f5f5;
		}
	}
}
</style>
