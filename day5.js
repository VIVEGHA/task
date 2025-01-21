let age=45;

if(age>=18 && age<=89){
    console.log("eligible to vote");
}
else if(age >= 90){
    console.log("senior citizen ");
}
else{
    console.log("not eligible to vote");

}
  task 1
let sam="e"
switch(sam){
   case 'a' :
    console.log("vowel");
    break;
case 'e':
    console.log("vowel");
    break;
case 'i':
    console.log("vowel");
    break;
case 'o':
    console.log("vowel");
    break;
case 'u':
    console.log("vowel");
    break;
default:
    console.log("not a vowel");
} 
    task 2
let num=-10;
if (num>=0){
    console.log("positive");
}
else{
    console.log("negative");
}
    
let num=1;
if(num%2==0){
    console.log("even number ");
}
else{
    console.log("odd number ");
}
let mark = prompt("enter mark");

switch (true) { 
    case (mark > 0 && mark <= 35):
        console.log("fail");
        break;
    case (mark >= 36 && mark <= 50):
        console.log("C grade");
        break;
    case (mark >= 51 && mark <= 70):
        console.log("B grade");
        break;
    case (mark >= 71 && mark <= 90):
        console.log("A grade");
        break;
    case (mark >= 91 && mark <= 100):
        console.log("O grade");
        break;
    default:
        console.log("Invalid marks");
} 
let mark=prompt("enter mark");
if (mark > 0 && mark <= 35){
    console.log("fail");
}
else if(mark >= 36 && mark <= 50){
    console.log("C grade");
}
else if(mark >= 51 && mark <= 70){
    console.log("B grade");
}
else if(mark >= 71 && mark <= 90){
    console.log("A grade");
}
else if(mark >= 91 && mark <= 100){
    console.log("O grade");
}
else{
    console.log("Invalid marks");
}
    //afternoon
for(i=0;i<50;i++){
    console.log(i);
}
for (i=0;i<=10;i++){
     console.log("5 * "+i+" = "+ 5*i);
}
     
for(i=50;i>0;i--){
    console.log(i);
}
let a=0;
for(let i=0;i<=50;i++){
    
    a+=i;
    
}
console.log(a);





for (i=0;i<=5;i++){
    let star=" ";
    for(j=0;j<=i;j++){
        star +="*";
    }
    console.log(star);
}
function add(a,b){
    return a+b;

}
c=add(10,20);
console.log(c);
let abc= (x,y)=>console.log( x+y);
abc(10,20);

function add(name,company){
    
    console.log("i'm "+name+" glared to meet to on this wonderfull fest .i'm a chief developer at "+company);

}
add("vivi","google");



