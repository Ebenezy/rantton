import axios from 'axios'

const ApiService = {
    baseUrl: '',
    init(baseURL) {
        ApiService.baseUrl = baseURL;
        axios.defaults.baseURL = baseURL;
    },
    getBaseUrl() {
        return ApiService.baseUrl;
    },
    setHeader(token) {
        axios.defaults.headers.common["Authorization"] ="Bearer "+token;
    },
    removeHeader() {
        axios.defaults.headers.common = {}
    },

    get(resource) {
        return axios.get(resource)
    },

    post(resource, data) {
        return axios.post(resource, data)
    },

    put(resource, data) {
        return axios.put(resource, data)
    },

    delete(resource) {
        return axios.delete(resource)
    },

    /**
     * Perform a custom Axios request.
     *
     * data is an object containing the following properties:
     *  - method
     *  - url
     *  - data ... request payload
     *  - auth (optional)
     *    - username
     *    - password
     **/
    customRequest(data) {
        return axios(data)
    }
};

export {ApiService};