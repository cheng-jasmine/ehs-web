<template>
  <div class="login">
    <div class="form">
      <header class="header fontColor">大治有色控股集团有限公司</header>
      <p class="title">
        欢迎使用<span class="fontColor">EHS云端管理系统</span>
      </p>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="loginId">
          <el-input
            type="text"
            v-model="ruleForm.loginId"
            autocomplete="off"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-checkbox v-model="checked">记住密码</el-checkbox>
      <div class="submit" @click="submitForm('ruleForm')">提交</div>
      <div class="footer">
        <div class="register">
          没有账号？<span class="fontColor">去注册</span>
        </div>
        <div class="forget fontColor">忘记密码？</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        loginId: "",
        password: "",
      },
      rules: {
        loginId: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      checked: false,
    };
  },
  methods: {
    submitForm() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          // 验证正确
          console.log(this.ruleForm);
          this.$router.push("/index");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleRadioClick() {
      console.log(this.radio);
      this.radio = this.radio ? this.radio : 0;
    },
  },
};
</script>

<style lang="less" scoped>
@font-color: rgb(58, 58, 217);
.fontColor {
  color: @font-color;
}
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  border: 1px solid;
  width: 20vw;
  padding: 40px;
  text-align: center;
  .header {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
  }
  .title {
    margin-bottom: 30px;
  }
}
.el-checkbox {
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
}
.submit {
  width: 100%;
  color: #fff;
  background: @font-color;
  border-radius: 8px;
  padding: 9px 0;
  cursor: pointer;
  margin-bottom: 20px;
}
.submit:hover {
  background: rgb(97, 97, 207);
}

.footer {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  > div {
    cursor: pointer;
  }
}
</style>