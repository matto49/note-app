<template>
	<view class="">
		<view class="title">登录</view>
		<input type="text" class="global-input email-input" placeholder="输入邮箱" placeholder-class="input-placeholder" style="margin-top: 30px" maxlength="30" v-model="email" />
		<input
			type="text"
			class="global-input email-input"
			placeholder="输入密码"
			placeholder-class="input-placeholder"
			style="margin-top: 30px"
			maxlength="30"
			v-model="password"
		/>
		<button class="email-send-btn" hover-class="hover-first-main-button" bindtap="verifyEmail" @click="login">登录</button>
		<view class="gray-font bottom"></view>
	</view>
</template>

<script>
import { register, login } from '@/utils';
export default {
	data() {
		return {
			email: '',
			password: ''
		};
	},
	methods: {
		async login() {
			const data = await login(this.email, this.password);
			uni.setStorageSync({
				ket: 'token',
				data: data.data.token
			});
			console.log(data.data.token)
			uni.navigateTo({
				url: '/pages/index/index'
			});
		}
	}
};
</script>

<style lang="scss">
.title {
	padding: calc(var(--status-bar-height)+100px) 50rpx 0 70rpx;
	text-align: center;
	font-size: 60rpx;
}
.email-send-btn {
	margin-top: 30px;
	width: 600rpx;
	background-color: #4b9f79;
}
.blue-font {
	line-height: 24rpx;
	font-family: Source Han Sans CN;
	font-style: normal;
	font-weight: 350;
	font-size: 28rpx;
	line-height: 42rpx;
	color: #02a9f5;
}

.gray-font {
	font-size: 24rpx;
	color: #cbcbcb;
	text-align: center;
	margin-top: 24rpx;
}

.navigator-hover {
	background-color: #ffffff;
	opacity: 1;
}

.global-input {
	width: 622rpx;
	height: 112rpx;
	border-radius: 30rpx;
	border: solid 2rpx #4b9f79;
	margin: auto;
	background-color: white;
	padding-left: 40rpx;
	box-sizing: border-box;
	font-size: 28rpx;
}

input {
	font-weight: normal;
}

.input-placeholder {
	font-size: 28rpx;
	color: #cbcbcb;
}

.error-prompt {
	color: #ff6767;
	font-size: 20rpx;
	padding-left: 104rpx;
}

.bottom {
	position: absolute;
	bottom: 82rpx;
	font-size: 28rpx;
	text-align: center;
	width: 100vw;
	display: flex;
	justify-content: center;
}

.nav-log-account {
	float: right;
	overflow: hidden;
	margin-right: 64rpx;
}

.remind {
	margin: auto;
	text-align: left;
	margin-top: 20rpx;
	width: 622rpx;
	word-wrap: normal;
	word-break: break-all;
	display: block;
}

.navigator {
	display: inline;
}
</style>
