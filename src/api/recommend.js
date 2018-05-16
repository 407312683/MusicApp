import jsonp from 'common/js/jsonp'
import {commonParams,options} from './config'
import axios from 'axios'

// 获取轮播
export function getRecommend() {
	const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
	const data = Object.assign({}, commonParams, {  //Object.assign() 浅拷贝、对象属性的合并
	    platform: 'h5',
	    uin: 0,
	    needNewCode: 1
  	})
	return jsonp(url, data, options)
}

// 获取歌单列表
export function getDiscList() {
	const url = '/api/getDiscList'
	const data = Object.assign({}, commonParams, {  //Object.assign() 浅拷贝、对象属性的合并
	    platform: 'yqq',
	    hostUin: 0,
	    sin: 0,
	    ein: 29,
	    sorId: 5,
	    needNewCode:0,
	    categoryId: 10000000,
	    rnd: Math.random(),
	    format: 'json'
  	})
	return axios.get(url,{
		params: data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}