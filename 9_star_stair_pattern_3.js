let n =4;
for(let i=0;i<n;i++){
    for(let j=0;j<i;j++){
        process.stdout.write(" ")
    }
    for(let k = n; k>i; k--){
        process.stdout.write("*")
    }
    console.log()
}