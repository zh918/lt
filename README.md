# lt
###注意事项：
####1.js需要导入新包npm i --save-dev ‘包名’ 之后往往没有任何作用，还是会报出not found。 这里直接delete文件夹node_modules,然后yarn命令直接install。这样所有问题就解决了。
####2.在引入react-native-navigation后，ios源码那边会一直报错‘RCCManager.h not found’，不管是rnpm自动添加引用还是手动，都是这个错。非常郁闷！直接把‘#import "RCCManager.h"’ 这行代码删了，然后自己再写一遍，就好了...
