# CoderHub接口文档

> Coderhub旨在创建一个程序员分享生活动态的平台。

完成的功能如下：

1. 用户管理系统

2. 内容管理系统

3. 内容评论管理

4. 内容标签管理

5. 文件管理系统

   

   接口完整请求示例：http://127.0.0.1:8000/users

   github仓库：https://github.com/zep03/koa-coderhub（接口文档编写整理不易，如果帮到了您，麻烦给一个star，谢谢！）

   

   ------

## 一、用户管理系统

### 1. 用户注册

#### 1.1 基本信息

**Path：** /users

**Method：** POST

**接口描述：**用户注册接口



#### 1.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数）：

**Headers**

| 参数名称     | 参数值           | 是否必须 | 示例 | 备注 |
| ------------ | ---------------- | -------- | ---- | :--- |
| Content-Type | application/json | 是       |      |      |



**Body**

| 参数名称 | 类型   | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ------ | -------- | ------ | :--- | ---- |
| name     | String | 是       | 无     |      |      |
| password | String | 是       | 无     |      |      |

```json
{
    "name": "zep6",
    "password": "123456"
}
```



#### 1.3 返回数据

```json
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 15,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0
}
```



#### 1.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
       包括：参数缺失（用户名或者密码不能为空）
3. 409 用户已存在
4. 500 服务器内部异常



### 2. 用户登录

#### 2.1 基本信息

**Path：** /login

**Method：** POST

**接口描述：**用户登录接口



#### 2.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数）：

**Headers**

| 参数名称     | 参数值           | 是否必须 | 示例 | 备注 |
| ------------ | ---------------- | -------- | ---- | :--- |
| Content-Type | application/json | 是       |      |      |



**Body**

| 参数名称 | 类型   | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ------ | -------- | ------ | :--- | ---- |
| name     | String | 是       | 无     |      |      |
| password | String | 是       | 无     |      |      |

```json
{
    "name": "zep6",
    "password": "123456"
}
```



#### 2.3 返回数据

```json
{
    "id": 15,
    "name": "zep6",
    "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiJ6ZXA2IiwiaWF0IjoxNjI5MDI3MDgwLCJleHAiOjE2MjkxMTM0ODB9.d6KKRSm2G_29-cKeI6wKRJRpXeVao82kHoboBvKiRjsSVRD71GQWOMv3TfktfgtexfijY1suNkFH8O0n6StRBPwyWWo-Tgm02M1DxrQ9j7mwUpch8l4pZPliM2Jv8tysAuCflzz2lEYrZ08EnG3kSxksEez-1BtumD46vtv3_GA"
}
```

token说明：

token用于访问需要身份认证的普通接口，**有效期1天**



#### 2.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
        包括：参数缺失（用户名或者密码不能为空）、用户名不存在、密码错误等
4. 500 服务器内部异常



### 3. 获取用户头像

#### 3.1 基本信息

**Path：** /users/:userId/avatar

**Method：** GET

**接口描述：**获取用户头像的接口



#### 3.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数，

 /users/:userId/avatar里的**:userId就是Params参数**）：

**Headers**

| 参数名称 | 参数值 | 是否必须 | 示例 | 备注 |
| -------- | ------ | -------- | ---- | :--- |
| 无       | 无     | 无       |      |      |



**Params**

| 参数名称 | 类型   | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ------ | -------- | ------ | :--- | ---- |
| userId   | String | 是       | 无     |      |      |



#### 3.3 返回数据

![image-20210815200024057](C:\Users\Zep\AppData\Roaming\Typora\typora-user-images\image-20210815200024057.png)





#### 3.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
       包括：参数缺失
3. 500 服务器内部异常





### 4. 测试登录接口

#### 4.1 基本信息

**Path：**/test

**Method：** POST

**接口描述：**用户测试登录接口



#### 4.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数）：

**Headers**

| 参数名称      | 参数值                                                       | 是否必须 | 示例 | 备注 |
| ------------- | ------------------------------------------------------------ | -------- | ---- | :--- |
| Content-Type  | application/json                                             | 是       |      |      |
| Authorization | Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOiJ6ZXA1IiwiaWF0IjoxNjI5MDEzOTgyLCJleHAiOjE2MjkxMDAzODJ9.MpIFWPy8ojLXFj8LmcC18J8X8bxSmQf_fH3tqttNvfvCb7ck7piVgus37M8YN4r-dQiit9Wn6gxcEMQsj4ppxgz6ESpDVd9BeYbG12GJ3d4CWqZYII3K5bR1VCq-OYLhwgUAgyvyRGmUdl1HnUWMIvIwl4ZVvujiVdMqSGR_wSM | 是       |      |      |

**注意：**

**在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格**

token说明：token用于访问需要身份认证的普通接口，**有效期1天**

**Body**

| 参数名称 | 类型 | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ---- | -------- | ------ | :--- | ---- |
| 无       | 无   | 无       | 无     |      |      |



#### 4.3 返回数据

```json
授权成功
```





#### 4.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
3. 401 UNAUTHORIZATION 无效的token
4. 500 服务器内部异常







## 二、内容管理系统

### 1. 发布动态

#### 1.1 基本信息

**Path：**/moment

**Method：** POST

**接口描述：**发布动态接口



#### 1.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数）：

**Headers**

| 参数名称      | 参数值                                                       | 是否必须 | 示例 | 备注 |
| ------------- | ------------------------------------------------------------ | -------- | ---- | :--- |
| Content-Type  | application/json                                             | 是       |      |      |
| Authorization | Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOiJ6ZXA1IiwiaWF0IjoxNjI5MDEzOTgyLCJleHAiOjE2MjkxMDAzODJ9.MpIFWPy8ojLXFj8LmcC18J8X8bxSmQf_fH3tqttNvfvCb7ck7piVgus37M8YN4r-dQiit9Wn6gxcEMQsj4ppxgz6ESpDVd9BeYbG12GJ3d4CWqZYII3K5bR1VCq-OYLhwgUAgyvyRGmUdl1HnUWMIvIwl4ZVvujiVdMqSGR_wSM | 是       |      |      |

**注意：**

**在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格**

token说明：token用于访问需要身份认证的普通接口，**有效期1天**

**Body**

| 参数名称 | 类型   | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ------ | -------- | ------ | :--- | ---- |
| content  | String | 是       | 无     |      |      |

```json
{
    "content": "我是动态内容111"
}
```



#### 1.3 返回数据

```json
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 26,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0
}
```





#### 1.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
3. 401 UNAUTHORIZATION 无效的token
4. 500 服务器内部异常



### 2. 获取动态列表

#### 1.1 基本信息

**Path：**/moment?offset=0&size=5

举例：http://localhost:8000/moment?offset=0&size=5

**Method：** GET

**接口描述：**获取动态列表接口



#### 2.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数）：

**Headers**

| 参数名称     | 参数值           | 是否必须 | 示例 | 备注 |
| ------------ | ---------------- | -------- | ---- | :--- |
| Content-Type | application/json | 是       |      |      |



**Query**

| 参数名称 | 类型   | 是否必须 | 默认值 | 示例 | 备注           |
| -------- | ------ | -------- | ------ | :--- | -------------- |
| offset   | String | 是       | 无     | 0    | 跳过几条数据   |
| size     | String | 是       | 无     | 5    | 返回数据的大小 |



**Body**

| 参数名称 | 类型 | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ---- | -------- | ------ | :--- | ---- |
| 无       | 无   | 无       | 无     |      |      |



#### 2.3 返回数据

```json
[
    {
        "id": 1,
        "content": "我说错了，C语言才是最好的语言~",
        "createAt": "2020-11-23T14:05:23.000Z",
        "updateTime": "2020-11-27T13:35:42.000Z",
        "author": {
            "id": 4,
            "name": "lucy",
            "avatarUrl": "http://localhost:8000/users/4/avatar"
        },
        "commentCount": 6,
        "labelCount": 4
    },
    {
        "id": 3,
        "content": "曾几何时，他也好，她也好，都是这家伙的被害者。所以我才憎恶着。这个强求着所谓“大家”的世界。必须建立在牺牲某人之上才能成立的低劣的和平。以温柔和正义粉饰，明明是恶毒之物却登大雅之堂，随着时间的流逝越发凶恶，除欺瞒外别无其二的空虚的概念。过去和世界都是无法改变的。发生过的事情和所谓的“大家”都是无法改变的。但是，并不是说自己只能隶属于他们",
        "createAt": "2020-11-23T14:21:19.000Z",
        "updateTime": "2020-11-23T14:21:19.000Z",
        "author": {
            "id": 1,
            "name": "coderwhy",
            "avatarUrl": null
        },
        "commentCount": 1,
        "labelCount": 0
    },
    {
        "id": 4,
        "content": "不要告诉我你不需要保护，不要告诉我你不寂寞，知微，我只希望你，在走过黑夜的那个时辰，不要倔强的选择一个人。",
        "createAt": "2020-11-23T14:21:19.000Z",
        "updateTime": "2020-11-23T14:21:19.000Z",
        "author": {
            "id": 3,
            "name": "lilei",
            "avatarUrl": null
        },
        "commentCount": 0,
        "labelCount": 0
    },
    {
        "id": 5,
        "content": "If you shed tears when you miss the sun, you also miss the stars.如果你因失去了太阳而流泪，那么你也将失去群星了。",
        "createAt": "2020-11-23T14:21:19.000Z",
        "updateTime": "2020-11-23T14:21:19.000Z",
        "author": {
            "id": 1,
            "name": "coderwhy",
            "avatarUrl": null
        },
        "commentCount": 0,
        "labelCount": 0
    },
    {
        "id": 6,
        "content": "在世间万物中我都发现了你，渺小时，你是阳光下一粒种子，伟大时，你隐身在高山海洋里。",
        "createAt": "2020-11-23T14:21:19.000Z",
        "updateTime": "2020-11-23T14:21:19.000Z",
        "author": {
            "id": 2,
            "name": "kobe",
            "avatarUrl": null
        },
        "commentCount": 0,
        "labelCount": 0
    }
]
```





#### 2.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
3. 401 UNAUTHORIZATION 无效的token
4. 500 服务器内部异常





### 3. 获取动态详情

#### 3.1 基本信息

**Path：**/moment/:momentId

**Method：** GET

**接口描述：**获取动态详情接口



#### 3.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数

 /users/:userId/avatar里的**:userId就是Params参数**）：

**Headers**

| 参数名称     | 参数值           | 是否必须 | 示例 | 备注 |
| ------------ | ---------------- | -------- | ---- | :--- |
| Content-Type | application/json | 是       |      |      |



**Params**

| 参数名称 | 类型   | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ------ | -------- | ------ | :--- | ---- |
| momentId | String | 是       | 无     | 24   |      |



#### 3.3 返回数据

```json
{
    "id": 24,
    "content": "JS是世界上最好的语言~",
    "createAt": "2021-08-13T05:26:56.000Z",
    "updateTime": "2021-08-13T05:26:56.000Z",
    "author": {
        "id": 14,
        "name": "zep5",
        "avatarUrl": "http://localhost:8000/users/14/avatar"
    }
}
```





#### 3.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
3. 401 UNAUTHORIZATION 无效的token
4. 500 服务器内部异常



### 4. 修改动态

#### 4.1 基本信息

**Path：**/moment/:momentId

**Method：** PATCH

**接口描述：**修改动态接口，该接口**只允许用户修改自己所发布的动态，不允许用户修改其他用户发布的动态！**

修改其他用户发布的动态将返回**403 UNPERMISSION 您不具备操作的权限**



#### 4.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数

 /users/:userId/avatar里的**:userId就是Params参数**）：

**Headers**

| 参数名称      | 参数值                                                       | 是否必须 | 示例 | 备注 |
| ------------- | ------------------------------------------------------------ | -------- | ---- | :--- |
| Content-Type  | application/json                                             | 是       |      |      |
| Authorization | Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOiJ6ZXA1IiwiaWF0IjoxNjI5MDEzOTgyLCJleHAiOjE2MjkxMDAzODJ9.MpIFWPy8ojLXFj8LmcC18J8X8bxSmQf_fH3tqttNvfvCb7ck7piVgus37M8YN4r-dQiit9Wn6gxcEMQsj4ppxgz6ESpDVd9BeYbG12GJ3d4CWqZYII3K5bR1VCq-OYLhwgUAgyvyRGmUdl1HnUWMIvIwl4ZVvujiVdMqSGR_wSM | 是       |      |      |

**注意：**

**在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格**

token说明：token用于访问需要身份认证的普通接口，**有效期1天**

**Params**

| 参数名称 | 类型   | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ------ | -------- | ------ | :--- | ---- |
| momentId | String | 是       | 无     |      |      |



**Body**

| 参数名称 | 类型   | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ------ | -------- | ------ | :--- | ---- |
| content  | String | 是       | 无     |      |      |

```json
{
    "content": "啦啦啦啦啦~~"
}
```



#### 4.3 返回数据

```json
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "Rows matched: 1  Changed: 1  Warnings: 0",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 1
}
```





#### 4.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
3. 401 UNAUTHORIZATION 无效的token
4. 403 UNPERMISSION 您不具备操作的权限
5. 404 NOT FOUND
6. 500 服务器内部异常





### 5. 删除动态

#### 5.1 基本信息

**Path：**/moment/:momentId

**Method：** DELETE

**接口描述：**删除动态接口，该接口**只允许用户删除自己所发布的动态，不允许用户删除其他用户发布的动态！**

删除其他用户发布的动态将返回**403 UNPERMISSION 您不具备操作的权限**



#### 5.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数

 /users/:userId/avatar里的**:userId就是Params参数**）：

**Headers**

| 参数名称      | 参数值                                                       | 是否必须 | 示例 | 备注 |
| ------------- | ------------------------------------------------------------ | -------- | ---- | :--- |
| Content-Type  | application/json                                             | 是       |      |      |
| Authorization | Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOiJ6ZXA1IiwiaWF0IjoxNjI5MDEzOTgyLCJleHAiOjE2MjkxMDAzODJ9.MpIFWPy8ojLXFj8LmcC18J8X8bxSmQf_fH3tqttNvfvCb7ck7piVgus37M8YN4r-dQiit9Wn6gxcEMQsj4ppxgz6ESpDVd9BeYbG12GJ3d4CWqZYII3K5bR1VCq-OYLhwgUAgyvyRGmUdl1HnUWMIvIwl4ZVvujiVdMqSGR_wSM | 是       |      |      |

**注意：**

**在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格**

token说明：token用于访问需要身份认证的普通接口，**有效期1天**

**Params**

| 参数名称 | 类型   | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ------ | -------- | ------ | :--- | ---- |
| momentId | String | 是       | 无     |      |      |



**Body**

| 参数名称 | 类型 | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ---- | -------- | ------ | :--- | ---- |
| 无       | 无   | 无       | 无     |      |      |





#### 5.3 返回数据

```json
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0
}
```





#### 5.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
3. 401 UNAUTHORIZATION 无效的token
4. 403 UNPERMISSION 您不具备操作的权限
5. 404 NOT FOUND
6. 500 服务器内部异常





## 三、内容标签管理



### 1. 给动态添加标签

#### 1.1 基本信息

**Path：**/moment/:momentId/labels

**Method：** POST

**接口描述：**给动态添加标签的接口，该接口**只允许用户为自己所发布的动态添加标签，不允许用户为其他用户发布的动态添加标签！**

为其他用户发布的动态添加标签，将返回**403 UNPERMISSION 您不具备操作的权限**



#### 1.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数

 /users/:userId/avatar里的**:userId就是Params参数**）：

**Headers**

| 参数名称      | 参数值                                                       | 是否必须 | 示例 | 备注 |
| ------------- | ------------------------------------------------------------ | -------- | ---- | :--- |
| Content-Type  | application/json                                             | 是       |      |      |
| Authorization | Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOiJ6ZXA1IiwiaWF0IjoxNjI5MDEzOTgyLCJleHAiOjE2MjkxMDAzODJ9.MpIFWPy8ojLXFj8LmcC18J8X8bxSmQf_fH3tqttNvfvCb7ck7piVgus37M8YN4r-dQiit9Wn6gxcEMQsj4ppxgz6ESpDVd9BeYbG12GJ3d4CWqZYII3K5bR1VCq-OYLhwgUAgyvyRGmUdl1HnUWMIvIwl4ZVvujiVdMqSGR_wSM | 是       |      |      |

**注意：**

**在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格**

token说明：token用于访问需要身份认证的普通接口，**有效期1天**

**Params**

| 参数名称 | 类型   | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ------ | -------- | ------ | :--- | ---- |
| momentId | String | 是       | 无     |      |      |



**Body**

| 参数名称 | 类型  | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ----- | -------- | ------ | :--- | ---- |
| labels   | Array | 是       | 无     |      |      |

```
{
    "labels": ["HTML", "VUE", "JWT"]
}
```



#### 1.3 返回数据

```json
{
    "statusCode": 200,
    "message": "给动态添加标签成功"
}
```





#### 1.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
3. 401 UNAUTHORIZATION 无效的token
4. 403 UNPERMISSION 您不具备操作的权限
5. 404 NOT FOUND
6. 500 服务器内部异常



### 2. 根据momentId查询标签

#### 2.1 基本信息

**Path：**/moment/:momentId/labels

**Method：** GET

**接口描述：**根据momentId查询标签的接口



#### 2.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数

 /users/:userId/avatar里的**:userId就是Params参数**）：

**Headers**

| 参数名称 | 参数值 | 是否必须 | 示例 | 备注 |
| -------- | ------ | -------- | ---- | :--- |
| 无       | 无     | 无       |      |      |



**Params**

| 参数名称 | 类型   | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ------ | -------- | ------ | :--- | ---- |
| momentId | String | 是       | 无     | 24   |      |



**Body**

| 参数名称 | 类型 | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ---- | -------- | ------ | :--- | ---- |
| 无       | 无   | 无       | 无     |      |      |





#### 2.3 返回数据

```json
[
    {
        "labelId": 3,
        "labelName": "爱情",
        "momentId": 24
    },
    {
        "labelId": 16,
        "labelName": "后端",
        "momentId": 24
    },
    {
        "labelId": 17,
        "labelName": "python",
        "momentId": 24
    },
    {
        "labelId": 19,
        "labelName": "css",
        "momentId": 24
    },
    {
        "labelId": 21,
        "labelName": "HTML",
        "momentId": 24
    },
    {
        "labelId": 22,
        "labelName": "VUE",
        "momentId": 24
    },
    {
        "labelId": 23,
        "labelName": "JWT",
        "momentId": 24
    }
]
```





#### 2.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
3. 401 UNAUTHORIZATION 无效的token
4. 403 UNPERMISSION 您不具备操作的权限
5. 404 NOT FOUND
6. 500 服务器内部异常





### 3. 添加标签

#### 3.1 基本信息

**Path：**/label

**Method：** POST

**接口描述：**添加标签接口



#### 3.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数）：

**Headers**

| 参数名称      | 参数值                                                       | 是否必须 | 示例 | 备注 |
| ------------- | ------------------------------------------------------------ | -------- | ---- | :--- |
| Content-Type  | application/json                                             | 是       |      |      |
| Authorization | Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOiJ6ZXA1IiwiaWF0IjoxNjI5MDEzOTgyLCJleHAiOjE2MjkxMDAzODJ9.MpIFWPy8ojLXFj8LmcC18J8X8bxSmQf_fH3tqttNvfvCb7ck7piVgus37M8YN4r-dQiit9Wn6gxcEMQsj4ppxgz6ESpDVd9BeYbG12GJ3d4CWqZYII3K5bR1VCq-OYLhwgUAgyvyRGmUdl1HnUWMIvIwl4ZVvujiVdMqSGR_wSM | 是       |      |      |

**注意：**

**在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格**

token说明：token用于访问需要身份认证的普通接口，**有效期1天**



**Body**

| 参数名称 | 类型   | 是否必须 | 默认值 | 示例 | 备注     |
| -------- | ------ | -------- | ------ | :--- | -------- |
| name     | String | 是       | 无     |      | 标签名称 |

```json
{
    "name": "JavaEE"
}
```



#### 3.3 返回数据

```json
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 24,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0
}
```





#### 3.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
3. 401 UNAUTHORIZATION 无效的token
4. 500 服务器内部异常



### 4. 获取标签列表

#### 4.1 基本信息

**Path：**/label?limit=5&offset=0

举例： http://localhost:8000/label?limit=5&offset=0

**Method：** GET

**接口描述：**获取标签列表接口



#### 4.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数）：

**Headers**

| 参数名称 | 参数值 | 是否必须 | 示例 | 备注 |
| -------- | ------ | -------- | ---- | :--- |
| 无       | 无     | 是       |      |      |



**Query**

| 参数名称 | 类型   | 是否必须 | 默认值 | 示例 | 备注                   |
| -------- | ------ | -------- | ------ | :--- | ---------------------- |
| limit    | String | 是       | 无     | 5    | 一次请求返回的标签个数 |
| offset   | String | 是       | 无     | 0    | 跳过几条数据           |





#### 4.3 返回数据

```json
[
    {
        "id": 1,
        "name": "前端",
        "createAt": "2020-11-30T13:06:04.000Z",
        "updateAt": "2020-11-30T13:06:04.000Z"
    },
    {
        "id": 2,
        "name": "文学",
        "createAt": "2020-11-30T13:13:50.000Z",
        "updateAt": "2020-11-30T13:13:50.000Z"
    },
    {
        "id": 3,
        "name": "爱情",
        "createAt": "2020-11-30T13:13:53.000Z",
        "updateAt": "2020-11-30T13:13:53.000Z"
    },
    {
        "id": 4,
        "name": "青春",
        "createAt": "2020-11-30T13:14:04.000Z",
        "updateAt": "2020-11-30T13:14:04.000Z"
    },
    {
        "id": 5,
        "name": "C语言",
        "createAt": "2020-11-30T13:35:10.000Z",
        "updateAt": "2020-11-30T13:35:10.000Z"
    }
]
```





#### 4.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
3. 401 UNAUTHORIZATION 无效的token
4. 500 服务器内部异常





## 四、内容评论管理

### 1. 发表评论

#### 1.1 基本信息

**Path：**/comment

**Method：** POST

**接口描述：**发表评论的接口

#### 1.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数

 /users/:userId/avatar里的**:userId就是Params参数**）：

**Headers**

| 参数名称      | 参数值                                                       | 是否必须 | 示例 | 备注 |
| ------------- | ------------------------------------------------------------ | -------- | ---- | :--- |
| Content-Type  | application/json                                             | 是       |      |      |
| Authorization | Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOiJ6ZXA1IiwiaWF0IjoxNjI5MDEzOTgyLCJleHAiOjE2MjkxMDAzODJ9.MpIFWPy8ojLXFj8LmcC18J8X8bxSmQf_fH3tqttNvfvCb7ck7piVgus37M8YN4r-dQiit9Wn6gxcEMQsj4ppxgz6ESpDVd9BeYbG12GJ3d4CWqZYII3K5bR1VCq-OYLhwgUAgyvyRGmUdl1HnUWMIvIwl4ZVvujiVdMqSGR_wSM | 是       |      |      |

**注意：**

**在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格**

token说明：token用于访问需要身份认证的普通接口，**有效期1天**

**Params**

| 参数名称 | 类型 | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ---- | -------- | ------ | :--- | ---- |
| 无       | 无   | 无       | 无     |      |      |



**Body**

| 参数名称 | 类型   | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ------ | -------- | ------ | :--- | ---- |
| momentId | Int    | 是       | 无     |      |      |
| content  | String | 是       | 无     |      |      |

```
{
    "momentId": 24,
    "content": "评论momentId为24的动态"
}
```



#### 1.3 返回数据

```json
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 18,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0
}
```





#### 1.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
3. 401 UNAUTHORIZATION 无效的token
4. 403 UNPERMISSION 您不具备操作的权限
5. 404 NOT FOUND
6. 500 服务器内部异常





### 2. 回复评论

#### 2.1 基本信息

**Path：**/comment/:commentId/reply

**Method：** POST

**接口描述：**回复评论的接口



#### 2.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数

 /users/:userId/avatar里的**:userId就是Params参数**）：

**Headers**

| 参数名称      | 参数值                                                       | 是否必须 | 示例 | 备注 |
| ------------- | ------------------------------------------------------------ | -------- | ---- | :--- |
| Content-Type  | application/json                                             | 是       |      |      |
| Authorization | Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOiJ6ZXA1IiwiaWF0IjoxNjI5MDEzOTgyLCJleHAiOjE2MjkxMDAzODJ9.MpIFWPy8ojLXFj8LmcC18J8X8bxSmQf_fH3tqttNvfvCb7ck7piVgus37M8YN4r-dQiit9Wn6gxcEMQsj4ppxgz6ESpDVd9BeYbG12GJ3d4CWqZYII3K5bR1VCq-OYLhwgUAgyvyRGmUdl1HnUWMIvIwl4ZVvujiVdMqSGR_wSM | 是       |      |      |

**注意：**

**在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格**

token说明：token用于访问需要身份认证的普通接口，**有效期1天**

**Params**

| 参数名称  | 类型   | 是否必须 | 默认值 | 示例 | 备注 |
| --------- | ------ | -------- | ------ | :--- | ---- |
| commentId | String | 是       | 无     |      |      |



**Body**

| 参数名称 | 类型   | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ------ | -------- | ------ | :--- | ---- |
| momentId | Int    | 是       | 无     |      |      |
| content  | String | 是       | 无     |      |      |

```
{
    "momentId": 24,
    "content": "我是评论momentId为24的一条评论"
}
```



#### 2.3 返回数据

```json
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 22,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0
}
```





#### 2.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
3. 401 UNAUTHORIZATION 无效的token
4. 403 UNPERMISSION 您不具备操作的权限
5. 404 NOT FOUND
6. 500 服务器内部异常





### 3. 修改评论

#### 3.1 基本信息

**Path：**/comment/:commentId

**Method：** PATCH

**接口描述：**修改评论的接口, 该接口**只允许用户修改自己发布的评论，不允许用户修改其他用户发布的评论！**

修改其他用户发布的评论，将返回**403 UNPERMISSION 您不具备操作的权限**



#### 3.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数

 /users/:userId/avatar里的**:userId就是Params参数**）：

**Headers**

| 参数名称      | 参数值                                                       | 是否必须 | 示例 | 备注 |
| ------------- | ------------------------------------------------------------ | -------- | ---- | :--- |
| Content-Type  | application/json                                             | 是       |      |      |
| Authorization | Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOiJ6ZXA1IiwiaWF0IjoxNjI5MDEzOTgyLCJleHAiOjE2MjkxMDAzODJ9.MpIFWPy8ojLXFj8LmcC18J8X8bxSmQf_fH3tqttNvfvCb7ck7piVgus37M8YN4r-dQiit9Wn6gxcEMQsj4ppxgz6ESpDVd9BeYbG12GJ3d4CWqZYII3K5bR1VCq-OYLhwgUAgyvyRGmUdl1HnUWMIvIwl4ZVvujiVdMqSGR_wSM | 是       |      |      |

**注意：**

**在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格**

token说明：token用于访问需要身份认证的普通接口，**有效期1天**

**Params**

| 参数名称  | 类型   | 是否必须 | 默认值 | 示例 | 备注 |
| --------- | ------ | -------- | ------ | :--- | ---- |
| commentId | String | 是       | 无     |      |      |



**Body**

| 参数名称 | 类型   | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ------ | -------- | ------ | :--- | ---- |
| content  | String | 是       | 无     |      |      |

```
{
    "content": "我修改自己发布的id为22的评论"
}
```



#### 3.3 返回数据

```json
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "Rows matched: 1  Changed: 1  Warnings: 0",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 1
}
```





#### 3.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
3. 401 UNAUTHORIZATION 无效的token
4. 403 UNPERMISSION 您不具备操作的权限
5. 404 NOT FOUND
6. 500 服务器内部异常





### 4. 删除评论

#### 4.1 基本信息

**Path：**/comment/:commentId

**Method：** DELETE

**接口描述：**删除评论的接口, 该接口**只允许用户删除自己发布的评论，不允许用户删除其他用户发布的评论！**

删除其他用户发布的评论，将返回**403 UNPERMISSION 您不具备操作的权限**



#### 4.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数

 /users/:userId/avatar里的**:userId就是Params参数**）：

**Headers**

| 参数名称      | 参数值                                                       | 是否必须 | 示例 | 备注 |
| ------------- | ------------------------------------------------------------ | -------- | ---- | :--- |
| Content-Type  | application/json                                             | 是       |      |      |
| Authorization | Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOiJ6ZXA1IiwiaWF0IjoxNjI5MDEzOTgyLCJleHAiOjE2MjkxMDAzODJ9.MpIFWPy8ojLXFj8LmcC18J8X8bxSmQf_fH3tqttNvfvCb7ck7piVgus37M8YN4r-dQiit9Wn6gxcEMQsj4ppxgz6ESpDVd9BeYbG12GJ3d4CWqZYII3K5bR1VCq-OYLhwgUAgyvyRGmUdl1HnUWMIvIwl4ZVvujiVdMqSGR_wSM | 是       |      |      |

**注意：**

**在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格**

token说明：token用于访问需要身份认证的普通接口，**有效期1天**

**Params**

| 参数名称  | 类型   | 是否必须 | 默认值 | 示例 | 备注 |
| --------- | ------ | -------- | ------ | :--- | ---- |
| commentId | String | 是       | 无     |      |      |



**Body**

| 参数名称 | 类型 | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ---- | -------- | ------ | :--- | ---- |
| 无       | 无   | 无       | 无     |      |      |





#### 4.3 返回数据

```json
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0
}
```





#### 4.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
3. 401 UNAUTHORIZATION 无效的token
4. 403 UNPERMISSION 您不具备操作的权限
5. 404 NOT FOUND
6. 500 服务器内部异常





### 5. 根据动态id获取评论列表

#### 5.1 基本信息

**Path：**/moment?momentId=24

举例：http://localhost:8000/comment?momentId=24

**Method：** GET

**接口描述：**根据动态id获取评论列表的接口



#### 5.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数

 /users/:userId/avatar里的**:userId就是Params参数**）：

**Headers**

| 参数名称 | 参数值 | 是否必须 | 示例 | 备注 |
| -------- | ------ | -------- | ---- | :--- |
| 无       | 无     | 无       |      |      |



**Query**

| 参数名称 | 类型   | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ------ | -------- | ------ | :--- | ---- |
| momentId | String | 是       | 无     | 24   |      |



**Body**

| 参数名称 | 类型 | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ---- | -------- | ------ | :--- | ---- |
| 无       | 无   | 无       | 无     |      |      |





#### 5.3 返回数据

```json
[
    {
        "id": 9,
        "content": "js不是最好的语言",
        "commentId": null,
        "createTime": "2021-08-13T13:08:14.000Z",
        "user": {
            "id": 14,
            "name": "zep5"
        }
    },
    {
        "id": 10,
        "content": "js不是最好的语言",
        "commentId": null,
        "createTime": "2021-08-13T13:11:03.000Z",
        "user": {
            "id": 14,
            "name": "zep5"
        }
    },
    {
        "id": 11,
        "content": "世界上没有最好的语言~~",
        "commentId": 9,
        "createTime": "2021-08-13T13:28:42.000Z",
        "user": {
            "id": 14,
            "name": "zep5"
        }
    },
    {
        "id": 12,
        "content": "世界上没有最好的语言~~",
        "commentId": 9,
        "createTime": "2021-08-13T13:28:49.000Z",
        "user": {
            "id": 14,
            "name": "zep5"
        }
    },
    {
        "id": 13,
        "content": "世界上没有最好的语言~~",
        "commentId": 9,
        "createTime": "2021-08-13T13:29:25.000Z",
        "user": {
            "id": 14,
            "name": "zep5"
        }
    },
    {
        "id": 18,
        "content": "评论momentId为24的动态",
        "commentId": null,
        "createTime": "2021-08-15T14:06:33.000Z",
        "user": {
            "id": 14,
            "name": "zep5"
        }
    },
    {
        "id": 21,
        "content": "我是评论momentId为2的一条评论",
        "commentId": 18,
        "createTime": "2021-08-15T14:17:55.000Z",
        "user": {
            "id": 14,
            "name": "zep5"
        }
    }
```



#### 5.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
3. 401 UNAUTHORIZATION 无效的token
4. 403 UNPERMISSION 您不具备操作的权限
5. 404 NOT FOUND
6. 500 服务器内部异常





## 五、文件管理系统

### 1. 用户上传头像

#### 1.1 基本信息

**Path：**/upload/avatar

**Method：** POST

**接口描述：**用户上传头像的接口

#### 1.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数

 /users/:userId/avatar里的**:userId就是Params参数**）：

**Headers**

| 参数名称      | 参数值                                                       | 是否必须 | 示例 | 备注 |
| ------------- | ------------------------------------------------------------ | -------- | ---- | :--- |
| Content-Type  | multipart/form-data; boundary=<calculated when request is sent> | 是       |      |      |
| Authorization | Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOiJ6ZXA1IiwiaWF0IjoxNjI5MDEzOTgyLCJleHAiOjE2MjkxMDAzODJ9.MpIFWPy8ojLXFj8LmcC18J8X8bxSmQf_fH3tqttNvfvCb7ck7piVgus37M8YN4r-dQiit9Wn6gxcEMQsj4ppxgz6ESpDVd9BeYbG12GJ3d4CWqZYII3K5bR1VCq-OYLhwgUAgyvyRGmUdl1HnUWMIvIwl4ZVvujiVdMqSGR_wSM | 是       |      |      |

**注意：**

**在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格**

token说明：token用于访问需要身份认证的普通接口，**有效期1天**

**Params**

| 参数名称 | 类型 | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ---- | -------- | ------ | :--- | ---- |
| 无       | 无   | 无       | 无     |      |      |



**Body**

| 参数名称 | 类型 | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ---- | -------- | ------ | :--- | ---- |
| avatar   | File | 是       | 无     |      |      |

![image-20210815225524847](CoderHub接口文档.assets/image-20210815225524847.png)



#### 1.3 返回数据

```json
{
    "statusCode": 200,
    "message": "上传头像成功"
}
```





#### 1.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
3. 401 UNAUTHORIZATION 无效的token
4. 403 UNPERMISSION 您不具备操作的权限
5. 404 NOT FOUND
6. 500 服务器内部异常





### 2. 上传动态的配图

#### 2.1 基本信息

**Path：**/upload/picture/?momentId=1

举例:  http://localhost:8000//upload/picture?momentId=1

**Method：** POST

**接口描述：**上传动态的配图的接口

#### 2.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数

 /users/:userId/avatar里的**:userId就是Params参数**）：

**Headers**

| 参数名称      | 参数值                                                       | 是否必须 | 示例 | 备注 |
| ------------- | ------------------------------------------------------------ | -------- | ---- | :--- |
| Content-Type  | multipart/form-data; boundary=<calculated when request is sent> | 是       |      |      |
| Authorization | Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsIm5hbWUiOiJ6ZXA1IiwiaWF0IjoxNjI5MDEzOTgyLCJleHAiOjE2MjkxMDAzODJ9.MpIFWPy8ojLXFj8LmcC18J8X8bxSmQf_fH3tqttNvfvCb7ck7piVgus37M8YN4r-dQiit9Wn6gxcEMQsj4ppxgz6ESpDVd9BeYbG12GJ3d4CWqZYII3K5bR1VCq-OYLhwgUAgyvyRGmUdl1HnUWMIvIwl4ZVvujiVdMqSGR_wSM | 是       |      |      |

**注意：**

**在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格**

token说明：token用于访问需要身份认证的普通接口，**有效期1天**

**Query**

| 参数名称 | 类型   | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ------ | -------- | ------ | :--- | ---- |
| momentId | String | 是       | 无     |      |      |



**Body**

| 参数名称 | 类型 | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ---- | -------- | ------ | :--- | ---- |
| avatar   | File | 是       | 无     |      |      |

**注意：一次请求最大可允许上传9张配图**

![image-20210815230049942](CoderHub接口文档.assets/image-20210815230049942.png)



#### 2.3 返回数据

```json
动态的配图上传完成！
```





#### 2.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
3. 401 UNAUTHORIZATION 无效的token
4. 403 UNPERMISSION 您不具备操作的权限
5. 404 NOT FOUND
6. 500 服务器内部异常





### 3. 根据filename获取动态配图

#### 3.1 基本信息

**Path：**/moment/images/:filename

**Method：** GET

**接口描述：**根据filename获取动态配图的接口



#### 3.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数

 /users/:userId/avatar里的**:userId就是Params参数**）：

**Headers**

| 参数名称 | 参数值 | 是否必须 | 示例 | 备注 |
| -------- | ------ | -------- | ---- | :--- |
| 无       | 无     | 无       |      |      |



**Params**

| 参数名称 | 类型   | 是否必须 | 默认值 | 示例                             | 备注 |
| -------- | ------ | -------- | ------ | :------------------------------- | ---- |
| filename | String | 是       | 无     | cb0020475d176017dca4e071b37a8111 |      |



**Body**

| 参数名称 | 类型 | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ---- | -------- | ------ | :--- | ---- |
| 无       | 无   | 无       | 无     |      |      |





#### 3.3 返回数据

```json

```

![image-20210815215647632](CoderHub接口文档.assets/image-20210815215647632.png)



#### 3.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
3. 401 UNAUTHORIZATION 无效的token
4. 403 UNPERMISSION 您不具备操作的权限
5. 404 NOT FOUND
6. 500 服务器内部异常



### 4. 根据momentId查询动态配图

#### 4.1 基本信息

**Path：**/moment/img/:momentId

**Method：** GET

**接口描述：**根据momentId查询动态配图的接口



#### 4.2 请求参数

请求参数（GET 方法就是 Query 参数，POST 方法就是 Body 参数

 /users/:userId/avatar里的**:userId就是Params参数**）：

**Headers**

| 参数名称 | 参数值 | 是否必须 | 示例 | 备注 |
| -------- | ------ | -------- | ---- | :--- |
| 无       | 无     | 无       |      |      |



**Params**

| 参数名称 | 类型   | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ------ | -------- | ------ | :--- | ---- |
| momentId | String | 是       | 无     | 6    |      |



**Body**

| 参数名称 | 类型 | 是否必须 | 默认值 | 示例 | 备注 |
| -------- | ---- | -------- | ------ | :--- | ---- |
| 无       | 无   | 无       | 无     |      |      |





#### 4.3 返回数据

```json
{
    "statusCode": 200,
    "message": "获取动态配图成功",
    "imageList": [
        {
            "imgUrl": "http://localhost:8000/moment/images/107632322c8ed31f1901d0bfe6aca4f9",
            "mimetype": "image/png",
            "size": 726597
        }
    ]
}
```



#### 4.4 返回HTTP状态码

1. 200 OK
2. 400 请求参数错误
3. 401 UNAUTHORIZATION 无效的token
4. 403 UNPERMISSION 您不具备操作的权限
5. 404 NOT FOUND
6. 500 服务器内部异常



