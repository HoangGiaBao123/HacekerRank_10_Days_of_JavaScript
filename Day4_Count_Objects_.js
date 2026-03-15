function getCount(arr) {
    let index;
    let result = 0;
    for(index = 0; index < arr.length; index++){
        if(arr[index].x * arr.length === arr[index].y * arr.length){
            result += 1;
        }
    }
    return result;
}
