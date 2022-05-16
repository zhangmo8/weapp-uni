<template>
	<view>
		<user-info></user-info>
		<u-cell-group>
			<u-cell-item v-for="item in cellList" :key="item.icon">
				<view slot="title" class="flex col-center">
					<u-image width="40rpx" height="40rpx" :src="require('@/static/img/' + item.icon + '.png')"></u-image>
					<text class="title">{{ item.name }}</text>
				</view>
			</u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
import { byteConvert } from '@/utils/util.js';
import { logout } from '@/services/index.js';
export default {
	data() {
		return {
			cellList: [
				{
					name: '常用邮箱',
					icon: 'email'
				},
				{
					name: '订单记录',
					icon: 'order'
				},
				{
					name: '我要开票',
					icon: 'invoice'
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
	.title{
		margin-left: 20rpx;
		color: $value-color;
	}
</style>
