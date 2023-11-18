# 2.4 安装机器学习环境

本书所用环境的参考版本
Python：3.9.18
python依赖包版本
> scikit-learn==1.3.2
> 
> numpy==1.26.2
> 
> pandas==2.1.3
> 
> matplotlib==3.8.2

作者安装命令均使用清华大学镜像加速

## 2.4.1 python环境

建议安装conda管理环境

参考文章：[点击查看](https://www.cnblogs.com/chaosopen/p/17840209.html)

## 2.4.2 jupyter

参考文章：[点击查看](https://www.cnblogs.com/chaosopen/p/17840216.html)

## 2.4.3 sklearn
sklearn是基于python语言的机器学习工具包，是做机器学习项目的工具。 sklearn自带了大量的数据集，可供我们练习各种机器学习算法。

安装命令如下：
```shell
pip install scikit-learn==1.3.2 -i https://pypi.tuna.tsinghua.edu.cn/simple
```

# 2.4.3 matplotlib
```shell
pip install matplotlib==3.8.2 -i https://pypi.tuna.tsinghua.edu.cn/simple
```
# 2.4.4 Numpy
安装scikit-learn时会携带numpy，无需重复安装
# 2.4.5 Pnadas
```shell
pip install pandas==2.1.3 -i https://pypi.tuna.tsinghua.edu.cn/simple
```