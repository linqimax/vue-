<template>
  <div id="app">

    <div id="nav">
      <ul>
      <router-link tag="li" to="/home" active-class="one" >主页</router-link> 
      <router-link  tag="li" to="/about" active-class="one" >关于</router-link>
      <router-link  tag="li" to="/me" active-class="one" >我的</router-link>
      </ul>
 
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
// body{
//   padding-bottom: 31px;
// }
#app,body,html {
  width: 100%;
  height: 100%;


}
*{
margin: 0;
padding:0;
 }
  a {
    display:block;
    color: black;
    text-decoration: none;}

li{
  list-style: none;
}

#nav {
 border-top: 1px solid red;
 height: 31px;
  padding: 5px;
  width: 100%;
  position: fixed;
  left: 0;
 bottom: 0;
height: 20px;
background: white;
ul{
  display: flex;
  justify-content:space-around;
  li{
    text-align: center;
  }
}  
  }
  .one {
     background: pink;
      }

</style>
