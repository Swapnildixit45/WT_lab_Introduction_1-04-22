var sample = prompt("Enter the sample composition");
var blood = prompt("Enter the blood composition");

m = sample.length;
n = blood.length;

var i=0,j=0;

while(j<m && i<n)
{
  if(sample[j] == blood[i])
    {
     j++;
    }
  i++;
}

if(j==m) console.log("positive");
else console.log("negative");