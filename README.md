Phonegap-BaiduGeolocation-Plugin
================================

一个Cordova/Phonegap地理位置定位插件，采用百度定位SDK 4.2 版。

本插件的代码主要来自于 [andybuit](https://github.com/andybuit/phonegap-baidu-location) 和 [DoubleSpout](https://github.com/DoubleSpout/phonegap_baidu_sdk_location) 的贡献代码，非常感谢！

由于 DoubleSpout 的插件基于百度地图定位SDK 4.0 版，而新版本是4.2，因此本插件更新了SDK的版本，并对Java端的JS端做了相应的修改。亲测可以在cordova 4.1.2上运行。

## 安装方法

    cordova plugin add https://github.com/darkgeek/Phonegap-BaiduGeolocation-Plugin.git

## 使用方法

1. 配置`plugin.xml`文件，修改[ak密钥](http://lbsyun.baidu.com/apiconsole/key?application=key)为您自己的密钥值：

    <config-file target="AndroidManifest.xml" parent="/manifest/application">
        <meta-data android:name="com.baidu.lbsapi.API_KEY" android:value="您的密钥" />
    </config-file>

2. 接下来，您可以通过JavaScript调用`getCurrentPosition`方法来获取经纬度信息：
 
    window.BaiduGeolocation.getCurrentPosition(successCallback, errorCallback);

其中，`successCallback`是在成功获取经纬度后触发的回调方法，该方法使用一个包含位置信息的对象作为输入参数；`errorCallback`是在获取失败后触发的回调方法，其参数为一个包含错误信息的对象。

## 使用举例

    var onSuccess = function(position) {
        console.log("Get location: " + position.coords.latitude + "," + position.coords.longitude);
    };

    var onError = function(err) {
        console.error("Failed to get location: " + err.message);
    };

    window.BaiduGeolocation.getCurrentPosition(onSuccess, onError);

## 百度地图API使用条款

详见[使用条款](http://developer.baidu.com/map/index.php?title=open/law)。
