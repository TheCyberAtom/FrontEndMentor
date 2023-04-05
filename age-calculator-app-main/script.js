const invalidDay = document.querySelector('.invalid-day');
const invalidMonth = document.querySelector('.invalid-month');
const invalidYear = document.querySelector('.invalid-year');
const dayLabel = document.getElementById('day-label');
const monthLabel = document.getElementById('month-label');
const yearLabel = document.getElementById('year-label');

const today = new Date();
let currentDay = today.getDate();
let currentMonth = today.getMonth() + 1;
let currentYear = today.getFullYear();

function dayMonthChecker(day, month){
    day = +day;
    switch(+month){
        case 1: if(day>=1 && day<=31) return true;
        case 2: if(day>=1 && day<=28) return true;
        case 3: if(day>=1 && day<=31) return true;
        case 4: if(day>=1 && day<=30) return true;
        case 5: if(day>=1 && day<=31) return true;
        case 6: if(day>=1 && day<=30) return true;
        case 7: if(day>=1 && day<=31) return true;
        case 8: if(day>=1 && day<=31) return true;
        case 9: if(day>=1 && day<=30) return true;
        case 10: if(day>=1 && day<=31) return true;
        case 11: if(day>=1 && day<=30) return true;
        case 12: if(day>=1 && day<=31) return true;
        default: return false;
    }
}

function applyStyles(input, label, invalidText, msg){
    input.style.border = '1px solid hsl(0, 100%, 67%)';
    label.style.color = 'hsl(0, 100%, 67%)';
    invalidText.innerText = msg;
}
function removeStyles(input, label, invalidText){
    input.style.border = '1px solid hsl(0, 0%, 86%)';
    label.style.color = 'hsl(0, 1%, 44%)';
    invalidText.innerText = "";
}

function isValidDate(dayEle, monthEle, yearEle){
    const day = dayEle.value;
    const month = monthEle.value;
    const year = yearEle.value;
    let validCount = 0;

    if(day == undefined || day == null || day == ""){
        validCount++;
        applyStyles(dayEle, dayLabel,invalidDay, "This field is required.");
    }else if(!dayMonthChecker(day, month)){
        validCount++;
        applyStyles(dayEle, dayLabel, invalidDay, "Must be a valid day.");
    }else{
        removeStyles(dayEle, dayLabel, invalidDay);
    }

    if(month == undefined || month == null || month == ""){
        validCount++;
        applyStyles(monthEle, monthLabel, invalidMonth, "This field is required.");
    }else if(month<1 || month>12){
        validCount++;
        applyStyles(monthEle, monthLabel, invalidMonth, "Must be a valid month.");
    }else{
        removeStyles(monthEle, monthLabel, invalidMonth);
    }

    if(year == undefined || year == null || year == ""){
        validCount++;
        applyStyles(yearEle, yearLabel, invalidYear, "This field is required.");
    }else if(year>currentYear){
        validCount++;
        applyStyles(yearEle, yearLabel, invalidYear, "Must be in past.");
    }else{
        removeStyles(yearEle, yearLabel, invalidYear);
    }

    return validCount;
}

function displayCalculatedAge(birthDay, birthMonth, birthYear){

    let birthDate = birthYear+"-"+birthMonth+"-"+birthDay;
    const birthdateDateObj = new Date(birthDate);

    let ageYears = today.getFullYear() - birthdateDateObj.getFullYear();
    let ageMonths = today.getMonth() - birthdateDateObj.getMonth();
    let ageDays = today.getDate() - birthdateDateObj.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }
    if (ageDays < 0) {
      const monthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
      console.log("monthAge ", monthAgo);
      ageDays += Math.floor((today - monthAgo) / (1000 * 60 * 60 * 24));
      ageMonths--;
    }
    console.log(ageYears + " years " + ageMonths + " months " + ageDays + " days");

    if(ageDays < 10) ageDays=`0${ageDays}`;
    if(ageMonths < 10) ageMonths=`0${ageMonths}`;
    if(ageYears < 10) ageYears=`0${ageYears}`;

    document.getElementById('output-day').innerHTML = ageDays;
    document.getElementById('output-month').innerHTML = ageMonths;
    document.getElementById('output-year').innerHTML = ageYears;
}

const calculateAge = () => {
    const day = document.getElementById('day');
    const month = document.getElementById('month');
    const year = document.getElementById('year');

    console.log("BirthDate : ", day.value, month.value, year.value);
    console.log("current Date : ",currentDay, currentMonth, currentYear);

    const validCount = isValidDate(day, month, year);
    
    if(validCount == 0){
        displayCalculatedAge(day.value, month.value, year.value);
    } else{
        document.getElementById('output-day').innerHTML = "--";
        document.getElementById('output-month').innerHTML = "--";
        document.getElementById('output-year').innerHTML = "--";
    }

}