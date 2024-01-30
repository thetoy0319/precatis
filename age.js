const birthdayEl = document.getElementById("birthday");
const btnCalculate_AgeEL = document.getElementById("Calculate_Age");
const resultEl = document.getElementById("result");

function getAge() {
    const currnatDate = new Date();
    
    const birthdayDate = new Date();
    console.log(birthdayEl)
    let age = currnatDate.getFullYear() - birthdayDate.getFullYear();
   
    const month = currnatDate.getMonth() - birthdayDate.getMonth();


    if (month < 0 || (month === 0 &&  currnatDate.getDate() < birthdayDate.getDate()))
    {
        return age;
}
}
console.log(("click", birthdayEl))

