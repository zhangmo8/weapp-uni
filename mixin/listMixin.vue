<script>
export default {
  data() {
    return {
      currentPage: 1,
      hasMore: true,
      fetchStatus: "loadmore",
    };
  },
  onLoad() {},
  methods: {},
  onShow() {
    this.currentPage = 1;
    this.onFetchData();
  },
  onPullDownRefresh() {
    this.fetchStatus = "loadmore";
    this.currentPage = 1;
    this.onFetchData();
  },
  onReachBottom() {
    if (this.fetchStatus === "loadmore" && this.hasMore) {
      this.fetchStatus = "loading";
      this.currentPage += 1;
      this.onFetchData();
    }
  },
};
</script>

<style></style>
