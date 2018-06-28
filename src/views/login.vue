<template>
  <div class="app-login">
      <section class="login-wrapper">
          <div class="login-content">
              <el-input placeholder="请输入用户名" class="phone-number" v-model="phoneNum"></el-input>
              <el-input placeholder="请输入密码" type="password" class="password-number" v-model="password" @keyup.enter.native="login"></el-input>
              <a class="submit" href="javascript:;" @click="login">登录</a>
          </div>
      </section>
  </div>
</template>

<script>
    export default {
        data(){
          return {
              phoneNum:"admin",
              password:"admin"
          }
        },
      methods: {
          login(){
              if(this.phoneNum && this.password){
                  this.$store.dispatch("login","tokenvalue" + Math.random(1000))
                    .then(() =>{
                      this.$router.push("/home");
                    })
              }
          }
      }
    }
</script>

<style scoped lang="scss">
@import "../assets/css/mixin.scss";
.app-login {
  width: 100%;
  height: 100%;
  background: #00a597;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrapper{
  width: 650px;
  height: 500px;
  margin-top: 5%;
}
 .login-content{
   height: 400px;
   background: #ffad66e0;
   border-radius: 10px;
   margin: 20px 95px 0;
 }
.phone-number{
  margin: 30px 0;
}
.submit {
  display: block;
  height: 45px;
  text-align: center;
  line-height: 45px;
  border-radius: 6px;
  background: $--color--primary;
  color: #fff;
  font-size: 16px;
  margin: 30px 0;
}
</style>
