function myfunction() {
    var date1 = document.getElementById("input1").value;
    var date2 = document.getElementById("input2").value;
    var input1date = new Date(date1);
    console.log(input1date);
    var input2date = new Date(date2);
    console.log(input2date);
    var input1time = input1date.getTime();
    console.log(input1time);
    var input2time = input2date.getTime();
    console.log(input2time);
    
    let calc;
if(input1time > input2time ){
    calc=new Date(input1time - input2time);

}
else{
    calc = new Date(input2time - input1time);

}
console.log(calc);

var date = calc.getDate()+ "-" + (calc.getMonth()+1) + "-" + calc.getFullYear();
console.log(date);
 
var splitdate = date.split("-");
console.log(splitdate);

var day = Number (Math.abs(splitdate[0])-1);

var month = Number (Math.abs(splitdate[1])-1);

var year = Number (Math.abs(splitdate[2])-1970);

console.log(day);
console.log(month);
console.log(year);

var totaldays = (year*365)+(month*30.417)+ (day);

var totalmonth=(totaldays>=30.417)? totaldays/ 30.417:0;

var totalmilliseconds = totaldays*24*60*60*1000;

var totalseconds = totaldays*24*60*60;

var totalminutes = totaldays*24*60;
 
var totalhours = totaldays*24;

var totalweeks = (totaldays>=7) ? totaldays/7:0;

var totalyears = (totaldays>=365) ? totaldays/365:0;


var years =  ["year","years"];
var months = ["month","months"];
var days = ["day","days"];

var total = ((years==1)? year + " "  + years[0] + " " :(year>1)? year +" "+ years[1] + " " : " ")
+((month==1)? month + " "  + months[0] + " " : (month>1)? month +" "+ months[1] + " " : " ")
+((day==1)? day + " "  + days[0] + " " : (day>1)? day +" "+ days[1] + " " : " ");


document.getElementById("datecalc").innerHTML=" <p> Total number of  milliseconds : "+ Math.round(totalmilliseconds)+ " </p>" 
+ "<p>  Total number of seconds : "+Math.round(totalseconds)+ "</p>"
+ "<p>  Total number of minutes : "+Math.round(totalminutes)+ "</p>"
+ "<p>  Total number of hours : "+Math.round(totalhours)+ "</p>"
+ "<p>  Total number of days : "+Math.round(totaldays)+ "</p>"
+ "<p>  Total number of weeks : "+Math.round(totalweeks)+ "</p>"
+ "<p>  Total number of months : "+Math.floor(totalmonth)+ "</p>"
+ "<p>  Total number of years : "+Math.floor(totalyears)+ "</p>"
+ "<p>  Total number of years,months,days : "+total+ "</p>"



}