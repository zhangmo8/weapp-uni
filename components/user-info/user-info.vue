<template>
	<view class="bg-cover-mine">
		<!-- user avatar -->
		<view class="flex flex-center user-info">
			<u-image shape="circle" width="120rpx" height="120rpx" :src="config.apiUrl + '/datafile/download?dataFileId=' + vuex_user.coverId">
				<u-loading slot="loading"></u-loading>
				<u-image slot="error" shape="circle" width="120rpx" height="120rpx" :src="require('@/static/img/avatar.png')"></u-image>
			</u-image>
			<view class="flex flex-col col-around u-m-l-30">
				<!-- user name -->
				<view class="text-label">{{ vuex_user.userName || '微信用户' }}</view>
				<!-- user departmentName -->
				<view class="text-des">{{ vuex_user.departmentName || '12345678910' }}</view>
			</view>
		</view>
		<view class="flex row-between col-center car-card">
			<view>
				<view class="car-title">我的车辆</view>
				<view class="car-des">
					<u-icon name="car" color="#fff" size="24"></u-icon>
					<text>暂未添加</text>
				</view>
			</view>
			<view class="flex col-center go-to-car">
				<text>立即添加</text>
				<view class="flex flex-center go-to-arrow">
					<uni-icons type="arrow-right" color="#ffffff" size="10"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
import config from '@/config';
export default {
	data() {
		return {
			config
		};
	}
};
</script>

<style lang="scss" scoped>
.bg-cover-mine {
	width: 100%;
	padding-top: calc(var(--status-bar-height) + 21px);
	background-color: $white-color;

	.user-info {
		height: 240rpx;

		.text-label {
			z-index: 3;
			font-size: 18px;
			color: $label-color;
		}
		.text-des {
			margin-top: 20rpx;
			font-size: 12px;
		}
	}

	.car-card {
		color: $white-color;
		background-color: $base-color;
		height: 160rpx;
		margin: 0px 40rpx;
		padding: 0px 30rpx;
		border-radius: 40rpx 40rpx 0px 0px;

		.car-title {
			font-size: 30rpx;
			font-weight: bold;
			margin-bottom: 12rpx;
		}

		.car-des {
			font-size: 24rpx;
			font-weight: 400;
		}
		
		.go-to-car{
			background-color: $white-color;
			color: $base-color;
			border-radius: 34rpx;
			padding: 18rpx 34rpx;
			.go-to-arrow{
				margin-left: 10rpx;
				width: 32rpx;
				height: 32rpx;
				background-color: $base-color;
				border-radius: 50%;
			}
		}
	}
}
</style>
