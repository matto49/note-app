<template>
	<view class="container">
		<view class="search-container"><uni-search-bar placeholder="请输入关键字" @confirm="search" radius="30"></uni-search-bar></view>
		<view class="default" v-if="defaultContent">
			<image class="image" src="/static/search-empty.svg"></image>
			<view class="text"><text>空空如也</text></view>
		</view>
		<view><articles :articles="articles"></articles></view>
	</view>
</template>

<script>
import { openDatabase, closeDatabase, getArticlesByWords, modifyData } from '@/utils';
export default {
	data() {
		return {
			defaultContent: false,
			articles: []
		};
	},
	methods: {
		async search(e) {
			const value = e.value;
			await openDatabase();
			this.articles = await getArticlesByWords(value);
			await closeDatabase();
		}
	}
};
</script>

<style lang="scss">
.container {
	padding-top: var(--status-bar-height);
	.search-container {
		background-color: #fff;
		height: 60px;
	}
	.default {
		padding-top: 25vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		.image {
			width: 300rpx;
			height: 300rpx;
		}
		.text {
			padding-top: 30rpx;
			color: #c7c9ce;
		}
	}
}
</style>
