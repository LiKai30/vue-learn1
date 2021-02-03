/**
 * 跨层级组件通信
 * 通过创建一个空的vue实例，作为通信的媒介
 */
import Vue from 'vue';


const Bus =new Vue();

export default Bus;