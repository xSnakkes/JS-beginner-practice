printFirstNum([10, 20, 30, 50, 235, 3000]);

function printFirstNum(arr){
    for(let i = 0; i < arr.length; i++){
        let firstNum = String(arr[i]).slice(0,1);
        if (firstNum == 1){
            console.log(arr[i])
        } else if((firstNum == 2)) {
            console.log(arr[i])
        } else if((firstNum == 5)) {
            console.log(arr[i])
        }
    }
}