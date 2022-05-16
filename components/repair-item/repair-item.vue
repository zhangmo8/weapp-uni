<template>
	<view class="item-bg">
		<view class="flex row-between" style="margin-bottom:12px">
			<view class="text-bold flex-1">{{ repairDetail.equipmentTextName || '123123123' }}</view>
			<!-- 状态Icon -->
			<view style="width:100px;text-align:right"><repair-status :status="repairDetail.status" /></view>
		</view>
		<view class="flex col-center repair-info">
			<text class="label">单号：</text>
			<text class="value flex-1">{{ repairDetail.no || 'RP20220222094730000001' }}</text>
			<!-- v-if="{{type=='REPAIR_DONE' || item.status=='CLOSED'}}" -->
			<text v-if="repairDetail.status == 'CLOSED'" class="value">{{ repairDetail.globalAssessment == 5 ? '满意' : '不满意' }}</text>
		</view>
		<view class="flex col-center repair-info">
			<text class="label">发起时间：</text>
			<text class="value flex-1">{{ repairDetail.createdOn || '2021-08-19 10:02:28' }}</text>
		</view>
		<view class="flex row-end look-detail"><u-button @click="goDetail" :ripple="true" size="mini" shape="circle">查看详情</u-button></view>
	</view>
</template>

<script>
import repairStatus from './repair-status.vue';
export default {
	props: {
		repairDetail: {
			type: Object,
			default: () => ({})
		}
	},
	components:{repairStatus},
	methods: {
		goDetail() {
			uni.navigateTo({
				url: '/pages/repair-info/repair-info?repairId=' + this.repairDetail.id
			});
		}
	}
};
</script>

<style lang="scss" scoped>
uni-button {
	margin: 0px;
}
.item-bg {
	background-color: $white-color;
	padding: 12px 10px;
	border-radius: 10px;
	margin: 10px;
}
.repair-info {
	margin: 12px 0px;
	font-size: 12px;
	.label {
		min-width: 60px;
		color: $label-color;
	}
	.value {
		color: $value-color;
	}
}

.look-detail {
	width: 100%;
}
</style>
