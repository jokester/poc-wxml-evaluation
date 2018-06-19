# poc-wxml-evaluation

poc: 编译wxml并用node运行得到VDOM

## 编译wxml到js

```
# change to yours accordingly
$ alias wcc="$HOME/Applications/wechatwebdevtools.app/Contents/Resources/app.nw/js/vendor/wcc"
$ wcc page1.wxml > page1.wxml.js
```

## 运行

```
$ yarn && node run-wxml.js

{
  "tag": "wx-page",
  "children": [
```

## ref

- www.alonemonkey.com/2017/01/18/wechat-small-program/
- https://github.com/qiu8310/minapp/issues/77


