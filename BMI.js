function check(){
    let a=document.getElementById("weight").value
    let b=document.getElementById("height").value
    BMI=a/b
    if(BMI<18.5){
        document.getElementById("result").innerHTML=`underweight`
    }else if(BMI>=18.5&&BMI<=25){
        document.getElementById("result").innerHTML=`Normal`
    }else if(BMI>=25&&BMI<30){
        document.getElementById("result").innerHTML=`Overweight`
    }else {
        document.getElementById("result").innerHTML=`Obese`
    }
}