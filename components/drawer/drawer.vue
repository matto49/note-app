<template>
	<view class="container">
		<view class="avatar-container"><image class="avatar" src="https://s3.bmp.ovh/imgs/2022/06/18/456128275f6945ba.png"></image></view>
		<view class="name">matto</view>
		<view class="items" v-for="item in items" @click="gotoPage(item.url)">
			<view class="item-container">
				<image class="icon" :src="item.icon"></image>
				<view class="word">
					<text>{{ item.name }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'drawer',
	props: {
		src: {
			type: String,
			default: 'https://s3.bmp.ovh/imgs/2022/06/18/65c3a23e7db3866a.jpg'
		}
	},
	data() {
		return {
			items: [
				{
					name: '搜索',
					icon: '/static/search.svg',
					url: '/pages/search/search'
				},
				{
					name: '日历',
					icon: '/static/calendar.svg',
					url: '/pages/calendar/calendar'
				},{
					name: '标签',
					icon: '/static/note.svg',
					url: '/pages/tag/tag'
				},
				{
					name: '设置',
					icon: '/static/setting.svg',
					url:'/pages/setting/setting'
				}
			]
		};
	},
	methods: {
		gotoPage(url) {
			uni.navigateTo({
				url
			})
		}
	}
};
</script>

<style lang="scss">
.container {
	padding-top: calc(var(--status-bar-height) + 30px);
	display: flex;
	flex-direction: column;
	.avatar-container {
		width: 100%;
		display: flex;
		justify-content: center;
		.avatar {
			width: 200rpx;
			height: 200rpx;
			border-radius: 50%;
		}
	}
	.name {
		padding-top: 30rpx;
		text-align: center;
	}
	.items {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 80px;
		padding-top: 30px;
		.item-container {
			.icon {
				height: 45rpx;
				width: 45rpx;
				padding-right: 50rpx;
				vertical-align: middle;
			}
			.word {
				display: inline-block;
				vertical-align: middle;
				font-size: 40rpx;
				padding-right: 50rpx;
			}
		}
	}
}
</style>
