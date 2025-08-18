// 预测函数
function predict(input: number): number {
    // 这里是预测逻辑，返回预测结果
    return input * 2;
}

// 使用类型推导获取函数返回类型
// TODO
type FunctionReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// B输出的是nubmer
type B = FunctionReturnType<typeof predict>

type C = ReturnType<typeof predict>



interface TODO {
    name: string,
    desc: string,
    age: number
}

// 去除key值
type union = Exclude<keyof TODO, 'desc'>;

// 匹配第一个字符
type FirstChar<T> = T extends `${infer L}${infer R}` ? L : never;
type abc = "abc";
type FirstAbc = FirstChar<abc>;

// 匹配最后一个字符
type LastChar<T, Prev = never> = T extends `${infer L}${infer R}` ? LastChar<R, L> : Prev
type LastAbc = LastChar<abc>;

type FuncReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type sum = (a: string) => string;
type sunReturnType = FuncReturnType<sum>;
console.log("###p",)