
var incomeInput = document.getElementById("incomeInput");

var salary;

var monthlyPay;

var weeklyPay;

var dailyPay;

var hourlyPay;

var minutePay;

var secondPay;


incomeInput.addEventListener("keyup",function(){
  
 salary = incomeInput.value;
 monthlyPay = salary / 12;
 weeklyPay = monthlyPay / 4;
 dailyPay = (weeklyPay / 7).toFixed(2);
 hourlyPay = (dailyPay / 24).toFixed(2);
 minutePay = (hourlyPay / 60).toFixed(2);
 secondPay = (minutePay / 60).toFixed(2);
  
});

var displayInfo = document.getElementById("showDetails");

var taxBasicRate = 0.2;

var taxHigherRater = 0.4;

var taxAdditionalRate = 0.45;

var nIBasicRate = 0;

var nIHigherRate = 0.12;

var nIAdditionalRate = 0.02;

var output1;
var output2





function payCalculator(salary) {

    
  if (salary <= 12500) {
    
  output1 = `Yearly:  ${salary} <br> 
  Monthly: ${monthlyPay} <br> 
  Weekly: ${weeklyPay} <br>
  Daily: ${dailyPay} <br>
  hourly: ${hourlyPay} <br>
  minute: ${minutePay} <br>
  second: ${secondPay}`;

  console.log(output1);
  
  displayInfo.innerHTML = output1;
  
  } else if (salary <= 50000) {
    
    output1 = `Yearly:  ${salary} <br> 
  Monthly: ${monthlyPay} <br> 
  Weekly: ${weeklyPay} <br>
  Daily: ${dailyPay} <br>
  hourly: ${hourlyPay} <br>
  minute: ${minutePay} <br>
  second: ${secondPay}`;

  calcTax(salary,taxBasicRate);
salary = monthlyPay * 12;
  console.log(salary + " " + monthlyPay)

  output2 = `<br><br>Yearly:  ${salary} <br> 
  Monthly: ${monthlyPay} <br> 
  Weekly: ${weeklyPay} <br>
  Daily: ${dailyPay} <br>
  hourly: ${hourlyPay} <br>
  minute: ${minutePay} <br>
  second: ${secondPay}`;

  displayInfo.innerHTML = output1  + output2;

    
  } else if (salary <= 150000) {
    
    displayInfo.innerHTML = "150000 limit - Salary: " + salary;
    
  } else {
    
    
    
    
  }
  
  
}



incomeInput.addEventListener("keyup",function(){
  
 payCalculator(salary);
  
});

function calcTax(salary,taxRate) {

salary = salary - (10000000);
console.log(salary)

monthlyPay = monthlyPay - (monthlyPay * taxRate);

weeklyPay = weeklyPay - (weeklyPay * taxRate);

dailyPay = dailyPay - (dailyPay * taxRate);

hourlyPay = hourlyPay - (hourlyPay * taxRate);

minutePay = minutePay - (minutePay * taxRate);

secondPay = secondPay - (secondPay * taxRate);


}