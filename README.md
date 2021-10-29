# Time handler

这是一款开源的时间管理工具，暂时不考虑加入太多功能，因为没有这个能力

## TODO-List： 

V1:

 - [ ] Login (account can only be created by administor)
 - [ ] DashBoard (copy Github Contribution)
 - [ ] Task List（不区分日期的任务，只区分todo，in-progress，done）
 - [ ] Task Editor
 - [ ] Calendar（需要区分日期的任务）
 - [ ] Setting: Notification API
 - [ ] Article Reading/Writing
 - [ ] File System
 - [ ] Spider For Wechat/Github/zhihu/juejin

// 获取天气的api
https://www.moji.com/mojiweather/forecast.php

//节气图片 可用于登录页面
https://www.zcool.com.cn/work/ZNTU5ODU0NzI=.html

https://www.zcool.com.cn/work/ZMjQzNjA4MDA=.html

https://huaban.com/boards/49658419/

## task:

darg.js 拖拽安排起来

## File System: 

可以使用gitee作为存储系统

https://gitee.com/lokep/static-bed/blob/master/video/1618797913361803.mp4

其中 /master/ 之后部分可以理解为oss的bucket，格式为 /date/md5(filename).[filetype]

## Article

（微信公众号，掘金，知乎）手动添加文章链接到时候，需要区分文章类型 WECHAT, JUE_JIN, ZHI_HU

爬虫不难，但是拿不到wechat接口爬，所以微信公众号的文章还是通过手动复制链接上传到方式
点击查看文章详情的时候，（如果是第一次阅读，可以使用iframe）动态爬文章详情，以便后续请求使用

## edit

markdown编辑器 https://juejin.cn/post/6844903593921757198
