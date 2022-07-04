<template>
	<view class="containner">
		<view class="date">{{article.date}}</view>
		<view class="data">
			<view class="month">
				<view class="row">
					{{month}}
				</view>
				<view class="row">
					{{year}}
				</view>
			</view>
			<view class="day">
				<view class="row">{{article.miniute}}</view>
				<view class="row">{{article.day}}</view>
			</view>
		</view>
		<view class="content">
			<rich-text :nodes="article.content">
			</rich-text>
		</view>
		<view class="bottom">
			<image src="@/static/edit.svg" class="button" @click="edit"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				article: {},
				year: '',
				month: '',
			};
		},
		onLoad(e) {
			console.log(e)
			this.article = JSON.parse(e.article);
			this.year = this.article.month.split(" ")[0];
			this.month = this.article.month.split(" ")[1];
			console.log(this.year)
			console.log(this.article)
		},
		methods: {
			edit() {
				uni.navigateTo({
					url: '/pages/write/write?data='+JSON.stringify(this.article)
				})
			}
		}
	}
</script>

<style lang="scss">
.containner {
	padding: var(--status-bar-height) 50rpx 0 70rpx;
	.date {
		padding-top: 30px;
		font-size: 100rpx;
	}
	.data {
		display: flex;
		justify-content: space-between;
		.month{
			padding-left: 20rpx;
			width: 400rpx;
			.row {
				padding-top: 10px;
				padding-bottom: 10px;
				border-bottom: 1px solid;
				font-size: 35rpx;
			}
		}
		.day {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			width: 120rpx;
			border: 1px solid;
			.row {
				padding-left: 45rpx;
			}
		}
	}
	.content {
		padding-top: 40px;
	}
	.bottom {
		position: fixed;
		bottom: 20px;
		padding-left: 300rpx;
		.button {
			height: 50rpx;
			width: 50rpx;
		}
	}
}
</style>
