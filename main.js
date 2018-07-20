// Program simulation
var hotels = [hotel1, hotel2, hotel3, hotel4, hotel5, hotel6];
var bookedGrand = 0;
var bookedMarriott = 0;
var bookedRegency = 0;
var bookedCassa = 0;
var bookedRenaissance = 0;
var bookedPlaza = 0;

for(var i=1; i<=200; i++){
  var ranNumber = Math.round(Math.random()*9);
  if(ranNumber == 0){
    bookedGrand = bookedGrand +1;
  }
  else if(ranNumber == 1){
    bookedMarriott = bookedMarriott +1;
  }
  else if(ranNumber == 2){
    bookedRegency = bookedRegency +1;
  }
  else if(ranNumber == 3){
    bookedCassa = bookedCassa +1;
  }
  else if(ranNumber == 4){
    bookedRenaissance = bookedRenaissance +1;
  }
  else if(ranNumber == 5){
    bookedPlaza = bookedPlaza +1;
  }
}


function hotel(name,rooms,booked) {
  this.name = name,
  this.rooms = rooms,
  this.booked = booked,
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  }
};

var hotel1 = new hotel('Grand Hyatt', 140, bookedGrand);
var hotel2 = new hotel('Marriott', 120, bookedMarriott);
var hotel3 = new hotel('Hyatt Regency', 140, bookedRegency);
var hotel4 = new hotel('Cassa', 100, bookedCassa);
var hotel5 = new hotel('Renaissance', 150, bookedRenaissance);
var hotel6 = new hotel('Plaza', 130, bookedPlaza);

document.getElementById('hotelinfo1').innerHTML = 'Room Capacity: '+ hotel1.rooms
+ '</br>Rooms booked: '+ hotel1.booked + '</br>'+hotel1.checkAvailability()
+ ' rooms still available';

document.getElementById('hotelinfo2').innerHTML = 'Room Capacity: '+ hotel2.rooms
+ '</br>Rooms booked: '+ hotel2.booked + '</br>'+hotel2.checkAvailability()
+ ' rooms still available';

document.getElementById('hotelinfo3').innerHTML = 'Room Capacity: '+ hotel3.rooms
+ '</br>Rooms booked: '+ hotel3.booked + '</br>'+hotel3.checkAvailability()
+ ' rooms still available';

document.getElementById('hotelinfo4').innerHTML = 'Room Capacity: '+ hotel4.rooms
+ '</br>Rooms booked: '+ hotel4.booked + '</br>'+hotel4.checkAvailability()
+ ' rooms still available';

document.getElementById('hotelinfo5').innerHTML = 'Room Capacity: '+ hotel5.rooms
+ '</br>Rooms booked: '+ hotel5.booked + '</br>'+hotel5.checkAvailability()
+ ' rooms still available';

document.getElementById('hotelinfo6').innerHTML = 'Room Capacity: '+ hotel6.rooms
+ '</br>Rooms booked: '+ hotel6.booked + '</br>'+hotel6.checkAvailability()
+ ' rooms still available';

// load events with message
var msg = '<div id="msgNote"><a id="close" href="#"> &#9746</a>';
msg+= '<img id="AdPic" src="img/event.jpg"/>'
msg+= '<h3>Simply enter this code at checkout</h3>';
msg+= '<div id="code">Code: HEEKYUNG <br/>'
msg+= '<a href="#section-a" class="button">Find hotel</a></div>'
msg+= '<p>&#x2713; this code is only availble on  online</p></div>';
// a new division for the background-color
var elNote = document.createElement('div');
elNote.setAttribute('id','note');
elNote.innerHTML = msg;
document.body.appendChild(elNote);
// a function to close the note message
function dismissNote(){
  document.body.removeChild(elNote);
}
var elClose = document.getElementById('close');
elClose.addEventListener('click',dismissNote,false);
