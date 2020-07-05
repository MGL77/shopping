<template>
  <div>
    <img src="../assets/v.png" alt />

    <van-search shape="round" background="#4fc08d" placeholder="请输入搜索关键词" @click="showPopup" />

    <van-popup v-model="show" position="top" :style="{ height: '100%' }">
      <van-icon name="arrow-left" @click="del" class="fan"/>

      <van-icon name="share" title="分享" @click="showShare = true" class="xiao" />
      <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />

      <van-search placeholder="请输入搜索关键词" />
    </van-popup>

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
import { Toast } from "vant";
export default {
  data() {
    return {
      iNow: 0,
      show: false,
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" }
      ]
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    del() {
      this.show = false;
    },
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    }
  }
};
</script>
<style lang="less">
.xiao {
  font-size: 0.25rem;
}
.fan {
  font-size: 0.25rem;
}
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