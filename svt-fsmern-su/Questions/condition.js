
function conditionex() {
    let score = 95;
    if(score >=90)  {
        console.log("grade A");
    } else if (score >=80)  {
        console.log("grade B");
    }
    else {
       console.log("grade c"); 
    }

    let result = score >=50 ?"pass" :"Fail";
    console.log(result);
}
module.exports = conditionex;