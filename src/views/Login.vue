<template>
  <div class="login">
    <section>
      <div class="login-left">
        <el-form ref="loginForm" :model="loginParam" :rules="loginRules">
          <el-form-item class="logo-item">
            <img src="../assets/image/logo.png" />
            <span class="login-title">似花还似非花</span>
          </el-form-item>
          <el-form-item>
            <span class="slogan" />
          </el-form-item>
          <el-form-item prop="username">
            <el-input v-model="loginParam.username" type="text" placeholder="用户名" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginParam.password" type="password" placeholder="密码" />
          </el-form-item>
          <el-form-item class="login-helper">
            <div class="login-helper-item">
              <el-checkbox v-model="rememberMe">记住我</el-checkbox>
              <router-link to="">忘记密码？</router-link>
            </div>
          </el-form-item>
          <el-form-item class="login-tip">
            <span>未注册的用户登录时将自动注册</span>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="large" @click="handleLogin">{{ buttonText }}</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="login-right">
        <img src="../assets/image/cover.png" />
      </div>
      <div class="login-shadow" />
    </section>
  </div>
</template>

<script>
import { isValidPassword, isValidUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isValidUsername(value)) {
        callback(new Error('用户名长度在3到30之间！'))
      } else {
        callback()
      }
    }

    const validatePassword = (rule, value, callback) => {
      if (!isValidPassword(value)) {
        callback(new Error('用户名长度在3到30之间！'))
      } else {
        callback()
      }
    }

    return {
      loginParam: {
        username: '',
        password: ''
      },
      buttonText: '登录叶瓣',
      rememberMe: false,
      loginRules: {
        username: [{ trigger: 'blur', validator: validateUsername }],
        password: [{ trigger: 'blur', validator: validatePassword }]
      }
    }
  },

  methods: {
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.buttonText = '登录中...'
          this.$store.dispatch('user/login', this.loginParam).then(() => {
            this.$router.push({ path: '/' })
          }).catch((e) => {
            // this.$message.error(e)
          }).finally(() => {
            this.buttonText = '登录叶瓣'
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-size: 100% 100%;
    background: #fcfcfc url("../assets/image/login_bg.png");

    > section {
      display: flex;
      position: relative;
      width: 978.2555208333px;
      height: 550px;
      margin: auto;
      background-color: #FFFFFF;
      box-shadow: 0 3px 3px 0 #DDDDDD1A;

      .login-left {
        display: flex;
        flex-direction: column;
        width: 50%;
        padding: 62px 41px;
        z-index: 1;
        background-color: #FFFFFF;

        /*.ivu-form-item {*/
        /*  color: #7A7D77;*/
        /*  font-weight: 600;*/
        /*}*/

        .logo-item {
          display: flex;
          align-items: baseline;

          .login-title {
            font-size: 16px;
            font-weight: 400;
            color: #141d0e;
          }
        }

        .login-helper {
          margin-bottom: 0;

          .login-helper-item {
            display: flex;
            justify-content: space-between;
          }
        }

        .login-tip {
          display: flex;
        }
      }

      .login-right {
        width: 50%;
        height: 100%;
        z-index: 1;

        img {
          height: 100%;
        }
      }

      .login-shadow {
        position: absolute;
        bottom: -50px;
        height: 100px;
        width: 978px;
        background: url("../assets/image/login_shadow.png");
        background-size: 100% 100%;
      }
    }
  }
</style>
