let listDokter = document.getElementById("listDokter")
const form = document.querySelector("#form")
const content = document.querySelector(".content")
const inputSearch = document.querySelector("#search")

let API_URL = "https://634e0bc1f34e1ed8268232fd.mockapi.io/dokter";

let getDataDokter = async (URL) => {
    let response = await fetch(URL)
    let dokter = await response.json()
  
    // menampilkan 10 data digimon
    dokter.forEach((item, index) => {
        console.log(item)
        listDokter.innerHTML +=
        `<div class="card m-5 mb-3 listDokter shadow p-4 mb-6 bg-body rounded" style="max-width: 540px;">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${item.avatar}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">Nama : ${item.name}</h5>
                <p class="card-text">NIP : ${item.id}</p>
                <p class="card-text">Keahlian : ${item.Keahlian}</p>
                <p class="card-text">Alamat : ${item.Alamat}</p>
                <p class="card-text">No.Hp : ${item.noHp}</p>
                </div>
            </div>
            </div>
        </div>`
    })
  };

  // Article Search List Start
const getSearchDokter = async (URL) => {
    const response = await fetch(URL);
    const dokter = await response.json();
    let html = ``;
  
    dokter.forEach((item, index) => {
      let htmlList = 
      `<div class="card mt -1 m-5 mb-3 listDokter shadow p-4 mb-6 bg-body rounded" style="max-width: 540px;">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${item.avatar}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">Nama : ${item.name}</h5>
                <p class="card-text">NIP : ${item.id}</p>
                <p class="card-text">Keahlian : ${item.Keahlian}</p>
                <p class="card-text">Alamat : ${item.Alamat}</p>
                <p class="card-text">No.Hp : ${item.noHp}</p>
                </div>
            </div>
            </div>
        </div>`
      html += htmlList;
      listDokter.innerHTML = html;
    });
  };

  getDataDokter(API_URL)


  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let SEARCH_URL = "https://634e0bc1f34e1ed8268232fd.mockapi.io//dokter?name=";
    const searchValue = inputSearch.value;
    getSearchDokter(SEARCH_URL + searchValue);
  });