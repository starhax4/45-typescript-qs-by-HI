
let guestList = ["Ayyan","Ali","Raffi","hamza","rizwan"];
for (var i = 0; i < guestList.length; i++) {
    console.log('Respected    ' + guestList[i] + '\nI would like to invite you to dinner tomorrow. \n Thank You\n');
}

let not_present : string = 'Ali';
let new_guest : string = "Faisal"
guestList.push(new_guest)
let index:number = guestList.indexOf(not_present)

guestList.splice(index,1)
for (var i = 0; i < guestList.length; i++) {
    console.log('Respected ' + guestList[i] + '\nI would like to invite you to dinner tomorrow. \n Thank You\n');
}