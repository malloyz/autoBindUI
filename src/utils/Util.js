/**
 * Created by malloyzhu on 2015/5/19.
 */

var Util = {
    /**
     * 是否是字符串
     * @param str
     * @returns {boolean}
     */
    isBlankString: function (str) {
        return (!str || /^\s*$/.test(str));
    },

    /**
     * 是否是指定字符串结尾
     * @param str
     * @param suffix
     * @returns {boolean}
     */
    endsWithString: function (str, suffix) {
        if (!Util.isBlankString(str)) {
            return str.match(suffix + "$") == suffix;
        } else {
            return false;
        }
    },

    /**
     * 是否是指定字符串开头
     * @param str
     * @param prefix
     * @returns {boolean}
     */
    startsWithString: function (str, prefix) {
        if (!Util.isBlankString(str)) {
            return str.indexOf(prefix) === 0;
        } else {
            return false;
        }
    },

    /**
     * 将第一个字母转换成大写
     * @param word
     * @returns {string}
     */
    upperFirstLetter: function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1);
    },

    isArray: function (object) {
        return Object.prototype.toString.call(object) === '[object Array]';
    },

    isObject: function (object) {
        return ((typeof object) === "object");
    }
};

