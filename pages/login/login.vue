<template>
	<view class="flex flex-col light-page">
		<!-- 背景 -->
		<image class="img" src="@/static/img/homepage.png" mode="widthFix" />
		<!-- body -->
		<view class="flex-1 form">
			<view class="title">你好，</view>
			<view class="title welcome">欢迎来到泰安中心医院高新院区，预约停车</view>
			<view class="flex col-center form-item">
				<view class="form-icon flex flex-center"><uni-icons color="#009498" type="person" size="16"></uni-icons></view>
				<uni-easyinput class="flex-1" :style="inputStyle" :inputBorder="false" v-model="username" placeholder="账号/手机号"></uni-easyinput>
			</view>

			<view class="flex col-center form-item">
				<view class="form-icon flex flex-center"><uni-icons color="#009498" type="locked" size="16"></uni-icons></view>
				<uni-easyinput class="flex-1" :style="inputStyle" :inputBorder="false" type="password" v-model="password" placeholder="请输入密码"></uni-easyinput>
			</view>

			<view style="padding: 20px 0"><button @click="onSubmit" class="submit-btn">登录</button></view>
		</view>
	</view>
</template>
<script>
import { rePhone } from '@/utils/regExp';
import { loginByMobile, loginByUserName } from '@/services/index.js';

export default {
	data() {
		return {
			username: '',
			password: ''
		};
	},
	onLoad() {
		// 检查是否已经登录过了
		const _token = uni.getStorageSync('token');
		// 已登录自动重定向到 Home page
		if (_token) {
			uni.switchTab({
				url: '/pages/home/home'
			});
		}
	},
	computed: {
		inputStyle() {
			return {
				color: '#822E3B',
				disableColor: '#F7F6F6',
				borderColor: '#e5e5e5'
			};
		}
	},
	methods: {
		onSubmit() {
			if (!this.username) {
				uni.showModal({
					content: '账号/手机号不能为空！',
					showCancel: false,
					confirmText: '知道了',
					confirmColor: '#666666'
				});
				return false;
			}
			if (!this.password) {
				uni.showModal({
					content: '密码不能为空！！',
					showCancel: false,
					confirmText: '知道了',
					confirmColor: '#666666'
				});
				return false;
			}

			const { username, password } = this;

			uni.showLoading({ title: '登录中', mask: true });
			let fn = loginByUserName;
			let params = { userName: username, password };
			// 手机号登录
			if (rePhone.test(username)) {
				fn = loginByMobile;
				params = { loginMobile: username, password };
			}
			fn(params).then(res => {
				uni.hideLoading();
				uni.setStorageSync('token', res);
				uni.switchTab({
					url: '/pages/home/home'
				});
			});
		}
	}
};
</script>
<style lang="scss" scoped>
.img {
	width: 100%;
	display: block;
}
.form {
	transform: translateY(-40rpx);
	background-color: $white-color;
	padding: 120rpx 60rpx 0;
	border-top-left-radius: 60rpx;
	border-top-right-radius: 60rpx;

	.title {
		color: $base-color;
		font-size: 34rpx;
	}

	.welcome {
		font-size: 24rpx;
		margin-bottom: 55rpx;
	}

	.form-item {
		min-height: 100rpx;
		position: relative;
		box-sizing: border-box;
		padding: 0px 30rpx;
		margin-bottom: 10rpx;
		color: $base-color;
		
		.form-icon {
			width: 80rpx;
			height: 80rpx;
			background-color: $icon-gray-color;
		}
	}
	.submit-btn {
		margin-top: 260rpx;
		background-color: $base-color;
		color: $white-color;
		border-radius: 20rpx;
	}
}
</style>
