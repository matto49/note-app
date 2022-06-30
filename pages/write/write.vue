<template>
	<view class="container">
		<view class="headder">
			<view class="top-view status"></view>
			<view class="titles">
				<view class="titleLeftButton" @click="returnToIndex"><image class="button" src="/static/left-arrow.svg"></image></view>
				<view class="titleText">二零二二年 五月</view>
				<view class="titleRightButton" @click=""><image class="button" src="/static/note.svg"></image></view>
			</view>
		</view>
		<jinEdit placeholder="请输入内容" @editOk="editOk" uploadFileUrl="/#"></jinEdit>
	</view>
</template>
<script>
import jinEdit from '../../components/jin-edit/jin-edit.vue';
export default {
	data() {
		return {};
	},
	components: {
		jinEdit
	},
	methods: {
		// 点击发布
		editOk(e) {
			console.log(e);
		},
		returnToIndex() {
			uni.navigateBack()
		}
	}
};
</script>
<style lang="scss" scoped>
.headder {
	height: calc(var(--status-bar-height) + 30px);
	width: 100%;
	position: fixed;
	background-color: white;
	.status {
		height: var(--status-bar-height);
	}
	.titles {
		display: flex;
		justify-content: space-between;
		padding-left: 20rpx;
		padding-right: 30rpx;
		.button {
			height: 50rpx;
			width: 50rpx;
		}
		.titleLeftButton{
			padding-top: 7px;
			padding-left: 20rpx;
		}
		.titleRightButton{
			padding-top: 10px;
		}
		.titleText {
			align-self: center;
		}
	}
}
</style>
