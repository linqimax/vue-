<template>
  <div class="home">
    <el-button type="primary" @click="quit">退出登录</el-button>

    <div class="swiper ">
      <Swiper :key="list.length"  ref="mayswiper">
        <div class="swiper-slide" v-for="item in list" :key="item.filmId">
          <img :src="item.poster" />
        </div>
      </Swiper>
    </div>
<div :class="isFixed ? 'fixed':''">
    <nav >
      <router-link to="/home/one" router-link-active>正在热映</router-link>
      <router-link to="/home/two" router-link-active>即将上映</router-link>
    </nav>
    </div>
    <router-view></router-view>
   
  </div>
</template>

<script>
import axios from "axios";
import Swiper from "../components/Swiper";
import {Button} from "element-ui"

export default {
  name: "Home",
  components: {
    Swiper
  },
  data() {
    return {
      list: [],
      isFixed:false,
    };
  },
  mounted() {
    axios({
      url:
        "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=7988764",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1583459669489626272219"}',
             "X-Host": " mall.film-ticket.film.list"
      }
    }).then(res => {
      // console.log(res.data.data.films);
      this.list = res.data.data.films;
      // console.log(this.list, 1111111111111);
    });
      window.onscroll = this.handleScroll;
  },
  beforeDestroy(){
        window.onscroll = null
  },
  methods:{
    handleScroll(){
      // console.log(document.documentElement.scrollTop,this.$refs.mayswiper.$el.offsetHeight)
      if(document.documentElement.scrollTop>this.$refs.mayswiper.$el.offsetHeight){
             this.isFixed=true
      }else{
        this.isFixed=false
      }
    },
    quit(){
      window.sessionStorage.clear()
      this.$router.push("/about")
    }
  }
};
</script>
<style scoped>
.swiper {
  text-align: center;
  border: 1px solid red;
}
.swiper-slide {
  height: 200px;
  width: 100%vw;
}
.swiper-pagination {
  --swiper-pagination-color: red;
  /*改变选中的颜色*/
}
nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.router-link-active {
  background: red;
}
.homea {
  background: red;
}

.fixed{
  position: fixed;
  top: 0;
  left:0;
  width: 100%;
  background: white;

}

</style>
