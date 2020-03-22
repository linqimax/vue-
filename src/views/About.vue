<template>
  <div class="denglu">
    <div class="boxcon">
      <h4>登录</h4>
      <el-form :model="loginFrom" :rules="rules"  ref="loginref">
        <!-- 账号 -->
        <el-form-item label="账号" label-width="80px" prop="userName">
          <el-input prefix-icon="el-icon-user-solid" v-model="loginFrom.userName"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" label-width="80px" prop="passWord">
          <el-input type="password" prefix-icon="el-icon-lock" v-model="loginFrom.passWord"></el-input>
        </el-form-item>
        <!-- button -->
        <el-form-item class="buts">
          <el-button type="primary" size="mini" @click="login">登录</el-button>
          <el-button type="success" size="mini" @click="chongzhi"> 重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { Form, FormItem, Input, Button, Icon,Message } from "element-ui";
import axios from 'axios';
export default {
  data() {
    return {
      loginFrom: {
        userName: "",
        passWord: ""
      },
      rules: {
        //添加校验规则
         userName: [
            { required: true, message: '请输入登录账号', trigger: 'blur' },
            { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
          ],
        passWord: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 4, max:10 , message: '长度在 4 到 10 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    chongzhi(){
      console.log(this)
      this.$refs.loginref.resetFields()
    },
    login(){
      this.$refs.loginref.validate( async valid=>{
        console.log(valid)
        if(!valid)   return ;
        const res  =  await axios.post("http://192.168.0.105:8088/api/user/login",this.loginFrom)
        console.log(res)
        if(res.data.success!==true)  return Message.error(res.data.msg)
        Message.success(res.data.msg)
        window.sessionStorage .setItem("token",res.data.data.userName)
        this.$router.push({path:'/'})
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.denglu {
  background-color: skyblue;
  height: 100%;
}
.boxcon {
  background: white;
  padding: 25px;
  width: 450px;
  height: 200px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
}
.buts {
  position: absolute;
  right: 60px;
}
</style>