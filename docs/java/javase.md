# 数组的使用

### 数组的静态初始化写法

```java
// 完整路径
数据类型[] 数组名 = new 数据类型[]{元素1,元素2,元素3};
// 简化格式
数据类型[] 数组名 = {元素1,元素2,元素3};
// 另一种方式
数据类型 数组名[];
```

### 数组的动态初始化格式

```java
数据类型[] 数组名 = new 数据类型[长度];
int[] ages = new int[6];    
```

### 遍历数组

```java
int[] ages = {12,13,14};
// 普通循环遍历数组
for (int i = 0; i < ages.length; i++) {
       System.out.println(ages[i]);
   }
// 增强型循环遍历数组 只能遍历取值，不能遍历存值
for (age : ages){
    System.out.println(age)
}
```



