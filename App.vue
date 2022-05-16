<script>
export default {
	onLaunch: function() {
		console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！');
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
@import 'uview-ui/index.scss';
@import '@/static/customicons.css';
@import '@/static/icon.css';
/* #ifndef APP-NVUE */
// 设置整个项目的背景色
page {
	background-color: #f6f5f5;
	width: 100vw;
	min-height: 100vh;
}
/* #endif */

/* #ifdef H5 */
uni-tabbar{
	display: none;
}
/* #endif */

.base-page {
	height: 100%;
	background-color: $base-color;
	min-height: calc(100vh - (env(safe-area-inset-top)));
}

.light-page {
	height: 100%;
	background-color: $white-color;
	min-height: calc(100vh - (env(safe-area-inset-top)));
}

.relative {
	position: relative;
}
.absolute {
	position: absolute;
}

.flex {
	display: flex;
}
.flex-center {
	justify-content: center;
	align-items: center;
}
.flex-col {
	flex-direction: column;
}
.col-center {
	align-items: center;
}
.col-around{
	align-content:space-around ;
}
.row-between{
	justify-content: space-between;
}
.row-end{
	justify-content: flex-end;
}

.flex-wrap{
	flex-wrap: wrap;
}
.flex-1 {
	flex: 1;
}

.text-theme-primary{
	color: $base-color;
}
.text-bold{
	font-weight: bold;
}
.example-info {
	font-size: 14px;
	color: #333;
	padding: 10px;
}
</style>
