<template>
  <div>
    <ul class="mens">
      <li v-for="(item,index) in women" :key="index">
        <img :src="item.pic" alt />
        <p>{{ item.title }}</p>
        <p>
          ￥{{ item.price }}
          <van-icon name="cart" is-link @click="showPopup" />
        </p>
      </li>
    </ul>


    <!-- loading -->
    <div class="loading" v-if="Loading">
      <img src="http://static.oschina.net/uploads/space/2015/0724/100832_XWND_2392582.gif" alt />
    </div>

    <!-- 弹出层 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '60%' }">
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://www.louisvuitton.cn/images/https://www.louisvuitton.cn/images/FGST05FED527_PM2_Front%20view?wid=456&hei=456"
      />

      <van-notice-bar scrollable text="精品库存火热预售中" />

      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button color="#be99ff" type="warning" @click="OK" text="加入购物车" />
        <van-goods-action-button color="#7232dd" type="danger" text="立即购买" />
      </van-goods-action>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      women: [],
      Loading: false,
      show: false
    };
  },

  async created() {
    const { data } = await this.axios.get("./static/nv.json");
    this.women = data.result;
    console.log(this.women);
  },
  methods: {
    showPopup() {
      this.show = true;
      // this.Loading = true;
    },
    OK() {
      // this.Loading = false;
      this.show = false;
      this.$toast.success({
        message: "加入购物车成功"
      });
    }
  }
};
</script>
<style lang="less">
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);
  img {
    width: 0.4rem;
    height: 0.4rem;
  }
}
.mens {
  width: 4rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  li {
    width: 1.9rem;
    height: 2.62rem;
    border-radius: 0.04rem 0.04rem 0rem 0rem;
    background-color: #fff;
    margin-bottom: 0.08rem;
    img {
      width: 1.9rem;
      height: 2rem;
      border-radius: 0.04rem 0.04rem 0rem 0rem;
    }
    p:nth-of-type(1) {
      font-size: 0.12rem;
      font-weight: bold;
      overflow: hidden;
      padding: 0rem 0.04rem 0rem 0.04rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-top: 0.1rem;
    }
    p:nth-of-type(2) {
      font-size: 0.12rem;
      margin-top: 0.1rem;
      color: #ccc;
      justify-content: space-between;
      display: flex;
      padding: 0rem 0.04rem 0rem 0.04rem;
    }
  }
}
</style>