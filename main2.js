
// let a=+prompt("Перше число");
// let b=+prompt("Друге число");
// function minNumb() {
//     if(a<b) return(console.log(-1));
//     if(a>b) return(console.log(1));
//     if(a==b) return(console.log(0));
// }
// minNumb();



// let a=+prompt("factorial");
// let b=1;
// function factorial() {
//     for(; a>1; a--){
//         b=b*a;
//     }
//     console.log(b);
// }
// factorial();




// let b ="";
// function couple() {
//     for(;b.length<=2;){
//     let a =prompt("number");
//     b+=a;
//     }
//     console.log(b);
// }
// couple();




// function rectangle() {
//     let a =+prompt("Довжина");
//     let b =+prompt("Ширина");
//     if (!b)
//     console.log(a*a);
//     else
//     console.log(a*b);
// }
// rectangle();




// function superNumber() {
//     let a=+prompt("number");
//     let i=1;
//     let b=0;
//     for(i; a>i; i++){
//         if(a%i==0)
//         b+=i;
//     }
//     if(b==a)
//         console.log(a+" Досконале");
//         else
//         console.log(a+" Не досконале");

// }
// superNumber();





// function superNumber(a) {
//     let i=1;
//     let b=0;
//     for(i; a>i; i++){
//         if(a%i==0)
//         b+=i;
//     }
//     if(b==a)
//         console.log(a+" Досконале");
// }
// function minMax() {
//     let nMin=+prompt("Min");
//     let nMax=+prompt("Max");
//     let nNum=0;
//     for(nMin; nMin<nMax; nMin++){
//     nNum=nMin;
//     superNumber(nNum);
//     }
// }
// minMax();




// function time() {
//     let h=+prompt("Hour");
//     let m=+prompt("Minute");
//     let s=+prompt("Second");
//     let zero="0";
//     if(h<=9)
//     h=zero+h;
//     if(m<=9)
//     m=zero+m;
//     if(s<=9)
//     s=zero+s;
//     console.log(h+':'+m+':'+s);
//     alert(h+':'+m+':'+s)
// }
// time();




// function timeT() {
//     let h=+prompt("Hour");
//     let m=+prompt("Minute");
//     let s=+prompt("Second");
//     let seconds=0;
//     seconds=(h*3600)+(m*60)+s;
//     console.log(`Равно ${seconds} секунд`);
// }
// timeT();





// function timeUp() {
//     let a=+prompt("seconds");
//     let i=0;
//     let secHour=3600;
//     for(i;secHour<=a; i++){
//         a=a-secHour;
//         // console.log(i+" hour "+a+" sec");
//     }
//     let j=0;
//    for(j; a>=60; j++){
//     a=a-60;
//     // console.log(j+" minut "+a+" sec");
//    }
//    console.log(i+" hours "+j+" minutes "+a+" seconds");
// }
// timeUp();







// function allTime() {
//         timeT(+prompt("Hour 1"),prompt("Minute 1"),+prompt("Second 1"),+prompt("Hour 2"),prompt("Minute 2"),+prompt("Second 2"));
//     }
// allTime();

// function timeT(h,m,s,hd,md,sd) {
//     let seconds=0;
//     let doubleSecond=0;
//     seconds=(h*3600)+(m*60)+s;
//     doubleSecond=(hd*3600)+(md*60)+sd;
//     if(seconds>doubleSecond)
//     seconds=seconds-doubleSecond;
//     else
//     seconds=doubleSecond-seconds;
//     console.log(`Равно ${seconds} секунд`);
//     timeUp(seconds);
// }

// function timeUp(a) {
//     let i=0;
//     let secHour=3600;
//     for(;secHour<=a; i++){
//         a=a-secHour;
//         // console.log(i+" hour "+a+" sec");
//     }
//     let j=0;
//    for(j; a>=60; j++){
//     a=a-60;
//     // console.log(j+" minut "+a+" sec");
//    }
//    console.log(i+" hours "+j+" minutes "+a+" seconds");
// }
