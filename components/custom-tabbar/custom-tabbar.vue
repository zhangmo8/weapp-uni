<template>
	<view class="cu-bar tabbar">
		<view class="fixed bg-white">
			<view class="action" v-for="(item) in footerNavs" :key="item.key">
				<view :class="item.key == currentIndex ? 'theme-primary' : 'gray'" @click="onNavChange(item.pagePath)">
					<view class="cuIcon-cu-image">
						<!-- icon  -->
						<text :class="'cuIcon-'+item.icon" v-if="!item.image"></text>
						<!-- 自定义icon: image 的优先级高于 icon -->
						<image class="image" :src="item.key == currentIndex ? item.image[1] : item.image[0]"></image>
					</view>
					<view>{{ item.title }}</view>
				</view>
			</view>
			<view class="add-action" v-if="showAdd">
				<button class=" cu-btn cuIcon-add shadow" @click="onToRepairApply"></button>
				<text class="text-theme-primary">新增</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'custom-tabbar',
	data() {
		return {
			// currentIndex: 0,
			publishVisible: false, // 发布Modal是否可见？
			footerNavs: [
				{
					key: 0,
					icon: 'tagfill',
					title: '工作',
					pagePath: '/pages/home/home',
					image: [require('@/static/img/flag.png'), require('@/static/img/flag_active.png')]
				},
				{
					key: 1,
					icon: 'my',
					title: '我的',
					pagePath: '/pages/mine/mine',
					image: [require('@/static/img/mine.png'), require('@/static/img/mine_active.png')]
				}
			]
		};
	},
	props: {
		currentIndex: { type: Number, value: 0 }
	},
	computed:{
		showAdd(){
			const role = this.vuex_user.role;
			return role === 'ADMIN' || role === 'CUSTOM'
		}
	},
	methods: {
		// 点击底部导航--切换页面
		onNavChange(pagePath) {
			uni.switchTab({
				url: pagePath
			});
		},
		// Publish 显示/关闭
		onShowPublish() {
			this.publishVisible = true;
		},
		onClosePublish() {
			this.publishVisible = true;
		},
		// 跳转报修申请页面
		onToRepairApply() {
			wx.navigateTo({ url: '/pages/repair-apply/repair-apply' });
		}
	}
};
</script>

<style lang="scss" scoped>
.cu-bar {
	width: 100%;
	height: calc(62px + env(safe-area-inset-bottom) / 2);
	padding-bottom: calc(env(safe-area-inset-bottom) / 2);
	position: relative;
	min-height: 100rpx;
	justify-content: space-between;
	.fixed {
		display: flex;
		align-items: center;
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 1024;
		box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0.1);
		padding-bottom: calc(env(safe-area-inset-bottom) / 2);
	}
	.add-action {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -45rpx);
		text-align: center;
		.cu-btn {
			border-radius: 50%;
			width: 95rpx;
			height: 95rpx;
			border: 7px solid $white-color;
			font-size: 50rpx;
			background-color: $base-color;
			color: $white-color;
			&::before {
				display: flex;
				justify-content: center;
				align-items: center;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
			}
		}
		.text-theme-primary {
			color: $base-color;
		}
	}

	.shadow {
		box-shadow: 0 -1rpx 6rpx rgba(0, 0, 0, 0.1);
	}
	.action {
		flex: 1;
		width: 100rpx;
		text-align: center;
	}
	.cuIcon-cu-image {
		margin: 0px auto;
	}
	.image {
		width: 50rpx;
		height: 50rpx;
		display: inline-block;
	}
	.theme-primary {
		color: $base-color;
	}
	.gray {
		color: $gray;
	}
}

.bg-white {
	background-color: $white-color;
	color: $dark-gray;
}
</style>
