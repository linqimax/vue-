<template>
  <div>配置</div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    axios(
      {
        method: "post",
        url: "http://192.168.0.105:8088/api/user/login",
       headers :{'Content-Type': 'application/json', },
        data: {
          userName: "admin",
          passWord: "111111"
        }
      }).then(res => {
        console.log(res, "000000");
      })
  }

}
  
</script>

<style lang="scss" scoped>
</style>