/*
const editButtons = document.querySelectorAll('.edit-button');

editButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const row = button.closest('tr'); 

    row.contentEditable = true;
    row.classList.add('editable-row');

    button.style.display = 'none';
    const saveButton = document.createElement('button');
    saveButton.add;
    
    saveButton.addEventListener('click', () => {
      row.contentEditable = false;
      row.classList.remove('editable-row');
      button.style.display = 'inline'; 
      saveButton.remove(); 
    });

    const saveCell = document.createElement('td');
    saveCell.appendChild(saveButton);
    row.appendChild(saveCell);
  });
});

*/

 const apiUrl = "https://randomuser.me/api/";


axios.get(apiUrl).then(
  response => {
    const respdata = response.data;
    const respdataName = response.data.results[0].name.first;
    const respdataLastName = response.data.results[0].name.last;
    const respdataJob = response.data.results[0].login.username;
    const respdataAge = response.data.results[0].dob.age;
    const respdataCell = response.data.results[0].cell;
    const respdataAddress = response.data.results[0].location.city + ' / ' + response.data.results[0].location.country ;

    console.log(respdata);
    console.log(" Ad : " + respdataName);
    console.log(" Soyad : " + respdataLastName);
    console.log(" Meslek : " + respdataJob);
    console.log(" Yaş : " + respdataAge);
    console.log(" Telefon : " + respdataCell);
    console.log(" Adres : " + respdataAddress);
    });

