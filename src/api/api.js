import {get,post} from './request';
//登陆
export const  login= (login)=>post('/api/post/user/login',login)
//上传
export const  upload=(upload)=>get('/api/get/upload',upload)