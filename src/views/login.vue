<template>
  <div class="login-container">
    <div class="login-form">
      <h3>后台管理系统</h3>
      <el-form
        :model="ruleForm2"
        status-icon
        :rules="rules2"
        ref="ruleForm2"
        label-width="100px"
        class="login-ruleForm"
      >
       <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm2.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm2.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import {login} from '../api/api.js'
import {messages} from '../assets/js/common.js'
export default {
  name: "login",
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validateName=(rule, value, callback)=>{
          if (value === '') {
          callback(new Error('请输入用户名'));
        }else{
            callback()
        }
      }
      return {
        ruleForm2: {
          password: '',
          username: ''
        },
        rules2: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          username: [
            { validator: validateName, trigger: 'blur' }
          ]
        }
      };
  },
  methods:{
      submitForm(formName){
          this.$refs[formName].validate((valid)=>{
              if(valid){
                  console.log(this.ruleForm2)
                  login(this.ruleForm2).then(res=>{
                    //提交数据到vuex
                      this.$store.commit('COMMIT_TOKEN',res)
                      this.$router.push({
                        path:'/'
                      })
                  }).catch(err=>{
                    console.log(err)
                  })
              }else{
                return false;
              }
          })
      },
      resetForm(formName){
          this.$refs[formName].resetFields();
      }
  }
};
</script>
<style lang="scss" scoped>
.login-container {
  background: #2d3a4b;
  width: 100%;
  height: 100%;
  position: fixed;
  .login-form {
    color: white;
    width: 500px;
    position: absolute;
    left: 45%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
}
</style>

