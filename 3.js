var arr1 = [1,2,3,4];
var arr2 = [1,2,3,4];

for(var i=0;i<arr1.length;i++)
{
    for (var j=0;j<arr2.length;j++)
    {
        if(arr1[i]==arr2[j])
        console.log("Both arrays are equal");
    }
}