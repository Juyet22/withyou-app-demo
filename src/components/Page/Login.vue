<template>
  <div class="normal-box login-box">
    <div class="login-title">
      <img src=""
           alt="">
      <p>XXXXX</p>

    </div>
    <div class="login-way">
      <a :class="{selected: loginWay == 'pwd'}"
         @click="loginWay = 'pwd'">服务密码登陆</a>
      <a :class="{selected: loginWay == 'msg'}"
         @click="loginWay = 'msg'">短信验证码登陆</a>
    </div>
    <section class="login-form"
             ref="loginForm">
      <div class="login-form-user login-form-row">
        <!-- <label for="">手机号</label> -->
        <input type="number"
               class="login-user login-input"
               placeholder="请输入手机号"
               v-model="phoneNumber"
               maxlength="20"
               @focus="alertShow = false">
      </div>
      <div class="login-form-alert"
           v-show="alertShow">
        <span class="login-alert">手机号不能为空</span>
      </div>
      <div v-if="loginWay == 'pwd'"
           class="login-form-pwd login-form-row">
        <!-- <label for="">密码</label> -->
        <input class="login-pwd login-input"
               placeholder="请输入服务密码"
               v-model="password"
               type="pass"
               @focus="alertShow2 = false">
        <span @click="forgetMsg">忘记密码？</span>
      </div>

      <div v-if="loginWay == 'msg'"
           class="login-form-verify login-form-row">
        <!-- <label for="">验证码</label> -->
        <input class="login-verify login-input"
               placeholder="请输入验证码"
               v-model="code"
               maxlength="6"
               @focus="alertShow2 = false">
        <button class="login-verify-btn"
                @click="getCode()"
                :disabled="getCodeBtnDisable">
          {{codeBtnWord}}
        </button>
      </div>

      <div class="login-form-alert"
           v-show="alertShow2">
        <span class="login-alert">{{alertText}}</span>
      </div>

      <div class="login-form-remember login-form-row">
        <input type="checkbox"
               class="login-submit"
               name="remember"
               v-model="remember">
        <label for="remember">记住我</label>
      </div>
      <div class="login-form-btn ">
        <button @click="loginSubmit"
                class="login-submit">登录</button>
      </div>
    </section>
  </div>
</template>

<script>
import { userLogin, sendCode } from "components/api/api";
export default {
  name: "",
  data () {
    return {
      loginWay: 'msg',
      phoneNumber: '',
      verificationCode: '',
      password: '',
      code: '',
      remember: false,
      alertShow: false,
      alertShow2: false,
      codeBtnWord: '获取验证码', // 获取验证码按钮文字
      waitTime: 61, // 获取验证码按钮失效时间
    }
  },
  components: {

  },
  computed: {
    // 校验手机号码格式
    phoneNumberStyle () {
      let reg = /^1[3456789]\d{9}$/
      if (!reg.test(this.phoneNumber)) {
        return false
      }
      return true
    },
    // 控制获取验证码按钮是否可点击
    getCodeBtnDisable: {
      get () {
        if (this.waitTime == 61) {
          if (this.phoneNumber) {
            return false
          }
          return true
        }
        return true
      },
      // 注意：因为计算属性本身没有set方法，不支持在方法中进行修改，所以需要手动添加
      set () { }
    },
    alertText () {
      return this.loginWay == 'msg' ? '请获取验证码' : '密码不能为空';
    }
  },
  methods: {
    forgetMsg () {
      this.$message({
        message: '请咨询xxxx获取或重置密码',
        type: 'message',
        center: true
      })
    },
    getCode () {
      console.log(this.phoneNumber);
      if (this.phoneNumber == '') this.alertShow = true
      if (this.phoneNumberStyle) {
        let params = {}
        params.phone = this.phoneNumber
        // 调用获取短信验证码接口
        sendCode().then(res => {
          let data = res.data;
          if (data.code == 200) {
            this.$message({
              message: '验证码已发送，请查收',
              type: 'success',
              center: true
            })
          }
        })
        // axios.post('/sendMessage', params).then(res => {
        //   res = res.data
        //   if (res.status == 200) {
        //     this.$message({
        //       message: '验证码已发送，请稍候...',
        //       type: 'success',
        //       center: true
        //     })
        //   }
        // })
        // 定时器
        let _this = this
        _this.waitTime--
        _this.getCodeBtnDisable = true
        this.codeBtnWord = `${this.waitTime}s 后重新获取`
        let timer = setInterval(function () {
          if (_this.waitTime > 1) {
            _this.waitTime--
            _this.codeBtnWord = `${_this.waitTime}s 后重新获取`
          } else {
            clearInterval(timer)
            _this.codeBtnWord = '获取验证码'
            _this.getCodeBtnDisable = false
            _this.waitTime = 61
          }
        }, 1000)

      } else {
        this.$message({
          message: '请输入正确的手机号',
          type: 'error',
          center: true
        })

      }
    },
    loginSubmit () {
      let pnum = this.phoneNumber;
      let pwd = this.password;
      let vcode = this.code;
      let rem = this.remember;
      let loginway = this.loginWay || 'pwd';
      let vf = loginway == 'pwd' ? pwd : vcode;
      console.log(this.remember, loginway, pnum, vf);

      if (
        !pnum || !vf
        // pwd == "" ||
        // pwd == null ||
        // pnum == null ||
        // pnum == undefined ||
        // pwd == undefined
      ) {
        if (!pnum) this.alertShow = true
        if (!vf) this.alertShow2 = true;
        // this.$notify({
        //   title: "提示",
        //   message: "手机号或密码不能为空",
        //   type: "warning",
        //   center: true
        // });
      } else {
        if (this.phoneNumberStyle) {
          userLogin(pnum, pwd, vcode, rem).then(
            res => {
              let loginData = res.data;
              console.log(loginData);

              if (loginData.code == 200) {
                let that = this;
                localStorage.setItem('token', loginData.token);
                localStorage.setItem('userId', loginData.token);
                this.$router.push({
                  path: "/",
                  query: {
                    userId: loginData.data.user.userId
                  }
                });
              } else if (loginData.code == 300) {

              } else {

              }
            }
          )



        } else {
          this.$notify({
            title: "提示",
            message: "请输入正确的手机号码",
            type: "warning"
          });
        }
      }

    }
  },
  mounted () {
    this.$store.dispatch('GET_HEADERTYPE', {
      headerType: 'HeaderTitle',
      headerShow: true
    })
  },
  created () {

    // enter 提交
    var lett = this;
    document.onkeydown = function (evt) {
      console.log(localStorage);
      evt = evt ? evt : window.event ? window.event : "";
      var keyCode = evt.keyCode
        ? evt.keyCode
        : evt.which
          ? evt.which
          : evt.charCode;
      if (keyCode == 13) {
        lett.loginSubmit();
      }
    };
  },
  directives: {
    rules: {

    }
  }
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
  .login-way {
    display: flex;
    justify-content: space-around;
    margin-top: 35px;
    font-size: 32px;

    a {
      color: #cccccc;

      &.selected {
        color: blue;
      }
    }
  }
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    &-alert {
      display: flex;
      width: 93%;
      margin-top: 5px;
      font-size: 0.9em;
      color: #d83131;
      align-items: stretch;
    }

    &-row {
      display: flex;
      align-items: stretch;
      width: 93%;
      height: 65px;
      margin-top: 15px;
      padding-bottom: 5px;
      border-bottom: #cccccc 2px solid;
      position: relative;

      .login-input {
        flex: 1;
        font-size: 1em;
      }

      label {
        display: inline-block;
        line-height: 55px;
      }
      span {
        font-size: 0.9em;
        line-height: 55px;
        color: blue;
      }
    }
    &-remember {
      align-items: center;
      border-bottom: none;

      input[type="checkbox"] {
        margin: 0 16px 0 6px;
        width: 26px;
        height: 26px;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        line-height: 26px;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          background: #fff;
          width: 100%;
          height: 100%;
          border: 1px solid #d9d9d9;
        }
        &:checked::before {
          content: "\2713";
          background-color: #fff;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          border: 1px solid #1d3bc4;
          color: #1d3bc4;
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
    &-btn {
      width: 95%;
      margin: 25px auto;

      button {
        font-size: 32px;
        letter-spacing: 2px;
        color: #ffffff;
        width: 100%;
        height: 58px;
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
        width: 36%;
        background: rgb(98, 194, 233);
        border-radius: 5px;

        &:disabled {
          background-color: #eeeeee;
          color: #cccccc;
        }
      }
    }
  }
}
</style>
