export default function ArrayOf<Type>(values: any, singular: (value: any) => value is Type): values is Type[];
