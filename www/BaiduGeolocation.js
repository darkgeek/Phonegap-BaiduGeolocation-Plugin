window.BaiduGeolocation = {
    getCurrentPosition: function(success, error) {
        cordova.exec(success, error, "BaiduGeolocation", "getCurrentPosition",[]);
    },
}

module.exports = BaiduGeolocation;
