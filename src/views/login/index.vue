<template>
  <div class="login">
    <div class="leftbox">
      <div class="title">
        <img class="titleimg" src="../../assets/title-logo.png" alt />
        <span class="titlename">黑马面面</span>
        <span class="titleline"></span>
        <span class="titlelogin">用户登录</span>
      </div>
      <!-- 使用表单元素完成结构 -->
      <el-form :rules="rules" class="loginform" ref="form" :model="form" label-width="0px">
        <el-form-item>
          <el-input prefix-icon="el-icon-user" placeholder="请输入手机号" v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item prop="logincode">
          <!-- 使用栅格系统来添加内容 -->
          <el-row>
            <el-col :span="16" >
              <el-input prefix-icon="el-icon-key" placeholder="请输入验证码" v-model="form.logincode"></el-input>
            </el-col>
            <el-col :span="8">
              <img class="logincode" src="../../assets/login_captcha.png" alt />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item prop="isCheck" class="checkboxheight" >
          <el-checkbox  v-model="form.isCheck">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button class="loginbtn" type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="loginbtn" type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img src="../../assets/login_banner_ele.png" alt class="rightimg" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        //手机号
        phone: "",
        // 密码
        password: "",
        //验证码
        logincode: "",
        //是否阅读
        isCheck: []
      },
      rules: {
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 5, max: 10, message: "长度在5到10个字符", trigger: "blur" }
        ],
        logincode: [
          { required: true, message: "验证码不能为空", trigger: "blur" },
          { min: 4, max: 4, message: "验证码的长度应该为4", trigger: "blur" }
        ],
        isCheck:[
          { type:'array', required: true, message: "至少选择一个选项", trigger: "change"}
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid =>{
        if(valid){
          this.$message({
            message:'验证通过',
            type:'success'
          })
        }else{
          this.$message.error('验证不通过')
        }
      })
    }
  }
};
</script>

<style lang="less">
.login {
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  display: flex;
  justify-content: space-around;
  align-items: center;
  .leftbox {
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);
    padding: 48px 42px 86px;
    box-sizing: border-box;
    .title {
      display: flex;
      align-items: center;
      .titleimg {
        width: 22px;
        height: 17px;
      }
      .titlename {
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
        margin-left: 16px;
        margin-right: 14px;
      }
      .titleline {
        width: 1px;
        height: 28px;
        background: rgba(199, 199, 199, 1);
        margin-right: 12px;
      }
      .titlelogin {
        font-size: 22px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
    }
    .loginform {
      margin-top: 29px;
      .logincode {
        width: 100%;
        height: 40px;
      }
      .checkboxheight {
        .el-form-item__content {
          line-height: 20px;
        }
      }
      .loginbtn {
        width: 100%;
      }
    }
  }
  .rightimg {
    width: 633px;
    height: 435px;
  }
}
</style>