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
    }
}
export default mutations