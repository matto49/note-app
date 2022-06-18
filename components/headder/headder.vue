<template>
	<view class="headder">
		<view class="top-view status"></view>
		<view class="titles">
			<view class="titleLeftButton" @click="showMore"><image class="button" src="/static/more.svg"></image></view>
			<view class="titleText">二零二二年 五月</view>
			<view class="titleRightButton" @click="gotoWritePage"><image class="button" src="/static/write.svg"></image></view>
		</view>
	</view>
</template>
<script>
export default {
	props: {
		titleText: {
			type: String,
			default: ''
		}
	},
	methods: {
		gotoWritePage() {
			uni.navigateTo({
				url: '/pages/write/write'
			})
		},
		showMore() {
			this.$emit("showMore");
		}
	}
};
</script>
<style lang="scss">
.headder {
	height: calc(var(--status-bar-height) + 30px);
	width: 100%;
	position: fixed;
	background-color: white;
	padding-bottom: 20px;
	.status {
		height: var(--status-bar-height);
	}
	.titles {
		display: flex;
		justify-content: space-between;
		padding-left: 20rpx;
		padding-right: 30rpx;
		.button {
			height: 30px;
			width: 50rpx;
		}
		.titleText {
			align-self: center;
		}
	}
}
</style>
