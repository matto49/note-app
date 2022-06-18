<template>
	<view class="container">
		<scroll-view scroll-y="true">
			<view class="scroll">
				<view class="tag">
					<text>全部</text>
					<view class="line" v-if="selected == 0"></view>
				</view>
				<view class="tag">
					<text>未分类</text>
					<view class="line" v-if="selected == 1"></view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			selected: 0
		};
	}
};
</script>

<style lang="scss">
.container {
	padding-top: var(--status-bar-height);
	padding-left: 50rpx;
	.scroll {
		display: flex;
		font-size: 40rpx;
		.tag {
			padding-left: 25rpx;
			padding-right: 25rpx;
			.line {
				border-bottom: 5px solid blue;
				width: 40rpx;
				margin: 0 auto;
				padding-top:5px;
			}
		}
	}
}
</style>
