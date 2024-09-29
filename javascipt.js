// Assignment No 8

var array = [4,5,1,3,2,6,9,8,7,10];
document.write(array + "<br>");

for (var i = 0; i < array.length; i++){
    for (var j = i + 1; j < array.length; j++){
        if (array[i] > array[j]){

            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}

document.write(array)


