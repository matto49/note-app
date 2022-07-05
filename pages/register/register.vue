<template>
	<view class="">
		<view class="title">注册</view>
		<input type="text" class="global-input email-input" placeholder="输入邮箱" placeholder-class="input-placeholder" style="margin-top: 30px" maxlength="30" v-model="email" />
		<input
			type="text"
			class="global-input email-input"
			placeholder="输入名称"
			placeholder-class="input-placeholder"
			style="margin-top: 30px"
			maxlength="30"
			v-model="nickname"
		/>
		<input
			type="text"
			class="global-input email-input"
			placeholder="输入密码"
			placeholder-class="input-placeholder"
			style="margin-top: 30px"
			maxlength="30"
			v-model="password"
		/>
		<button class="email-send-btn" hover-class="hover-first-main-button" bindtap="verifyEmail" @click="register">加入</button>
		<navigator class="nav-log-account blue-font" url="/pages/login/login">已经注册?</navigator>
		<view class="gray-font bottom">
			<text>注册账号即表示您同意</text>
			<navigator class="blue-font navigator" target="" url="" hover-class="navigator-hover" open-type="navigate">《使用协议》</navigator>
			<text>和</text>
			<navigator class="blue-font navigator" target="" url="" hover-class="navigator-hover" open-type="navigate">《隐私条款》</navigator>
		</view>
	</view>
</template>

<script>
import { register, login } from '@/utils';
export default {
	data() {
		return {
			email: '',
			nickname: '',
			password: ''
		};
	},
	methods: {
		async register() {
			// await register(this.email, this.nickname, this.password);
			setTimeout(async () => {
				const data = await login(this.email, this.password);
				console.log(data);
				uni.setStorageSync('token', data.data.token);
				uni.setStorageSync('user', {
					nickname: this.nickname
				});
				uni.navigateTo({
					url: '/pages/index/index'
				});
			}, 1000);
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
	margin-top: 20px;
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
