let getFunction = function (number){
    if (number >= 0)
        return () => {console.log("Positive")};
    else
        return () => {console.log("Negative")};
}
getFunction(-2)();