<template>
  <div>
    <img src="../assets/v.png" alt />

    <van-search shape="round" background="#4fc08d" placeholder="请输入搜索关键词" />

    <div class="tab">
      <ul>
        <li>
          <router-link to="/Women">男装</router-link>
        </li>
        <li>
          <router-link to="/Mens">女装</router-link>
        </li>
        <li>
          <router-link to="/ChildrensWear">童装</router-link>
        </li>
        <li>
          <router-link to="/Infant">婴幼儿</router-link>
        </li>
        <li>
          <router-link to="/Movement">运动</router-link>
        </li>
        <li>
          <router-link to="/LimitedTimeOffer">限时特惠</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      iNow: 0
    };
  }
};
</script>
<style lang="less">
img {
  width: 4rem;
}
.tab {
  width: 4rem;
  height: 0.5rem;
  background-color: #fff;
  ul {
    width: 4rem;
    height: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      font-size: 0.12rem;
    }
  }
}
a:hover {
  display: inline-block;
  color: seagreen;
  border-bottom: 0.02rem solid seagreen;
  height: 0.2rem;
  line-height: 0.2rem;
}
</style>