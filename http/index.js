import axios from 'axios';

export default class HttpRequest {
    constructor() {
        // 请求唯一id
        this.rID = 0;
        // url地址异常返回的错误数据结构
        this.urlEmptyError = {
            'ret': 0,
            'error': {
                'code': 0,
                'msg': 'url为空'
            }
        };
    }

    /**
     * 请求单例
     */
    static getInstance() {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    }

    /**
     * POST请求
     * @param {string} url 请求地址
     * @param {object} data 请求数据
     * @param {object} header 请求头
     */
    async post(url = '', data = {}, headers = {}) {
        let result = null;
        if (url.length > 0) {
            try {
                // 发送请求
                result = await axios.post(url, data, {
                    headers: Object.assign({}, headers)
                });
            } catch {
                result = {};
            }
        }
        // 判断http状态码
        if (result.status === 200) {
            result = {
                ret: 1,
                data: result.data || {}
            };
        } else {
            result = {
                ret: 0,
                error: {
                    code: result.status || 0,
                    msg: '请求失败，请稍后重试'
                }
            };
        }
        return result;
    }
}