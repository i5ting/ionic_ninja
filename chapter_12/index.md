# 在ionicframework或者phonegap（cordova）里如何在页面里获取设备是iPhone还是iPad

## 在index.js里

```
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        alert(platform);
```

## 修改oc代码

### 方式1

```
#define IS_IPAD (UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiomPad) 

- (void)webViewDidFinishLoad:(UIWebView*)theWebView
{
    // Black base color for background matches the native apps
    theWebView.backgroundColor = [UIColor blackColor];

    NSString *os = (IS_IPAD == YES) ? @"ipad":@"iPhone";
    NSString *js = [NSString stringWithFormat:@"window.platform='%@'",os];
    [theWebView stringByEvaluatingJavaScriptFromString:js];
    
    return [super webViewDidFinishLoad:theWebView];
}
```

### 方式2：变态精简版

```
	- (void)webViewDidFinishLoad:(UIWebView*)theWebView
	{
	    // Black base color for background matches the native apps
	    theWebView.backgroundColor = [UIColor blackColor];
    
	    [theWebView stringByEvaluatingJavaScriptFromString:[NSString stringWithFormat:@"window.platform='%@'",((UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiomPad)  == YES) ? @"ipad":@"iPhone"]];
    
	    return [super webViewDidFinishLoad:theWebView];
	}
```
				


有人说可以使用可以ionic.Platform

see

http://ionicframework.com/docs/api/utility/ionic.Platform/

但是在app.config() 这个地方是最先执行的，在device ready状态之前，所以是没法渠道ionic.Platform的，不信你试试


```
var app = angular.module('starter', ['ionic', 'starter.controllers','clock.no320.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.hide();
    }
  });
})

.service('magicNumberService', MyService)

.config(function($stateProvider, $urlRouterProvider) {
    // 此处执行的早，无法渠道$ionicPlatform

})

```


## 缓存

缓存有2种方法，

1. 是原始写插件提供方法，适合大量数据
1. 是使用webSQL，数量小于5M的时候比较合适

附赠一个tip，使用webSQL来保存数据

```
	//open database
	var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024); 

	db.transaction(function (tx) {            
		tx.executeSql('CREATE TABLE IF NOT EXISTS last_word (id INTEGER PRIMARY KEY AUTOINCREMENT, content Text,date string)');
	});
	




//open database
var db = openDatabase('db_ichat', '1.0', 'DB of im', 2 * 1024 * 1024); 

db.transaction(function (tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT,name string, avatar string,address string)');
});

/** Select Row from Table **/ 
function selectRow(query, callBack){ // <-- extra param
   var result = [];
   db.transaction(function (tx) {
      tx.executeSql(query, [], function(tx, rs){
         for(var i=0; i<rs.rows.length; i++) {
            var row = rs.rows.item(i)
            result[i] = { id: row['id'],
                          name: row['name']
            }
         }
         console.log(result);
         callBack(result); // <-- new bit here
      }, errorHandler);
   });
} 


selectRow("SELECT * FROM planets;", function(pleaseWork) {
     console.log(pleaseWork);
     // any further processing here
   });

```