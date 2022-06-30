<template>
	<view class="container">
		<view class="headder">
			<view class="top-view status"></view>
			<view class="titles">
				<view class="titleLeftButton" @click="returnToIndex"><image class="button" src="/static/left-arrow.svg"></image></view>
				<view class="titleText">账号设置</view>
			</view>
		</view>
		<view class="avatar-container">
			<view><image class="avatar" src="https://s3.bmp.ovh/imgs/2022/06/18/456128275f6945ba.png"></image></view>
			<view class="name">更改头像</view>
		</view>
		<view class="items-container">
			<view class="item-container">
				<text style="color: #8f939c;">昵称</text>
				<text>matto</text>
			</view>
			<view class="item-container">
				<text style="color: #8f939c;">性别</text>
				<text>保密</text>
			</view>
		</view>
		<view class="items-container">
			<view class="item-container">
				<text style="color: #8f939c;">邮箱</text>
				<text>未绑定</text>
			</view>
			<view class="item-container">
				<text style="color: #8f939c;">手机</text>
				<text>未绑定</text>
			</view>
			<view class="item-container">
				<text style="color: #8f939c;">微信</text>
				<text>未绑定</text>
			</view>
			<view class="item-container">
				<text style="color: #8f939c;">qq</text>
				<text>已绑定</text>
			</view>
		</view>
		<view class="items-container">
			<view class="item-container">
				<text style="color: #8f939c;">修改密码</text>
				<image src="/static/right-arrow.svg" class="icon"></image>
			</view>
			<view class="item-container">
				<text style="color: #8f939c;">注销账户</text>
				<image src="/static/right-arrow.svg" class="icon"></image>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		returnToIndex() {
			uni.navigateBack();
		}
	}
};
</script>

<style lang="scss">
.container {
	.headder {
		height: calc(var(--status-bar-height) + 30px);
		width: 100%;
		position: fixed;
		background-color: white;
		padding-bottom: 15rpx;
		.status {
			height: var(--status-bar-height);
		}
		.titles {
			display: flex;
			padding-left: 20rpx;
			padding-right: 30rpx;
			.button {
				height: 50rpx;
				width: 50rpx;
			}
			.titleLeftButton {
				padding-left: 20rpx;
			}
			.titleText {
				padding-left: 30rpx;
			}
		}
	}
	.avatar-container {
		padding-top: calc(var(--status-bar-height) + 30px);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 50rpx;
		padding-right: 50rpx;
		height: 250rpx;
		background-color: #fff;
		margin-bottom: 20px;
		.avatar {
			width: 150rpx;
			height: 150rpx;
			border-radius: 50%;
		}
	}
	.items-container {
		display: flex;
		flex-direction: column;
		margin-bottom: 10px;
		.item-container {
			margin-bottom: 1px;
			height: 50px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-left: 50rpx;
			padding-right: 50rpx;
			background-color: #fff;
		}
		.icon {
			height: 40rpx;
			width: 40rpx;
		}
	}
}
</style>
