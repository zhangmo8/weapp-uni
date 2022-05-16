<script>
export default {
  onLoad() {
    // #ifdef H5
    setTimeout(() => {
      if (this.isWeChat()) {
        const navTitle = document.querySelector("uni-page-head");
        if (navTitle) {
          navTitle.style.display = "none";
        }
      } else {
        const uniPageBody = document.querySelector("uni-page-body");
        if (uniPageBody) {
          uniPageBody.style.minHeight =
            "calc(100vh -44px - env(safe-area-inset-top))";
        }
        const basePage = document.querySelector(".base-page");
        const lightPage = document.querySelector(".light-page");
        if (basePage) {
          basePage.style.minHeight =
            "calc(100vh - 44px - env(safe-area-inset-top))";
        }
        if (lightPage) {
          lightPage.style.minHeight =
            "calc(100vh - 44px - env(safe-area-inset-top))";
        }
      }
    }, 100);

    // #endif
  },
  methods: {
    isWeChat() {
      let ua = window.navigator.userAgent.toLowerCase();
      return ua.match(/MicroMessenger/i) == "micromessenger"; // 判定为true则是微信浏览器，false则不是
    },
  },
};
</script>

<style></style>
