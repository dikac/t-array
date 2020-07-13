export default function ArrayOf<Type>(value: unknown, singular: (value: any) => value is Type): value is Type[];
