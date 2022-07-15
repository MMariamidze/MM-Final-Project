const main = document.getElementById('main');

GetData()

async function GetData() {
    const response = await fetch('https://randomuser.me/api?results=50');
    const {results} = await response.json();

    results.forEach(info =>{

        const user = document.createElement('div')
        user.classList.add('userInfo')

        user.innerHTML = `
            <div class="card">
            <div class="card-body">
            <div class ="cardimg">
            <img src ="${info.picture.large}" alt ="${info.name.first}">
            </div>
            <h2>${info.name.first} ${info.name.last}</h2>
            <p class="mscinfo">${ "connect:" + " " +info.email}</p>
            <p class="mscinfo">${"gender:" + " " + info.gender}</p>
            <p class="mscinfo">${"age:" + " " + info.dob.age}</p>
            <p class="mscinfo">${"country:" + " " + info.location.country}</p>
            <p class="mscinfo">${"city:" + " " + info.location.city}</p> 
            </div>    
            </div>
        `;
        main.appendChild(user)
    })
}
