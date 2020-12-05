
export default function Or(
    booleans : ReadonlyArray<boolean>,
    defaults : boolean = true
) : boolean {

    if(!booleans.length) {

        return defaults;
    }

    let result : boolean = false;

    for(let boolean of booleans) {

        result = result || boolean;

        if(boolean) {

            return true;
        }
    }

    return false;
}
