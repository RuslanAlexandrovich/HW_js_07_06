// function minNumber(a,b) {
//     if (a<b) return (a);
//     if (b<a) return (b);
//     if (a==b) return (a,b)
// }
// alert("Меньшее число "+minNumber(+prompt("Number1"),+prompt("Number2")))




// function numberX(a,b) {
//      for(let i=1; i<b; i++){
//         a=a*b;
//      }
//      return (a);
// }
// alert(numberX(+prompt("Number"),+prompt("numberX")))

// function numberX(a,b) {
//      return (a**b);
// }
// alert(numberX(+prompt("Number"),+prompt("numberX")))




// function twoNumbers(a,n,b) {
//     let answer;
//     switch (n) {
//         case "+": answer = (a+b);
//             break;
//         case "-": answer = (a-b);
//             break;
//         case "*": answer = (a*b);
//             break;
//         case "/": answer = (a/b);
//             break;
//     }
//     return (answer);
// }
// alert(twoNumbers(+prompt("number1"),prompt("+ - * /"),+prompt("number2")))




// function liteNumber(a,b) {
//     if(a%2!==0 && a%3!==0 || a==0||a==1||a==2||a==3) return(alert("Простое"));
//     if(a%2==0 && a%3==0) return(alert("Не простое"));
// }
// liteNumber(+prompt("Number"));




// function table(num) {
//     for (num; num<=9; num++){
//         for(let i=1; i<=10; i++){
//             console.log(`${num} * ${i} = ${num*i}`);
//         }
//     }
// }
// table(+prompt("Для какого числа?"));



// function divide(a,b,c,f) {
//     c=Math.trunc(a/b);
//     f=a-b*c;
//     return (console.log(f));
// }
// divide(+prompt("number1"),+prompt("number2"));




// let b = 0;
// function sum() {
//   let a = +prompt("Введите число:");
//   b += a;
// }
// for (let i = 0; i < 5; i++) {
//   sum();
//   let c =confirm("Еще одно?");
//   if(!c) {
//     break;
// }
// }
// console.log(b);



// for (let i=0; i<=5; i++){
//     minMax(+prompt("1"),+prompt("2"),+prompt("3"),+prompt("4"),+prompt("5"));
//     var p=confirm("Еще раз?");
//     if(!p){
//         break;
//     }
// }
// function minMax(a,b,c,d,e) {
//     if(a>=b && a>=c && a>=d && a>=e) return(console.log(a));
//     if(b>a && b>=c && b>=d && b>=e) return(console.log(b));
//     if(c>b && c>a && c>=d && c>=e) return(console.log(c));
//     if(d>b && d>c && d>a && d>=e) return(console.log(d));
//     if(e>b && e>c && e>d && e>a) return(console.log(e));
// }





// var a=+prompt("Число от");
// var b=+prompt("Число до");
// var y =confirm("Парні 'Ok' Непарні 'Cancel'");
// function even(a,b,y) {
//     if (b>a){
//         let i =a;
//         for(i; i<=b; i++){
//             if(y == true)
//             if(i%2==0){
//                 console.log("Парне "+i);
//             }
//             if(y == false)
//             if(i%2!==0){
//                 console.log("Не парне "+i);
//             }
//         }
// }
    
//     if(a>b){
//         for(b; b<=a; b++){
//             if(y == true)
//             if(b%2==0){
//                 console.log("Парне "+b);
//             }
//             if(y == false)
//             if(b%2!==0){
//                 console.log("Не парне "+b);
//             }
//         }
//     }

//     // if(a>b){
//     //     for(a; a>=b; a--){
//     //         if(y == true)
//     //         if(a%2==0){
//     //             console.log("Парне "+a);
//     //         }
//     //         if(y == false)
//     //         if(a%2!==0){
//     //             console.log("Не парне "+a);
//     //         }
//     //     }
//     // }
// }
// even(a,b,y);







//   let feb = 28;
//      let day = +prompt("Введите номер дня");
//      let mounth = +prompt("Введите номер месяца:");
//      let year = +prompt("Введите год в формате '2020' :");

//      happy();
//      function happy(){
//      if(day < 1 || day > 31 || mounth < 1 || mounth > 12 || mounth%2 !== 0 && day >= 31){
//         alert("Внимательней вводите данные!")
//      } else if (year%4 == 0 && year%100 !==0 && mounth == 2 && day > 29 || year%100 == 0 && year%400 == 0 && mounth == 2 && day > 29){
//         alert("Этот год высокосный, в феврале 29 дней!")
//      } 
//       else{
//         calendar();
//      }
//     }

//      function calendar(){

//         if (year%4 == 0 && year%100 !==0 || year%100 == 0 && year%400 == 0){
//             feb = 29;
//         } else {
//             feb = 28;
//         }
//         if (mounth == 2 && day == feb){
//             day = 1;
//             mounth = mounth+1;
//             year = year;
//         } 
//         else if(mounth == 2 && day > feb){
//             alert("В феврале меньше дней!")
//             day = "Начните";
//             mounth = "заново";
//             year = "пожалуйста!";
//         }
//         else if (mounth == 12 && day == 31){
//             day = 1;
//             mounth = 1;
//             year = year + 1;   
//         } 
//           else if (mounth == 1 && day == 30 || mounth == 3 && day == 30 || mounth == 5 && day == 30 || mounth == 7 && day == 30  || mounth == 9 && day == 30 || mounth == 11 && day == 30){
//             day = 1;
//             mounth = mounth + 1;
//             year = year;
//         } 
//         else if (mounth == 4 && day == 31 || mounth == 6 && day == 31 || mounth == 8 && day == 31 || mounth == 10  && day == 31){
//             day = 1;
//             mounth = mounth + 1;
//             year = year;
//         } 
//         else {
//             day = day + 1;
//             mounth = mounth;
//             year = year;
//         }
        
//     }    alert(`Завтра будет ${day}.${mounth}.${year}`)