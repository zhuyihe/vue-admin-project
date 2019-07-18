import {
    myRouter
} from '@/router/router'
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
    COMMIT_ROLE(state, roles) {
        state.roles = roles
    },
    GET_LANGUAGE(state,lang){
        state.lang=lang
    },
    SET_BREAD(state,breadList){
        state.breadList=breadList
    }
}
export default mutations