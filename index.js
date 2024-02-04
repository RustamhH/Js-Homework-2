// 1. Write a function that takes 2 numbers and returns -1 if the first is less than the second; 1 – if the first
// more than the second; and 0 – if the numbers are equal.

// function compare(num1, num2){
//     if(num1 > num2){
//         return 1;
//     }
//     else if(num1 == num2){
//         return 0;
//     }
//     return -1;
// }
// console.log(compare(1,2))


// 2. Write a function that calculates the factorial of the number passed to it.

// function factorial(num){
//     let multiply = 1;
//     for(let i = 1; i <= num; i++){
//         multiply *= i;
//     }
//     console.log(multiply)
// }
// factorial(5)


// 3. Write a function that takes three separate
// numbers and turns them into one number. For example: numbers
// 1, 4, 9 will turn into the number 149.

// function toNumber(num1,num2,num3){
//     return 100 * num1 + 10 * num2 + num3;        
// }

// console.log(toNumber(1,4,2))




// 4. Write a function that takes length and width
// rectangle and calculates its area. If in the function
// passed 1 parameter, then it calculates the area of the square.

// function calculateArea(len, width) {
//     if (width == null) {
//         return len * len; 
//     } 
//     return len * width; 
    
// }
// console.log(calculateArea(5))




// 5. Write a function that checks whether the number passed to it is perfect. A perfect number is a number equal to the sum of all its own divisors.

// function perfect(number) {
//     let divisorSum=0
//     for (let i = 1; i < number; i++) {
//         if(number%i==0){
//             divisorSum+=i;
//         }
//     }
//     if(divisorSum==number) console.log("PERFECT")
//     else console.log("NOT PERFECT")
// }

// perfect(prompt("Number: "))






// 6. Write a function that takes the minimum and
// maximum value for the range, and only outputs
// those numbers from the range that are perfect.
// Use the function you wrote earlier to find out
// perfect number or not.


// function perfect(min,max) {
//     for (let j = min; j <=max; j++) {
//         let divisorSum=0
//         for (let i = 1; i < j; i++) {
//             if(j%i==0){
//                 divisorSum+=i;
//             }
//         }
//         if(divisorSum==j) console.log(j)
//     }
// }

// let min=prompt("MIN: ")
// let max=prompt("MAX: ")
// perfect(min,max)






// 7. Write a function that takes the time (hours, minutes, seconds) and displays it on the screen in the format “hh:mm:ss”.
// If the minutes and/or seconds were not present when calling the function
// transmitted, then output them as 00.


// var d = new Date();
// var n = d.toLocaleTimeString();
// alert(n)







// 8. Write a function that takes hours, minutes and seconds and returns that time in seconds.


// function timetosec() {
//     hms = prompt("Enter Hours Minutes And Seconds , use : symbol between")
//     const [hours, minutes, seconds] = hms.split(':');
//     const totalSeconds = (+hours) * 60 * 60 + (+minutes) * 60 + (+seconds);
//     alert(totalSeconds); 
// }
// timetosec()






// 9. Write a function that takes the number of seconds, converts them to hours, minutes and seconds and returns them to as the string "hh:mm:ss".

// function sectotime() {
//     seconds = prompt("seconds: ")
//     const date = new Date(null);
//     date.setSeconds(seconds);
//     const result = date.toISOString().slice(11, 19);
//     alert(result)
// }
// sectotime()







// 10. Write a function that calculates the difference between dates.
// The function takes 6 parameters that describe 2
// dates, and returns the result as the string “hh:mm:ss”. At
// to complete the task, use the functions from the previous 2 tasks: first convert both dates to seconds,
// find out the difference in seconds, and then convert the difference
// back to "hh:mm:ss".


// function diffdate() {
//     hms1 = prompt("1: Enter Hours Minutes And Seconds , use : symbol between")
//     const [hours1, minutes1, seconds1] = hms1.split(':');
//     const totalSeconds1 = (+hours1) * 60 * 60 + (+minutes1) * 60 + (+seconds1);
//     hms2 = prompt("2: Enter Hours Minutes And Seconds , use : symbol between")
//     const [hours2, minutes2, seconds2] = hms2.split(':');
//     const totalSeconds2 = (+hours2) * 60 * 60 + (+minutes2) * 60 + (+seconds2);
//     let seconds =totalSeconds1-totalSeconds2
//     const date = new Date(null);
//     date.setSeconds(seconds);
//     const result = date.toISOString().slice(11, 19);
//     alert(result)
// }

// diffdate()







// 11.Create an array "Shopping list". Each element of the array
// is an object that contains the product name, quantity required and purchased or not. Write several functions to work with such an array.
// 1) Display the entire list on the screen in such a way that first
// There were unpurchased products, and then purchased ones.
// 2) Adding a purchase to the list. Please note that when adding
// purchases with a product already existing in the list, it is necessary to increase the quantity in the existing purchase,
// rather than adding a new one.
// 3) Purchasing a product. The function takes the product name
// and marks it as purchased.


// let ShoppingList=[{productName:"Cola",quantity:5,purchased:true},{productName:"Winston",quantity:2,purchased:false},{productName:"Lays",quantity:15,purchased:false}]

// function display() {
//     ShoppingList.sort((a, b) => {
//         if (a.purchased && !b.purchased) {
//           return 1;
//         }
//         if (!a.purchased && b.purchased) {
//           return -1;
//         }
//         return 0;
//     });
      
//     ShoppingList.forEach(item => {
//         console.log(`Name: ${item.productName}\nQuantity: ${item.quantity}\nPurchased: ${item.purchased}\n\n`);
//     });
// }

// function addProduct(product) {
//     for (let i = 0; i < ShoppingList.length; i++) {
//         if(product.productName==ShoppingList[i].productName) {
//             ShoppingList[i].quantity+=1;
//             break;
//         }
//         else {
//             ShoppingList.push(product)
//             break;
//         }
//     }
// }

// function purchase(name) {
//     for (let i = 0; i < ShoppingList.length; i++) {
//         if(name==ShoppingList[i].productName && ShoppingList[i].purchased==false){
//             ShoppingList[i].purchased=true;
//             break;
//         }
//     }
// }


// addProduct({productName:"Fanta",quantity:5,purchased:false})
// display()
// purchase("Fanta")
// display()









//  12.Create an array describing a receipt in a store. Each element of the array consists of the product name, quantity and price for
//  unit of goods. Write the following functions.
//  1) Print out the receipt on the screen.
//  2) Calculation of the total purchase amount.
//  3) Receiving the most expensive purchase in the receipt.
//  4) Calculation of the average cost of one product in a receipt.




// let ReceiptList=[{productName:"Cola",quantity:5,price:1200},{productName:"Winston",quantity:2,price:2500},{productName:"Lays",quantity:15,price:300}]

// function print() {
//     ReceiptList.forEach(item => {
//         console.log(`Name: ${item.productName}\nQuantity: ${item.quantity}\nPrice: ${item.price}\n\n`);
//     });
// }

// function total() {
//     let sum=0;
//     ReceiptList.forEach(item => {
//         sum+=item.quantity*item.price;
//     });
//     console.log(sum)
// }

// function max() {
//     let maxpurchase=ReceiptList[0]
//     for (let i = 0; i < ReceiptList.length; i++) {
//         if(maxpurchase.price * maxpurchase.quantity<ReceiptList[i].price*ReceiptList[i].quantity){
//             maxpurchase=ReceiptList[i]
//         }
//     }
//     console.log(`Name: ${maxpurchase.productName}\nQuantity: ${maxpurchase.quantity}\nPrice: ${maxpurchase.price}\n\n`);
// }

// function avg() {
//     let avgcost=0

//     ReceiptList.forEach(item => {
//         avgcost+=item.price*item.quantity;
//     });
//     console.log(parseInt(avgcost/ReceiptList.length))
// }

// print()
// total()
// max()
// avg()







//  13.Create an array of academy audiences. The audience object consists of a name, number of seats (from 10 to 20) and
//  the name of the faculty for which it is intended.
//  Write several functions to work with it.
//  1) Display all audiences.
//  2) Display the audiences for the specified faculty.
//  3) Display only those audiences that are suitable for
//  transferred group. A group object consists of a name,
//  number of students and name of faculty.
//  4) Function of sorting audiences by number of seats.
//  5) Function of sorting audiences by name (alphabetically)


// let AudienceList = [
//     { name: "D", numberOfSeat: 15, faculty: "Chemstry"},
//     { name: "X", numberOfSeat: 17, faculty: "History"},
//     { name: "A", numberOfSeat: 19, faculty: "Maths"},
// ];


// function display() {
//     AudienceList.forEach(element => {
//         console.log(`Name: ${element.name}\nSeat: ${element.numberOfSeat}\nFaculty: ${element.faculty}\n\n`)
//     });
// }

// function facul(name) {
//     AudienceList.forEach(element => {
//         if(name==element.name) console.log(`Name: ${element.name}\nSeat: ${element.numberOfSeat}\nFaculty: ${element.faculty}\n\n`)
//     });
// }

// function sortnumber() {
//     AudienceList.sort((a, b) => a.numberOfSeat - b.numberOfSeat);
//     display()
// }

// function sortname() {
//     AudienceList.sort((a, b) => a.name.localeCompare(b.name));
//     display()
// }

// function groupTransfer(group) {
//     for (let i = 0; i < AudienceList.length; i++) {
//         if(group.studentCount<=AudienceList[i].numberOfSeat){
//             console.log(`Name: ${AudienceList[i].name}\nSeat: ${AudienceList[i].numberOfSeat}\nFaculty: ${AudienceList[i].faculty}\n\n`)
//         }
//     }
// }

// display()
// facul("Ceni")
// sortnumber()
// sortname()
//groupTransfer({name:"Grup1",studentCount:16,faculty:"Physics"})