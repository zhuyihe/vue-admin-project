<template>
    <div class="permission">
        <span>你选择的用户是：</span>
       <el-radio-group v-model="account" @change="changePer">
            <el-radio label="admin"></el-radio>
            <el-radio label="user"></el-radio>
        </el-radio-group>
        <div class="now">当前用户：["{{account}}"]</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            account:''
        }
    },
    mounted(){
        this.account=this.$store.getters.roles[0]
    },
    methods:{
        changePer(){
           this.$store.commit('COMMIT_ROLE',[this.account])
           this.$router.push('/pemission');
        }
    }
}
</script>
<style lang="scss" scoped>
.permission{
    padding: 40px;
    font-size: 16px;
    text-align:left;
    .now{
        line-height: 40px
    }
}
</style>

