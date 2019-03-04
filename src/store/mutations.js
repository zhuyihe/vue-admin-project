const mutations = {
    //保存token
    COMMIT_TOKEN(state, object) {
        state.access_token = object.data.access_token;
        state.role_id = object.data.role_id
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