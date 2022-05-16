import config from '../config'
class HttpUtil {
	constructor() {
		this._baseUrl = config.apiUrl;
		this._header = {};
	}

	request(url, data, header, method) {
		const _token = uni.getStorageSync('token');
		const _header = header;
		if (_token && !header['Authorization']) {
			header['Authorization'] = _token;
		}

		return new Promise((resolve, reject) => {
			uni.request({
				url: this._baseUrl + url,
				data: {
					...data,
					_t: new Date().getTime()
				},
				header: _header,
				method: method,
				success: (res => {
					if (res.statusCode === 200) {
						// 200: 服务端业务处理正常结束
						resolve(res.data)
					} else if (res.statusCode === 401) {
						uni.clearStorageSync("token");
						let {
							message = ''
						} = res.data || {};
						uni.showToast({
							title: message || '登录已过期！',
							icon: 'none'
						});
						uni.redirectTo({
							url: `/pages/login/login`
						})
						reject(res.data);
					} else {
						let {
							message
						} = res.data || {};
						if (message) {
							uni.showToast({
								title: message,
								icon: 'none'
							});
						}
						reject(res.data);
					}
				}),
				fail: (res => {
					const {
						message
					} = res.data || {};
					/// 先关闭所有的 提示
					uni.hideLoading();
					if (message) {
						uni.showToast({
							title: message,
							icon: 'none'
						});
					} else {
						uni.showToast({
							title: '未知错误！',
							icon: 'none'
						});
					}
					reject(false)
				})
			})
		})
	}

	get(url, data, header = this._header) {
		return this.request(url, data, {
			...this._header,
			...header
		}, 'GET')
	}

	delete(url, data, header = this._header) {
		return this.request(url, data, {
			...this._header,
			...header
		}, 'DELETE')
	}

	put(url, data, header = this._header) {
		return this.request(url, data, {
			...this._header,
			...header
		}, 'PUT')
	}

	post(url, data, header = this._header) {
		return this.request(url, data, {
			...this._header,
			...header
		}, 'POST')
	}
}

export default new HttpUtil();
