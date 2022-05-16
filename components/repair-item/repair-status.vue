<template>
	<view class="flex col-center row-end status">
		<image class="status-icon" :src="require('@/static/img/'+statusIcon)" mode="aspectFill" />
		<view class="text-theme-primary text-bold" style="padding-left:5px">{{ statusText }}</view>
	</view>
</template>

<script>
const iconList = {
	WAITING_DISPATCHING: 'sand_clock_red.png',
	WAITING_REPAIRING: 'sand_clock_red.png',
	REPAIRING: 'sand_clock_red.png',
	REPAIRED: 'eye_red.png',
	CLOSED: 'ok_red.png',
	REVOKED: 'close_red.png'
};
const textList = {
	WAITING_DISPATCHING: '等待中',
	WAITING_REPAIRING: '等待中',
	REPAIRING: '修理中',
	REPAIRED: '待验收',
	CLOSED: '已完成',
	REVOKED: '已取消'
};
export default {
	name: 'repair-status',
	props: {
		status: {
			type: String,
			default: 'WAITING_DISPATCHING'
		}
	},
	computed: {
		statusIcon() {
			if (this.status) {
				return iconList[this.status];
			}
			return '';
		},
		statusText() {
			if (this.status) {
				return textList[this.status];
			}
			return '';
		}
	}
};
</script>

<style lang="scss" scoped>
.status {
	.status-icon {
		width: 22rpx;
		height: 22rpx;
	}
}
</style>
