
const mutations = {
    //保存token
    COMMIT_TOKEN(state, object) {
        state.token = object.token;
    },
    //保存标签
    TAGES_LIST(state, arr) {
        state.tagsList = arr;
    },
    IS_COLLAPSE(state, bool) {
        state.isCollapse = bool;
    },
    //保存用户
    COMMIT_ROLE(state,roles){
        state.roles=roles
    },
    //保存路由
    COMMIT_ROUTERS(state,routers){
        state.addRouters=routers
    }
}
export default mutations