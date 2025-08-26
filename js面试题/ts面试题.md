1.	Ts内置的工具类型
Exclude<T,U>从T中排除可分配给u的元素
Exclude<”a”,”b”,”c”, ”a”,”b”>  => “c”
Pick<T,K>从T中选出K来构造类型
Omit<T, K>忽略T中的某些K元素
Merge<T,K>将两个对象的属性合并
Overwrite<T, U>用U属性覆盖T属性
Intersection<T, U>取T的属性，此属性也同样存在于U

2.	使用Ts定义数组的类型
typeFoo=Array<string>
interface Bar{
baz:Array<{name:string,age:number}>
}
