AutoBindUI，自动绑定UI方案
=======================

使用cocostudio进行界面编辑并放到代码中使用，
为了对里面的控件元素进行操作，会使用大量的
ccui.helper.seekWidgetByName将元素取出来并
做注册触摸事件等等属性操作

自动化绑定UI就是为了解决大量的取元素操作，省
去大量ccui.helper.seekWidgetByName的操作

只要在cocostudio编辑界面时，控件按指定的规则命名
在程序中加载时使用UIHelper.bindUIWidget就可以将
控件绑定到对象上并注册事件，详细的代码请看UIHelper.js

doc目录下有设计内容的详细讲解文档




