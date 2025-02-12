var guestList = ['Nico', 'Nico 1', 'Nico 2', 'Nico 3', 'Nico 4'];

var guestName = prompt('What is your name ?');

if (guestList.includes(guestName)) {
  console.log('Welcome');
} else {
  alert('No name found');
}
