<template>
  <u-upload
    :action="config.apiUrl + '/datafile/upload'"
    :file-list="fileList"
    :max-count="maxCount"
    :custom-btn="true"
    @on-success="onSuccess"
    @on-remove="onRemove"
  >
    <view
      slot="addBtn"
      class="slot-btn flex flex-center flex-col"
      hover-class="slot-btn__hover"
      hover-stay-time="150"
    >
      <u-icon name="photo" size="60" :color="$u.color['lightColor']"></u-icon>
      <text style="font-size: 10px">拍照</text>
    </view>
  </u-upload>
</template>
<script>
import config from "@/config";
export default {
  data() {
    return {
      config,
      files: [],
      dataFileIds: [],
    };
  },
  methods: {
    onSuccess(data, index, lists, name) {
      const dataFileIds = lists.map((item) => item.response.id);
      this.$emit("change", dataFileIds, lists);
    },
    onRemove(index, lists, name) {
      const dataFileIds = lists.map((item) => item.response.id);
      this.$emit("change", dataFileIds, lists);
    },
  },
  props: {
    maxCount: { type: Number, default: 1 },
    fileList: { type: Array, default: () => [] },
  },
};
</script>
<style lang="scss" scoped>
.slot-btn {
  width: 100px;
  height: 100px;
  background: $white-color;
  border-radius: 10rpx;
  border: 8rpx dotted #eee;
}

.slot-btn__hover {
  background-color: rgb(235, 236, 238);
}
</style>
