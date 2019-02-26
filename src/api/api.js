import {get,post} from './request';
//登陆
export const login=(login)=>post('/v1/admin/cmn/admin/login',login)