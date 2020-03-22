<template>
  <div>
      <ul class="context" 
       v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        infinite-scroll-immediate-check="false"
         v-for="item in list" :key="item.id"
      >
      <!-- <router-link :to="'/detail/'+item.id"> -->
      <router-link :to="'/detail/'+item.id">
      
        <li>{{item.title}}{{item.id}}</li>
        </router-link>
      </ul>
      <p v-if="show">正在加载中.......</p>
      <p v-else>我是有底线的</p>
  </div>
</template>

<script>
import { Button, InfiniteScroll,MessageBox ,Indicator } from "mint-ui";
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      page:1,
      loading:false,
      show:true
    };
  },
  mounted() {
    axios.get("https://cnodejs.org/api/v1/topics?page=1&limit=10").then(res => {
      console.log(res.data.data,11111111);
      this.list = res.data.data;
      console.log(this.list.tab)
    });
  },
  methods:{
    loadMore() {
   console.log("到底了")
  this.loading = true;
  setTimeout(() => {
    if(this.list.length>40){
      return  MessageBox('提示', '数据没有了')  ,this.show=false;
    }
    this.page++;
    axios.get(`https://cnodejs.org/api/v1/topics?page=${this.page}&limit=10`).then(res => {
      this.list = [...this.list,...res.data.data];
    });

    this.loading = false;
  }, 1500);
  
}
  }

}
</script>

<style lang="scss" scoped>
.context {
  li {
    border-bottom: 1px solid black;
    padding: 10px;
  }
}

</style>