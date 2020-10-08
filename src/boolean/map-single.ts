import MapSingle from "../function/parameter/list/map-single";

export default function MapSingle<List extends unknown[]>(
    values : List,
    validations : MapSingle<List>
) : boolean {

    if(values.length === validations.length) {

        for(let [index, value] of values.entries()) {

            if(!validations[index](value)) {

                return false;
            }
        }

        return true;
    }

    return false;
}
