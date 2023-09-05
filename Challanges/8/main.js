//document.addEventListener("DOMContentLoaded", function () {
  const tableContainer = document.querySelector(".table-container");
  const columnNames = ["İsim", "Soyisim", "Meslek", "Yaş", "Telefon", "Adres", ""];

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  columnNames.forEach((columnName) => {
    const th = document.createElement("th");
    th.textContent = columnName;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);

  const table = document.createElement("table");
  table.appendChild(thead);

  const numberOfCalls = 5;

  for (let i = 0; i < numberOfCalls; i++) {
    axios.get("https://randomuser.me/api/").then((response) => {
      const respdata = response.data.results[0];
      const respdataName = respdata.name.first;
      const respdataLastName = respdata.name.last;
      const respdataJob = 'Erkek' //respdata.login.username;
      const respdataAge = respdata.dob.age;
      const respdataCell = respdata.cell;
      const respdataAddress = `${respdata.location.city} / ${respdata.location.country}`;

      const dataRow = document.createElement("tr");
      const dataValues = [respdataName, respdataLastName, respdataJob, respdataAge, respdataCell, respdataAddress];

      dataValues.forEach((dataValue) => {
        const td = document.createElement("td");
        td.textContent = dataValue;
        td.classList.add("data-list");
        dataRow.appendChild(td);
      });

      const editButton = document.createElement("button");
      const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgIcon.setAttribute("width", "15");
      svgIcon.setAttribute("height", "15");
      svgIcon.setAttribute("viewBox", "0 0 15 15");

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M13.02 5.548.357.357a.706.706 0 0 1 0 1l-.859.862-1.361-1.36.859-.859a.706.706 0 0 1 1 0zm-6.826 5.825 3.962-3.965 1.361 1.361-3.965 3.962a.706.706 0 0 1-.307.18l-1.727.489.493-1.727a.706.706 0 0 1 .18-.307zm4.821-6.826L5.19 10.369a2.109 2.109 0 0 0-.54.918l-.844 2.953a.709.709 0 0 0 .877.877l2.952-.844a2.133 2.133 0 0 0 .918-.54l5.825-5.823a2.126 2.126 0 0 0 0-3.005l-.357-.357a2.126 2.126 0 0 0-3.006-.001zM2.6 5.7A2.6 2.6 0 0 0 0 8.3v8.03a2.6 2.6 0 0 0 2.6 2.6h8.03a2.6 2.6 0 0 0 2.6-2.6v-3.31a.709.709 0 1 0-1.417 0v3.307a1.181 1.181 0 0 1-1.181 1.181H2.6a1.181 1.181 0 0 1-1.181-1.181V8.3A1.181 1.181 0 0 1 2.6 7.116h3.3a.709.709 0 0 0 0-1.416z");
      path.style.fill = "#adc5e2";

      svgIcon.appendChild(path);
      editButton.appendChild(svgIcon);
      editButton.classList.add("edit-button"); 


      /////////////////

      const saveButton = document.createElement("button");
      /*const svgIconSave = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgIconSave.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgIconSave.setAttribute("width", "14.997");
      svgIconSave.setAttribute("height", "15");
      svgIconSave.setAttribute("viewBox", "0 0 14.997 15");

      const pathSave = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathSave.setAttribute("d", "M1.607 34.143v10.714a.537.537 0 0 0 .536.536h10.714a.537.537 0 0 0 .536-.536v-8.22a.538.538 0 0 0-.157-.378l1.135-1.135A2.144 2.144 0 0 1 15 36.641v8.217A2.145 2.145 0 0 1 12.854 47H2.143A2.145 2.145 0 0 1 0 44.857V34.143A2.145 2.145 0 0 1 2.143 32h8.22a2.144 2.144 0 0 1 1.517.626l2.494 2.494-1.135 1.135-2.5-2.491-.027-.027v3.352a.8.8 0 0 1-.8.8h-6.43a.8.8 0 0 1-.8-.8v-3.482h-.539a.537.537 0 0 0-.536.536zm2.679-.536v2.679h4.821v-2.679zm1.071 8.036A2.143 2.143 0 1 1 7.5 43.786a2.143 2.143 0 0 1-2.143-2.143z");
      pathSave.style.fill = "#adc5e2";

      svgIconSave.appendChild(pathSave);
      SaveButton.appendChild(svgIconSave);*/

      saveButton.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="14.997" height="15" viewBox="0 0 14.997 15"> <path d="M1.607 34.143v10.714a.537.537 0 0 0 .536.536h10.714a.537.537 0 0 0 .536-.536v-8.22a.538.538 0 0 0-.157-.378l1.135-1.135A2.144 2.144 0 0 1 15 36.641v8.217A2.145 2.145 0 0 1 12.854 47H2.143A2.145 2.145 0 0 1 0 44.857V34.143A2.145 2.145 0 0 1 2.143 32h8.22a2.144 2.144 0 0 1 1.517.626l2.494 2.494-1.135 1.135-2.5-2.491-.027-.027v3.352a.8.8 0 0 1-.8.8h-6.43a.8.8 0 0 1-.8-.8v-3.482h-.539a.537.537 0 0 0-.536.536zm2.679-.536v2.679h4.821v-2.679zm1.071 8.036A2.143 2.143 0 1 1 7.5 43.786a2.143 2.143 0 0 1-2.143-2.143z" transform="translate(0 -32)" style="fill:#adc5e2"/> </svg>`;
      saveButton.classList.add("Save-button"); 
      saveButton.classList.add("disable"); 
      /////////////////

      const tdForButton = document.createElement("td");
      tdForButton.appendChild(editButton);
      tdForButton.appendChild(saveButton);
      dataRow.appendChild(tdForButton);

      const tbody = table.querySelector("tbody");
      if (!tbody) {
        const newTbody = document.createElement("tbody");
        newTbody.appendChild(dataRow);
        table.appendChild(newTbody);
      } else {
        tbody.appendChild(dataRow);
      }
    });
  }

  tableContainer.appendChild(table);
//});
/*
document.addEventListener('click', function(event) {
  const target = event.target;
  if (target.classList.contains('edit-button')) {
    const row = target.closest('tr');
    const cells = row.querySelectorAll('.data-list');

    cells.forEach((cell) => {
      const input = document.createElement('input');
      input.value = cell.textContent;
      cell.textContent = '';
      cell.appendChild(input);
    });
    /*
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Kaydet';
*/
document.addEventListener('click', function(event) {
  const target = event.target;
  if (target.classList.contains('edit-button')) {
    const row = target.closest('tr');
    const cells = row.querySelectorAll('.data-list');

    cells.forEach((cell) => {
      const input = document.createElement('input');
      input.value = cell.textContent;
      cell.textContent = '';
      cell.appendChild(input);
    });

    // Şimdi düzenleme düğmesini devre dışı bırakalım
    target.classList.add('disable');

    // Şimdi kaydet düğmesini etkinleştirelim
    const saveButton = row.querySelector('.Save-button');
    if (saveButton) {
      saveButton.classList.remove('disable');

      // Kaydet düğmesine tıklanma olayını dinle
      saveButton.addEventListener('click', function() {
        const inputs = row.querySelectorAll('input');
        inputs.forEach((input, index) => {
          cells[index].textContent = input.value;
        });

        // Inputları kaldır
        inputs.forEach((input) => {
          input.remove();
        });

        // Düzenleme düğmesini etkinleştir
        target.classList.remove('disable');

        // Kaydet düğmesini devre dışı bırak
        saveButton.classList.add('disable');
      });
    }
  }
});


/*
    saveButton.addEventListener('click', function() {
      const inputs = row.querySelectorAll('input');
      inputs.forEach((input, index) => {
        cells[index].textContent = input.value;
      });
      saveButton.classList.add('disable');
    });
*/
   // tdForButton.appendChild(SaveButton);
/*  }
});*/