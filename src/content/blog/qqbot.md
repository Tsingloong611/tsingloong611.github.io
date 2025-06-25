---
title: Robot
date: 2021-8-6
publishDate: 2021-08-06
id: bot
tags: [生活]
type: "生活"
categories: 生活
description: 基于Mirai及Python编写机器人。
---
{% span center logo large, Project_2 %}
{% span center small, 机器人开发计划 %}
{% progress 75 cyan 完成度 %}
# 前言 #
{% tabs 前言 %}
<!--tab 为什么要写Robot? -->
&ensp;&ensp;其实几年前就有这个想法，但由于水平不够+懒+仅仅出于兴趣就没搞，今年年初了解到{% kbd 酷Q %}项目的停止，就觉得可惜，深感自己再不行动可能就会让玩机器人的梦永远只是个梦，也算是实现一个几年前的梦想吧...
<!-- endtab -->
<!--tab 本文面对对象 -->
&ensp;&ensp;显然，简单Robot的开发是非常容易理解的，本文性质为导向性说明文，{% nota 旨在为业余爱好者指一条路。 , 真正的大佬根本不屑于看:( %}即便你无计算机基础，也可快速上手。
<!-- endtab -->
<!-- tab 鸣谢 -->
{% p center small, 感谢以下项目，让我得以实现一个小梦想 %}
{% sitegroup %}
{% site Mirai, url=https://github.com/mamoe/mirai, screenshot=https://www.helloimg.com/images/2021/08/06/CtBl7A.png, avatar=https://www.helloimg.com/images/2021/08/06/CtBtvg.png, description=Mirai官方%}
{% site Python, url=https://www.python.org/, screenshot=https://www.helloimg.com/images/2021/08/06/CtB2C5.png, avatar=https://www.helloimg.com/images/2021/08/06/CtBWwm.png, description=Python官网%}
{% site mirai-api-http, url=https://github.com/project-mirai/mirai-api-http, avatar=https://www.helloimg.com/images/2021/08/06/CtBtvg.png, screenshot=https://www.helloimg.com/images/2021/08/06/CtBl7A.png, description=Mirai官方团队开发的插件%}
{% site Graia Framework, url=https://github.com/GraiaProject/Application, screenshot=https://www.helloimg.com/images/2021/08/06/CtBTt0.png, avatar=, description=GreyElaina 的作品之一%}
{% endsitegroup %}
<!-- endtab -->
{% endtabs %}
# 准备工作 #
{% tabs 准备工作 %}
<!--tab 准备一个QQ号 -->
<p style="text-indent:2em">需要强调的是腾讯的风控策略，新注册的小号应在即将运行的服务器上挂载一个月左右时间，否则容易被封禁。{% span red, 不建议使用大号！！！ %}</p>
<!-- endtab -->
<!--tab 运行Mirai -->
{% link Mirai官方教程贴, https://docs.mirai.mamoe.net/, https://www.helloimg.com/images/2021/08/06/CtBtvg.png %}


{% span center cyan, 请参考以上教程贴完成Mirai的运行（启动控制台） %}
{% note success simple %}如果你遵循以上教程安装了最新的MCL,那么Java及mirai-api-http均已自动附加。{% endnote %}
{% note info simple %}若你没有{% kbd Java %}或{% kbd mirai-api-http %}请手动附加，对此存疑请百度。{% endnote %}
{% btns circle center grid5 %}
{% cell 清华大学开源软件镜像站, https://mirrors.tuna.tsinghua.edu.cn/AdoptOpenJDK/, https://www.helloimg.com/images/2021/08/07/CtqBO1.png %}
{% cell OpenJDK15安装向导, https://bot-1304934357.cos.ap-beijing.myqcloud.com/OpenJDK15U-jdk_x64_windows_hotspot_15.0.2_7.msi, https://www.helloimg.com/images/2021/08/07/CtaITX.png %}
{% cell mirai-api-http-v1.12.0, https://bot-1304934357.cos.ap-beijing.myqcloud.com/mirai-api-http-v1.12.0.mirai.jar, https://www.helloimg.com/images/2021/08/06/CtBtvg.png %}
{% endbtns %}
<!-- endtab -->
<!--tab 调试 -->
&ensp;&ensp;在上一步操作中，我们启动了Mirai控制台，现在我们需要进行一些调试。


&ensp;&ensp;请在控制台输入"/login qq账号 qq密码",完成滑块验证，完成登录。

{% note success simple %}如果你已经完成了这三步操作，那么恭喜你，你离成功很近了！{% endnote %}


{% note info simple %}若无法登录，下面的步骤便失去意义。请在所登录设备上安装官方QQ并登录挂机，约一个月后再次尝试。
{% endnote %}


<!-- endtab -->
{% endtabs %}
# 食用方法 #
{% note info simple %}现在你有两个选择，使用现成插件或自行构建插件，这里只介绍后者。{% endnote %}
{% tabs 使用方法 %}
<!--tab 安装Python并进行配置 -->
{% folding green, Python的安装 %}
&ensp;&ensp;首先下载{% kbd Python %}安装程序，如果官方源速度慢请选择后者。
{% btns circle center grid5 %}
{% cell Python官方下载地址, https://www.python.org/downloads/, https://www.helloimg.com/images/2021/08/06/CtBWwm.png %}
{% cell python-3.9.5.exe, https://bot-1304934357.cos.ap-beijing.myqcloud.com/python-3.9.5.exe, https://www.helloimg.com/images/2021/08/06/CtBWwm.png %}
{% endbtns %}
&ensp;&ensp;完成后运行安装向导，{% span red, 注意勾选 %}{% kbd Add Python 3.8 to PATH %}以自动完成环境变量配置。在命令行（cmd）窗口输入{% kbd python %}若输出版本信息则成功安装。
{% endfolding %}
{% folding green, 正式开发前的配置 %}
&ensp;&ensp;这里我们使用{% kbd Graia Framework %}开发应用，请先阅读其开发文档。
{% link Graia Framework官方文档, https://graia-document.vercel.app/docs/intro, https://www.helloimg.com/images/2021/08/06/CtB74o.png %}
&ensp;&ensp;首先确定{% kbd mirai-api-http %}版本为{% kbd 1.x %},若不是，请替换为{% kbd 1.x %}。运行MCL,修改{% kbd mirai-api-http %}配置文件中的{% kbd authKey %}，其值任意取，记住该值。
&ensp;&ensp;在命令行（cmd）中使用以下命令。
{% codeblock %}
pip install graia-application-mirai==0.18.3
pip install graia-broadcast==0.8.11
{% endcodeblock %}
&ensp;&ensp;安装必要依赖。
{% note success simple %}开发前的准备已完成，该专栏最后一部分将介绍如何获得更优质的开发体验，若你赶时间，可直接查看“Hello World”专栏。{% endnote %}
{% endfolding %}
{% folding green, 优化开放体验 %}
&ensp;&ensp;使用{% kbd PyCharm %}以获取更优质的开发体验。首先，下载{% kbd PyCharm %}并安装。待续...
{% btns circle center grid5 %}
{% cell PyCharm官方下载地址, https://www.jetbrains.com/pycharm/download/#section=windows, https://www.helloimg.com/images/2021/08/07/CtqJ1Y.png %}
{% cell pycharm-community-2020.1.2, https://bot-1304934357.cos.ap-beijing.myqcloud.com/pycharm-community-2020.1.2.exe, https://www.helloimg.com/images/2021/08/07/CtqJ1Y.png %}
{% endbtns %}
{% endfolding %}
<!-- endtab -->
<!--tab Hello World -->
&ensp;&ensp;新建{% kbd bot.py %},对内容进行编辑。
{% codeblock %}
from graia.broadcast import Broadcast
from graia.application import GraiaMiraiApplication, Session
from graia.application.message.chain import MessageChain
import asyncio

from graia.application.message.elements.internal import Plain
from graia.application.friend import Friend

loop = asyncio.get_event_loop()

bcc = Broadcast(loop=loop)
app = GraiaMiraiApplication(
    broadcast=bcc,
    connect_info=Session(
        host="http://localhost:8080", # 填入 httpapi 服务运行的地址
        authKey="graia-mirai-api-http-authkey", # 填入 authKey
        account=5234120587, # 你的机器人的 qq 号
        websocket=True # Graia 已经可以根据所配置的消息接收的方式来保证消息接收部分的正常运作.
    )
)

@bcc.receiver("FriendMessage")
async def friend_message_listener(app: GraiaMiraiApplication, friend: Friend):
    await app.sendFriendMessage(friend, MessageChain.create([
        Plain("Hello, World!")
    ]))

app.launch_blocking()
{% endcodeblock %}
{% note info simple %}上述代码实现功能为：当接收到好友消息时，回复“Hello,World!”{% endnote %}
{% note info simple %}其中authKey注意带引号。{% endnote %}
&ensp;&ensp;运行MCL并登录指定QQ号，运行{% kbd bot.py %}即可开始食用。
<!-- endtab -->
<!--tab 进阶 -->
待完善
<!-- endtab -->
{% endtabs %}
# 相关日志 #
{% timeline 时间线 %}

<!-- timeline 2021/8/6 21:09:09  [1.0] -->

1. 发布。

<!-- endtimeline -->

<!-- timeline 2021/8/7 13:43:53  [1.1] -->

1. 完善内容。

<!-- endtimeline -->

<!-- timeline 2021/8/7 17:23:24   [1.2] -->

1. 完善内容。

<!-- endtimeline -->

{% endtimeline %}

