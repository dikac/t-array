import MapSingle from "../function/parameter/list/map-single";
export default function Map<List extends unknown[]>(values: List, validations: MapSingle<List>): boolean;
