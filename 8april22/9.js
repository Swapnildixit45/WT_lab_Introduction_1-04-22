let string = "";
for (let i = 10; i >= 1; i--) {
  for (let j = 1; j <= 10; j++) {
    if(j>i) string+="*";
    else string+=" ";
  }
  string += "\n";
}
console.log(string);