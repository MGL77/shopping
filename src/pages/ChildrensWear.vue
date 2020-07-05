<template>
  <div>
    <ul class="mens">
      <li v-for="(item,index) in women" :key="index">
        <img :src="item.pic" alt />
        <p>{{ item.title }}</p>
        <p>
          ￥{{ item.price }}
          <van-icon name="cart" />
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      women: []
    };
  },
  async created() {
    const { data } = await this.axios.get("./static/tz.json");
    this.women = data.result;
    console.log(this.women);
  }
};
</script>
<style lang="less">
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