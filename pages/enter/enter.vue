<template>
	<!--pages/enter/enter.wxml-->
	<view class="page">
		<view class="page-cover">
			<view class="title">格知笔记欢迎您</view>
			<view class="rectangle" />
			<view class="slogan">随时随地记下你想记录的笔记</view>
			<button class="first-main-button enter-button" hover-class="hover-first-main-button" @click="navigatorToLog">加入</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		navigatorToLog() {
			console.log(123)
			uni.navigateTo({
				url: '/pages/register/register'
			})
		}
	}
};
</script>

<style lang="scss">
.page {
	background-repeat: no-repeat;
	background-size: cover;
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 770rpx;
		height: 100vh;
		background-image: url('https://static.pivotstudio.cn/husthole/res/1.2/login_background.jpg');
		filter: blur(6px) brightness(80%);
	}
	.rectangle {
		width: 262rpx;
		height: 22rpx;
		background-color: #52b387;
		border-radius: 8rpx;
		position: relative;
		bottom: 40rpx;
		left: 80rpx;
	}
	.first-main-button {
		margin-top: 300px;
		width: 622rpx;
		height: 50px;
		background-color: #4b9f79;
		border-radius: 30rpx;
		text-align: center;
		line-height: 112rpx;
		margin: auto;
		color: #fff;
		position: fixed;
		bottom: calc(112rpx + 64px);
		left: 64rpx;
	}
	.hover-first-main-button {
		background-color: #2d895f;
		width: 622rpx;
		height: 112rpx;
		border-radius: 30rpx;
		text-align: center;
		line-height: 112rpx;
		margin: auto;
		color: #fff;
	}
	.title {
		position: relative;
		font-weight: bold;
		font-size: 60rpx;
		line-height: 90rpx;
		padding-top: 190rpx;
		text-align: left;
		padding-left: 64rpx;
		color: rgba(255, 255, 255, 0.87);
		background: transparent;
		z-index: 1;
	}
	.slogan {
		position: relative;
		font-size: 26rpx;
		line-height: 38rpx;
		padding-left: 70rpx;
		padding-bottom: 50rpx;
		color: rgba(255, 255, 255, 0.87);
		z-index: 1;
	}
}
</style>
