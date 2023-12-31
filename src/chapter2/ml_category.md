# 2.2 机器学习算法分类

## 2.2.1 监督学习
从给定的训练数据集中学习出一个函数，当新的数据到来，可以根据这个函数预测结果，监督学习的训练集要求是包括输入和输出，也可以说是特征和目标，常见的监督算法包括回归分析和统计分类

### 1. 统计分类
比如我们最常用到的垃圾邮箱过滤器，过滤器会分析之前标记为垃圾邮件的邮件，并且和新的邮件进行对比，如果达到某个百分比，则新的邮件也会被标记为垃圾邮件，拦截到邮箱的垃圾箱中，不像垃圾邮件的邮件会被归类为正常邮件，并且进行发送
### 2. 回归分析
在回归中，机器使用先前标注的数据进行未来预测，比如天气应用，利用天气的相关历史数据，对一定范围内的天气进行预测

## 2.2.2 无监督学习
无监督学习中，数据是未标注的，考虑我们现实中，大多的数据都是未标注的，所以这种算法特别的有用，常见的无监督算法包括聚类和降维

### 1. 聚类
聚类根据属性和行为对象进行分组，与分类不同，这些组不会提供给你，聚类把一个组划分成不同的子组，进行针对性营销
### 2. 降维
降维通过查找共性，减少数据集的变量，以此来识别趋势和规则

## 2.2.3 半监督学习
介于监督学习与无监督学习之间

## 2.2.4 强化学习
强化学习是机器学习中的一个领域，它强调如何基于环境而行动，逐步调整其行为，并且评估每个行动之后的回馈是正向还是负向的，以此获得最大的预期利益
说的通俗一些，强化学习最典型的案例就是游戏，它和监督，无监督学习相反，强化学习不重视提供正确的答案和输出，举个栗子，如果我们在玩CS游戏，每次我从中路跳出去都会死，这给我的回馈是负向的，那么之后我就会调整我自身的位置，不去中路，去A大或者B沟，在这个之上，加入其它的算法，在游戏中机器就可以击败人类玩家。