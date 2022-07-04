<template>
	<view class="">
		  <view class="title">{{123}}</view>
		  <input type="text" class="global-input email-input" placeholder="输入学号" placeholder-class="input-placeholder" :value="email" style="margin-top: 42px" bindinput="inputEmail" maxlength="30">
		  </input>
		  <button class="email-send-btn" hover-class="hover-first-main-button" bindtap="verifyEmail">获取验证码
		  </button>
		<navigator class="nav-log-account blue-font" url="/pages/log-account/log-account">已经注册?</navigator>
		<view class="gray-font bottom">
			<text>注册账号即表示您同意</text>
			<navigator class="blue-font navigator" target="" url="" hover-class="navigator-hover" open-type="navigate">《使用协议》</navigator>
			<text>和</text>
			<navigator class="blue-font navigator" target="" url="" hover-class="navigator-hover" open-type="navigate">《隐私条款》</navigator>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			email: ""
		};
	}
};
</script>

<style lang="scss">
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
	position: fixed;
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
