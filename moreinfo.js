let actorJSON = "../actors.json";

// fetching the data

fetch()
  .then((res) => res.json())
  .then((data) => displayData(data));

function displayData(actors) {
    document.querySelector(".fullname").textContent = actors.movie;
    document.querySelector(".movie").textContent = actors.fullname;

}
