let date = new Date();
let monthNum = date.getMonth();
let nameOfMonth;
let place;

switch(monthNum){
    case 6: 
        nameOfMonth = 'July';
        place = 'Welcome Georgia!';
        break;
    case 7:
        nameOfMonth = 'August';
        place = 'Welcome Brazil!';
        break;
    case 8:
        nameOfMonth = 'September';
        place = 'Welcome Spain';
        break;
    case 9:
        nameOfMonth = 'October';
        place = 'Welcome France';
        break;   
}

let monthDiv = document.getElementById('month');
monthDiv.innerHTML = `${nameOfMonth}`;

let placeDiv = document.getElementById('phrase');
placeDiv.innerHTML = `${place}`
