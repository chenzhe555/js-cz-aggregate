export default class StorageManager {
    /*************************************** localStorage */
    /**
     * 存储数据
     * @param {String} key 存储的键
     * @param {String} value 存储的值
     * @param {Int} expire 有效时间
     */
    // eslint-disable-next-line no-unused-vars
    static save(key, value, expire = 0) {
        localStorage.setItem(key, value);
    }

    /**
     * 获取存储的数据
     * @param {String} key 存储的键
     */
    static get(key = '') {
        return localStorage.getItem(key);
    }

    /**
     * 移除存储的数据
     * @param {String} key 存储的键
     */
    static remove(key = '') {
        localStorage.removeItem(key);
    }

    /**
     * 清除所有数据
     */
    static clearAll() {
        localStorage.clear();
    }
}