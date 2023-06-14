const container = document.querySelector(".container");

fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const search = data.Search;
    for (let i = 0; i < search.length; i++) {
      container.innerHTML += ` <div class="container-item"><img src="${search[i].Poster}" alt="">
        <h3>${search[i].Title}</h3>
        <p>Year: ${search[i].Year}</p>  </div>`;
    }
  });
