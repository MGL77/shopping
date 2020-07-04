<template>
  <div id="app">
    <Header />
    <router-view />
    <p @click="backtop" class="p">
      <van-icon name="arrow-up" />
    </p>
    <p></p>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
export default {
  components: {
    Header
  },
  mounted() {
    window.addEventListener("scroll", this.showbtn, true);
  },
  methods: {
    showbtn() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
    },
    backtop() {
      var timer = setInterval(function() {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed;
        this.isTop = true;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 30);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: black;
}
img {
  display: block;
}
ul li {
  list-style: none;
}
body {
  background-color: #ccc;
}
.p {
  position: fixed;
  bottom: 0.3rem;
  font-size: 0.2rem;
  color: #ffff;
  right: 0;
  width: 0.4rem;
  height: 0.6rem;
  background-color: #000;
  opacity: 0.5;
  border-radius: 0.04rem;
  text-align: center;
  line-height: 0.6rem;
}
</style>
