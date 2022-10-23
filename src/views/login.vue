<template>
  <div class="login_container">
    <div class="login_box">
      <!-- <div class="avatar_box"><img src="../assets/logo.svg" alt="" /></div> -->
      <el-form
        label-width="0px"
        class="login_form"
        :model="loginForm"
        :rules="loginFormRules"
        ref="loginFormRef"
      >
        <el-form-item prop="username">
          <el-input
            placeholder="用户名"
            v-model="loginForm.username"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="密码"
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
            type="password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
/* import AppVue from '../App.vue'; */
import router from '@/router';
export default {
  name: "Login",
  data() {
    return {
      //这里是登录表单的数据绑定对象
      loginForm: {
        username: "",
        password: "",
      },
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    async login() {
      /* const { data } = await axios.post("/api/authentication/login", {
        username: "test",
        password: "123456",
      });
      console.log(data); */
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return; //false 不执行登录
        //true执行登录
        const { data:res } = await axios.post("/api/bos/authentication/login", this.loginForm);
        console.log(res);
        if (res.success !== true) return alert("登录失败！");
        /* else {
            return alert("登录成功！");
            var token = res.data.token;
            window.localStorage.setItem("token", token);
            this.$router.push("/views/home.vue");
        } */
        window.localStorage.setItem("token", res.data.token);
        console.log(this.$router);
        this.$router.push({path: "/home"});
      });
      /* this.$axios({
        method: 'post',
        url: '/api/bos/authentication/login',
        data: this.loginForm
      }).then(res=>{
        this.$cookies.set("oatoken",res.data.data.token,'7d')
        this.$router.push('@/home')
      }).catch(error=>{
        console.log(error)
      }) */
    },
    /* login() {
      this.$http
        .post(" /api/bos/authentication/login ", {
          this.loginForm
        })
        .then((res) => {
          if (res.data.code == 200) {
            var token = res.data.token;
            window.localStorage.setItem("token", token);
            this.$router.push({ path: "@/home" });
          }
        });
    }, */
  },
  mounted() {
    this.login();
  },
};
</script>

<style scoped lang="less">
.login_container {
  //background-color: #50a7fd;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: white;
  //圆角效果
  border-radius: 3px;
  //绝对定位
  position: absolute;
  //以左上角为原点，故不处于中心位置
  left: 50%;
  top: 50%;
  //translate(-50%,-50%)作用是:往上(x轴),左(y轴)移动自身长宽的50%，以使其居于中心位置
  transform: translate(-50%, -50%);
  //less语法的嵌套
  .avatar_box {
    height: 130px;
    width: 130px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    //background-color: black;
    //头像居中，向左移动box的50%，再向右移动自身的-50%，向上移动该组件高度的-50%
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      height: 100%;
      width: 100%;
      border-radius: 50%; //图片变成圆形
      //background-color: #eee;
    }
  }
}
.login_form {
  position: absolute;
  bottom: 10px; //靠下
  width: 100%;
  padding: 0px 10px; //上下内边距0，左右内边距20px
  //border-box为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。
  //实际宽度会是width减去border + padding的计算值
  //此处是为了不让input超出我们的登录父div
  box-sizing: border-box;
}

.btn {
  display: flex; //flex布局
  //justify-content控制项目在横轴的对齐方式
  //flex-start即左对齐，center 为居中，对应的flex-end为右对齐。
  justify-content: flex-end;
}
</style>
