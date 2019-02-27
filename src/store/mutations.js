const mutations={
    COMMIT_TOKEN(state,object){
        state.access_token=object.data.access_token;
        state.role_id=object.data.role_id
    }
}
export default mutations