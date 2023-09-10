## 安装koa
```shell
npm i koa
```



## 架构

> **router => controller => service => model(模型层)**

**router**：router层就是建立一个映射关系，通过router将不同的url转发给控制器对应的处理方法。
**controller**：controller这一层主要是实现一些业务逻辑，它主要有三个操作：1、解析请求入参；2、操作数据库；3、返回结果。然后在数据库操作这里封装一个service层
**service**：service层主要是通过model层去操作数据库
