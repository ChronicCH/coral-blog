### github page+hexo

创建一个仓库，克隆到本地

在github的setting中设置docs为根目录

![image-20201025160826632](C:\Users\陈莉媛\AppData\Roaming\Typora\typora-user-images\image-20201025160826632.png)



删除项目中docs里的文件  rm -f *

创建hexo init

修改配置  

```
public_dir：../docs
url: https://chronicch.github.io
root: /coral-blog
```

hexo generate



### ES5

es5中只有函数里面定义的变量才没有变量提升

变量提升大于函数提升

