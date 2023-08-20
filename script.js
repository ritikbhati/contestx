let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((contest) => {
  // console.log(contest)
  ihtml = " "
  for (item in contest) {
    console.log(contest[item])
    ihtml += ` 
    <div class="card mx-auto my-auto" style="width: 18rem;">
        <img src="https://www.freecodecamp.org/news/content/images/2022/12/main-image.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contest[item].name}</h5>
          <p class="card-text"> Start time:  ${contest[item].start_time}</p>
         <p class="card-text"> End time:  ${contest[item].end_time}</p>
          <a href="${contest[item].url}" target="_blank" class="btn btn-primary">Visit ${contest[item].site}</a>
        </div>
        </div>

`
  }
  cardContainer.innerHTML = ihtml
})