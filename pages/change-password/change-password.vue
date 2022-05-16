<template>
	<view>
		<user-info></user-info>
		<view class="grey-block">
			<u-field
				required
				type="password"
				:clearable="false"
				label-width="180"
				input-align="right"
				v-model="oldPassword"
				background-color="red"
				label="旧密码"
				placeholder="请输入"
			/>
			<u-field type="password" required :clearable="false" label-width="180" input-align="right" v-model="newPwd" label="新密码" placeholder="请输入" />
			<u-field required type="password" :clearable="false" label-width="200" input-align="right" v-model="newPwdAgain" label="重复输入新密码" placeholder="重复输入新密码" />
		</view>
		<view style="height: 20px"></view>
		<u-button :hair-line="false" :custom-style="customStyle" @click="onSubmit">修改密码</u-button>
	</view>
</template>

<script>
import { rePassword } from '@/utils/regExp';
import { changePwd } from '@/services/index.js';

export default {
	data() {
		return {
			oldPassword: '',
			newPwd: '',
			newPwdAgain: ''
		};
	},
	onshow() {},
	computed: {
		customStyle() {
			return {
				minHeight: '100rpx',
				border: 'none',
				color: 'red'
			};
		}
	},
	methods: {
		onSubmit() {
			console.log(this.vuex_user);

			/////////////////为空判断
			if (!this.oldPassword.trim() || !this.newPwd.trim() || !this.newPwdAgain.trim()) {
				uni.showModal({
					content: '密码不能为空！！',
					showCancel: false,
					confirmText: '知道了',
					confirmColor: '#666666'
				});
				return false;
			}

			/////////////////新旧校验
			if (this.newPwd !== this.newPwdAgain) {
				uni.showModal({
					content: '两次密码不一致！！',
					showCancel: false,
					confirmText: '知道了',
					confirmColor: '#666666'
				});
				return false;
			}

			/////////////////re reg
			if (!rePassword.test(this.oldPassword) || !rePassword.test(this.newPwd) || !rePassword.test(this.newPwdAgain)) {
				uni.showModal({
					content: '密码必须包含大小写字母和数字的组合,不能使用特殊字符,长度在6-18之间',
					showCancel: false,
					confirmText: '知道了',
					confirmColor: '#666666'
				});
				return false;
			}

			const { oldPassword, newPwd } = this;
			uni.showLoading({ title: '修改中', mask: true });
			changePwd({
				oldPassword,
				password: newPwd
			}).then(() => {
				uni.hideLoading();
				uni.showToast({ title: '修改成功' });
				setTimeout(() => {
					uni.navigateBack({});
				}, 100);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.grey-block {
	border-top: 20rpx solid #f8f8f8;
}
.u-field {
	background-color: #fff;
}
</style>
