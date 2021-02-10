export function slug(str){
    //console.log('slug', str)
    return str !== undefined ? str.toLowerCase().replace(/ /g,'-').replace(/[-]+/g, '-').replace(/[^\w-]+/g,'') : '';
    //return str;
}

export function stringLimit(str, limit){   
    const result = str.slice(0, limit);
    result.substring(result.indexOf(' ')+1, result.length);
    return result;
}