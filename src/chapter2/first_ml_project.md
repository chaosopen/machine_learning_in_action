# 2.5 第一个机器学习项目

打开代码编辑器，jupyter或pycharm都可以


## 2.5.1 目标
现有莺尾花数据集，包含萼片长度、萼片宽度、花瓣长度、花瓣宽度，需要对数据构建分类模型，数据集有三种类型。

## 2.5.2 准备数据
前面章节讲机器学习工作流程讲过步骤，数据是第一步，回顾[机器学习工作流程](../chapter2/ml_workflow.html#_2-1-1-机器学习工作流程)。

sklearn给我们提供了很多处理好的数据，所以我们直接拿来用。

## 2.5.3 添加依赖

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
```
## 2.5.4 加载数据集

```python
iris = load_iris() 
#iris.data获取数据集中的特征值
#iris.target获取目标值

# 数据集划分，按照8:2比例划分测试集，测试集用来做评估验证
x_train, x_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.2, random_state=6)
```
sklearn的数据集给我们处理好了，我们无需做数据处理
## 2.5.5 特征工程
```python
# 数据标准化
transfer = StandardScaler()
# x_train,x_test的标准差、让其平均值一样
x_train = transfer.fit_transform(x_train)
x_test = transfer.transform(x_test)
```
## 2.5.6 模型训练
```python
# n_neighbors 邻居的数量，也就是Knn中的K值
model = KNeighborsClassifier(n_neighbors=3)
# 调用fit方法 传入特征和目标进行模型训练
model.fit(x_train, y_train)
```
## 2.5.7 模型评估

### 1. 直接对比真实值与预测值
```python
y_predict = model.predict(x_test)
print('y_predict:', y_predict)
print('直接对比真实值与预测值:', y_test == y_predict)

```
### 2. 计算准确率
```python
score = model.score(x_test, y_test)
print('accuracy:', score)
```

## 2.5.8 完整代码
```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier

if __name__ == '__main__':
    iris = load_iris()
    #iris.data获取数据集中的特征值
    #iris.target获取目标值

    # 数据集划分，按照8:2比例划分测试集，测试集用来做评估验证
    x_train, x_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.2, random_state=6)
    # 数据标准化
    transfer = StandardScaler()
    # x_train,x_test的标准差、让其平均值一样
    x_train = transfer.fit_transform(x_train)
    x_test = transfer.transform(x_test)
    # n_neighbors 邻居的数量，也就是Knn中的K值
    model = KNeighborsClassifier(n_neighbors=3)
    # 调用fit方法 传入特征和目标进行模型训练
    model.fit(x_train, y_train)
    y_predict = model.predict(x_test)
    print('y_predict:', y_predict)
    print('直接对比真实值与预测值:', y_test == y_predict)
    score = model.score(x_test, y_test)
    print('准确率:', score)
```

到这里已经入门机器学习了，继续接下来的学习吧！