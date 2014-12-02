Phonegap-BaiduGeolocation-Plugin
================================

一个Cordova/Phonegap地理位置定位插件，采用百度定位SDK 4.2 版。

本插件的代码主要来自于 [andybuit](https://github.com/andybuit/phonegap-baidu-location) 和 [DoubleSpout](https://github.com/DoubleSpout/phonegap_baidu_sdk_location) 的贡献代码，非常感谢！

由于 DoubleSpout 的插件基于百度地图定位SDK 4.0 版，而新版本是4.2，因此本插件更新了SDK的版本，并对Java端的JS端做了相应的修改。亲测可以在cordova 4.1.2上运行。

## 安装方法

    cordova plugin add https://github.com/darkgeek/Phonegap-BaiduGeolocation-Plugin.git

## 使用方法

JS端的调用接口与W3C规定的[Geolocation接口](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation)基本一致。不过，本插件目前暂不支持geolocation_option。

    window.BaiduGeolocation.getCurrentPosition(successCallback, errorCallback);

其中successCallback和errorCallback分别为成功取得位置数据和获取失败的回调函数。    
