<template>
  <div class="normal-box login-box">
    <div class="login-title">
      <img src="~static/image/qe-icon.jpg"
           alt="">
      <p>上海移动和你</p>

    </div>
    <form class="login-form"
          ref="loginform"
          :model="loginForm">
      <div class="login-form-user login-form-row">
        <!-- <label for="">手机号</label> -->
        <input class="login-user login-input"
               placeholder="请输入手机号"
               :model="loginForm.phoneNumber">
      </div>
      <div class="login-form-pwd login-form-row">
        <!-- <label for="">密码</label> -->
        <input class="login-pwd login-input">
      </div>

      <div class="login-form-verify login-form-row">
        <!-- <label for="">验证码</label> -->
        <input class="login-verify login-input">
        <button class="login-verify-btn"></button>
      </div>

      <div class="login-form-btn ">
        <button class="login-submit">登录</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "",
  data () {
    return {
      loginForm: {
        phoneNumber: '',
        verificationCode: '',
      },
      codeBtnWord: '获取验证码', // 获取验证码按钮文字
      waitTime: 61, // 获取验证码按钮失效时间
    }
  },
  components: {

  },
  computed: {
    // 用于校验手机号码格式是否正确
    phoneNumberStyle () {
      let reg = /^1[3456789]\d{9}$/
      if (!reg.test(this.loginForm.phoneNumber)) {
        return false
      }
      return true
    },
    // 控制获取验证码按钮是否可点击
    getCodeBtnDisable: {
      get () {
        if (this.waitTime == 61) {
          if (this.loginForm.phoneNumber) {
            return false
          }
          return true
        }
        return true
      },
      // 注意：因为计算属性本身没有set方法，不支持在方法中进行修改，所以需要手动添加
      set () { }
    }
  },
  methods: {
    getCode () {
      if (this.phoneNumberStyle) {
        let params = {}
        params.phone = this.loginForm.phoneNumber
        // 调用获取短信验证码接口
        axios.post('/sendMessage', params).then(res => {
          res = res.data
          if (res.status == 200) {
            this.$message({
              message: '验证码已发送，请稍候...',
              type: 'success',
              center: true
            })
          }
        })
        // 因为下面用到了定时器，需要保存this指向
        let that = this
        that.waitTime--
        that.getCodeBtnDisable = true
        this.codeBtnWord = `${this.waitTime}s 后重新获取`
        let timer = setInterval(function () {
          if (that.waitTime > 1) {
            that.waitTime--
            that.codeBtnWord = `${that.waitTime}s 后重新获取`
          } else {
            clearInterval(timer)
            that.codeBtnWord = '获取验证码'
            that.getCodeBtnDisable = false
            that.waitTime = 61
          }
        }, 1000)
      }
    }
  },
  mounted () {
    this.$store.dispatch('GET_HEADERTYPE', {
      headerType: 'HeaderTitle',
      headerShow: true
    })
  },
}
</script>

<style lang="scss" scoped>
.login-box {
  font-size: 30px;
  max-width: 780px;
  box-shadow: 0 0 15px #94a097c0;
  border-radius: 15px;
  padding: 36px;

  .login-title {
    display: flex;
    align-items: center;
    font-size: 1.4em;

    img {
      width: 120px;
    }
  }
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    &-row {
      display: flex;
      align-items: stretch;
      width: 93%;
      height: 65px;
      margin-top: 15px;
      padding-bottom: 5px;
      border-bottom: #cccccc 2px solid;

      .login-input {
        flex: 1;
        font-size: 1em;
      }
      label {
        display: inline-block;
        line-height: 55px;
      }
    }

    &-btn {
      width: 95%;
      margin: 25px auto;
      font-size: 1.2em;

      button {
        color: #ffffff;
        width: 100%;
        height: 45px;

        background: -webkit-linear-gradient(
          left,
          #000099,
          #2154fa
        ); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(
          right,
          #000099,
          #2154fa
        ); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(
          right,
          #000099,
          #2154fa
        ); /* Firefox 3.6 - 15 */
        background: linear-gradient(
          to right,
          #000099,
          #2154fa
        ); /* 标准的语法 */
        filter: brightness(1.4);
      }
    }

    &-verify {
      .login-verify-btn {
        width: 30%;
        background: rgb(98, 194, 233);

        &:disabled {
          background-color: #eeeeee;
          color: #cccccc;
        }
      }
    }
  }
}
</style>
