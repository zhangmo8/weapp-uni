<template>
	<view class="step-page">
		<image class="image" :src="require('@/static/img/' + status + '.png')"></image>
		<view class="title" :class="status">{{title}}</view>
		<view v-if="hasBorder" class="step-line" :class="'line-' + status"></view>
	</view>
</template>

<script>
export default {
	name: 'split-line',
	props: {
		hasBorder: {
			type: Boolean,
			default: true
		},
		status: {
			type: String,
			default: 'error'
		},
		title: {
			type: String,
			default: '保修中'
		}
	},

	data() {
		return {
			url: `../../static/img/${this.status}.png`
		};
	}
};
</script>

<style lang="scss" scoped>
.step-page {
	position: relative;
	display: flex;
	align-items: center;
	margin-bottom: 48rpx;
	width: 180rpx;
}

.step-page > image {
	width: 48rpx;
	height: 48rpx;
}

.step-page > .image {
	width: 48rpx;
	height: 48rpx;
}

.step-page > .title {
	font-size: 28rpx;
	margin-left: 20rpx;
	font-weight: bold;
}

.step-page > .success,
.step-page > .pending {
	color: #822e3b;
}

.step-page > .error {
	color: #9f9f9f;
}

.step-page > .step-line {
	position: absolute;
	top: 100%;
	left: 24rpx;
	width: 4rpx;
	height: 48rpx;
	border-radius: 2rpx;
}

.step-page > .line-error,
.step-page > .line-pending {
	background-color: #9f9f9f;
}

.step-page > .line-success {
	background-color: #822e3b;
}
</style>
