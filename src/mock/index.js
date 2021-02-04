/**
 * 模拟返回数据
 * 安装开发依赖
 * npm i mockjs -D
 */

import Mock from 'mockjs';
import {getUserInfo} from './response/user'

// getUserInfo拦截后的响应方法
Mock.mock('http://localhost:4000/getUserInfo', getUserInfo)

export default Mock;