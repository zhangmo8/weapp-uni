<template>
  <view>
    <view class="real-header"></view>
    <view class="fix-header" :style="headerStyle">
      <u-tabs
        itemWidth="140"
        active-color="#822E3B"
        :list="tablist"
        :is-scroll="false"
        :current="current"
        @change="change"
      ></u-tabs>
    </view>
    <view v-for="item in list" :key="item.id"
      ><repair-item :repairDetail="item"></repair-item
    ></view>
    <u-loadmore :status="fetchStatus" margin-top="40" margin-bottom="40" />
    <custom-tabbar :currentIndex="0" />
  </view>
</template>

<script>
import { queryUser, getProgressRepairJobs } from "@/services/index";
import tablist from "./type";
import listMixin from "@/mixin/listMixin";

export default {
  mixins: [listMixin],
  onLoad() {
    const _token = uni.getStorageSync("token");
    if (!_token) {
      uni.reLaunch({ url: `/pages/login/login` });
      return false;
    } else {
      queryUser().then((res) => {
        if (res) {
          this.$u.vuex("vuex_user", res);
        }
      });
    }
  },
  data() {
    return {
      current: 0,

      list: [],
      type: "",
    };
  },
  methods: {
    change(index) {
      this.currentPage = 1;
      this.current = index;
      this.type = this.tablist[index].type;
      this.onFetchData();
    },
    async onFetchData() {
      const params = {
        currentPage: this.currentPage,
        pageSize: 10,
        type: this.tabType,
      };
      if (this.currentPage === 1) uni.showLoading();
      this.fetchStatus = "loading";
      getProgressRepairJobs(params)
        .then((res) => {
          const { list, isLastPage } = res;
          if (this.currentPage === 1) this.list = list || [];
          else this.list = this.list.concat(list);
          this.hasMore = !isLastPage;
          if (isLastPage) this.fetchStatus = "nomore";
          else this.fetchStatus = "loadmore";
        })
        .catch((error) => {
          this.fetchStatus = "loadmore";
        })
        .finally(() => {
          uni.stopPullDownRefresh();
          if (this.currentPage === 1) uni.hideLoading();
        });
    },
  },
  computed: {
    tabType() {
      if (this.type) return this.type;
      return this.tablist.length ? this.tablist[0].type : "";
    },
    tablist() {
      const identity = this.vuex_user.role;
      let list = [];
      if (identity) {
        list = tablist[`${identity}TabList`];
        if (!list || list.length === 0) list = tablist.TabList;
      }
      return list;
    },
    headerStyle() {
      // #ifdef H5
      if (!this.isWeChat()) {
        return {
          top: "40px",
        };
      }
      // #endif
      return {};
    },
  },
};
</script>

<style lang="scss">
.real-header {
  height: 40px;
}
.fix-header {
  z-index: 2;
  position: fixed;
  top: -1px;
  left: 0px;
  right: 0px;
}
</style>
