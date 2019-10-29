export default function ArrayOf<Type>(
    values : any,
    singular : (value : any) => value is Type
) : values is Type[] {

    if(!Array.isArray(values)) {
        
        return false;
    }
    
    for(let value of values) {
        
        if(!singular(value)) {
            
            return false;
        }
    }
    
    return true;
    
}
