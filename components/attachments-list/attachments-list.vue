<template>
  <view class="flex">
    <view
      @click="preview(i)"
      class="attachment-info"
      v-for="(item, i) in list || []"
      :key="item.id"
    >
      <u-image
        border-radius="20"
        width="160rpx"
        height="160rpx"
        :src="config.apiUrl + '/datafile/download?dataFileId=' + item.id"
      >
        <u-loading slot="loading"></u-loading>
      </u-image>
    </view>
  </view>
</template>

<script>
import config from "@/config";

export default {
  data() {
    return {
      config,
    };
  },
  computed: {
    imgList() {
      if (this.list && this.list.length) {
        return this.list.map(
          (item) =>
            this.config.apiUrl + "/datafile/download?dataFileId=" + item.id
        );
      }
      return [];
    },
  },
  methods: {
    preview(current) {
      uni.previewImage({
        urls: this.imgList,
        current
      });
    },
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.attachment-info + .attachment-info {
  margin-left: 20rpx;
}
</style>