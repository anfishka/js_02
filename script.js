//1) Принять у пользователя число до тех пор пока он не введет число Pi
function notPi()
{
    let pi = 3.14;
    let inputVal; 
    do{ 
        inputVal =  parseFloat(prompt("Enter any float value: ", "")); 
        console.log(`Entered num: ${inputVal}`)
    }while(inputVal != pi)
      
}

//2) Принять массив пользовательской длины и вывести сумму всех четных значений 
function sumEvenNums()
{
    let arrLength = parseInt(prompt("Enter length of arr", ""));
    let userArr = [];
    let sum =0;
    for(i=0; i < arrLength; i++){
    let val = parseInt(prompt("Enter val for arr", ""));
    userArr[i]=val;
    }
    for(i=0; i < arrLength; i++)
    { 
    if(userArr[i] % 2===0)
    {
    sum += userArr[i]
    }
     }
    console.log(sum)
}


//3) Принять у пользователя N количество имен и вывести самое короткое

function findShortestName()
{
    let arrLength = parseInt(prompt("Enter length of arr", ""));
    let userArr = [];
     
    for(i=0; i < arrLength; i++){
    let val = prompt("Enter name for filling arr", "");
    userArr[i]=val;
    }
    let shortestName = userArr[0]
    for(i=1; i < arrLength; i++)
    { 
    const currentName = userArr[i];
    if (currentName.length < shortestName.length) 
    {
        shortestName = currentName;
    }
    }

    console.log(shortestName)
}

//4) Принять у пользователя даты ( количество вводит пользователь)  и вывести разницу по гринвичу каждой
function differenceTimeUTC()
{
    let arrLength = parseInt(prompt("Enter length of arr", ""));
    let userArr = [];
     
    for(i=0; i < arrLength; i++){
    let date = new Date(prompt("Enter date: ", ""));
    userArr[i]=date;
    }

    for(i=1; i < arrLength; i++)
    { 
  
   console.log(userArr[i])
    }

   
}