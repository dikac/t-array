export default function Reset<Argument extends unknown[]>(argument : Argument) : Argument {

    let buffer : Argument =
        // @ts-ignore
        <Argument>[];

    argument.forEach(function (v, i) {
        buffer.push(v);
    })

    return <Argument> buffer;
}
