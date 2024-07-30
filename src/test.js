function mergeSort(arr) {
    const mid = Math.trunc(arr.length / 2);
    if (arr.length == 0) {
        return "empty array!!";
    } else if (arr.length == 1) {
        return arr;
    }
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid, arr.length);
    // const CompLArr = mergeSort(leftArr);
    // const CompRArr = mergeSort(rightArr);
    // return merge(CompLArr, CompRArr);
    return merge(mergeSort(leftArr), mergeSort(rightArr));

}

function merge(arr1, arr2) {//1,2,4
    let compArr = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            compArr.push(arr1[i]);
            i++;
        } else {
            compArr.push(arr2[j]);
            j++;
        }
    }//end while
    for (; i < arr1.length; i++) {
        compArr.push(arr1[i]);
    }
    for (; j < arr2.length; j++) {
        compArr.push(arr2[j]);
    }
    return compArr;
}

const arrTest = [3, 2, 1, 13, 8, 5, 0, 1];
const finalArr = mergeSort(arrTest);
for (let i = 0; i < finalArr.length; i++) {
    console.log(finalArr[i]);
}

// export function fillTest() {
//     let a = 5 / 2;
//     console.log(Math.trunc(a));
// }