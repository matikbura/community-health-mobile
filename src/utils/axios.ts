import axios, { AxiosResponse, AxiosRequestConfig, AxiosRequestHeaders } from 'axios'


// const userStore = useUserStore()

const service = axios.create({
  baseURL: '/api', // Set base url
  timeout: 10000 // Set timeout
})


// Request interceptors

service.interceptors.request.use(
  // @ts-ignore
  (config: AxiosRequestConfig) => {
    // Remove repeat request
    removePending(config)
    // Add pending
    addPending(config)
    // Request with token
    // config.headers = config.headers || {}
    // config.headers.token = userStore.token
    // config.headers.username = userStore.username
    // config.headers.roleText = encodeURIComponent(userStore.roleText!)
    // config.headers.loginId = userStore.id
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptors
service.interceptors.response.use(
  async (response: AxiosResponse) => {
    // Remove pending
    removePending(response.config)
    // token小于5分钟 刷新
    if (response.headers['token']) {
      // userStore.token = response.headers['token']
    }

    if (response.data.code !== 20000) {
      return Promise.reject(response.data)
    }

    // Only return data
    return response.data
  },
  (error) => {
    if (error.response.data.code === 40001) {
      // userStore.reset()
    }

    error.config && removePending(error.config)
    return Promise.reject(error)
  }
)

export default service


const pendingMap = new Map()

/**
 * Create a key for pendingMap
 * @param {*} config
 * @returns
 */
function getPendingKey(config: AxiosRequestConfig): {} {
  const { url, method, params, data } = config
  let _data = data
  if (typeof data === 'string') {
    _data = JSON.parse(data)
  }
  return [url, method, JSON.stringify(params), JSON.stringify(_data)].join('&')
}

/**
 * Save the cancel callback of each request
 * @param {*} config
 */
function addPending(config: AxiosRequestConfig): void {
  const pendingKey = getPendingKey(config)
  config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
    if (pendingMap.has(pendingKey)) {
      pendingMap.set(pendingKey, cancel)
    }
  })
}

/**
 * Delete repeat request
 * @param {*} config
 */
function removePending(config: AxiosRequestConfig): void {
  const pendingKey = getPendingKey(config)
  if (pendingMap.has(pendingKey)) {
    const cancelToken = pendingMap.get(pendingKey)
    cancelToken(pendingKey)
    pendingMap.delete(pendingKey)
  }
}
