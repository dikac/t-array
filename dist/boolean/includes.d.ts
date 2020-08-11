import Function from "@dikac/t-function/function";
export default function Includes<Type>(value: Type, trues: Type[], falses: Type[], defaults?: Function<[Type, Type[], Type[]], boolean>, compare?: Function<[Type, Type], boolean>): boolean;
