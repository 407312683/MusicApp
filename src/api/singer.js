import jsonp from 'common/js/jsonp'
import {commonParams,options} from './config'

// 获取歌手
export function getSingerList() {
	const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
	const data = Object.assign({}, commonParams, {  //Object.assign() 浅拷贝、对象属性的合并
	    channel: 'singer',
		page: 'list',
		key: 'all_all_all',
		pagesize: 100,
		pagenum: 1,
		hostUin: 0,
		needNewCode: 0,
		platform: 'yqq',
		g_tk: 1969533960,
		format: 'jsonp'
  	})
	return jsonp(url, data, options)
}
