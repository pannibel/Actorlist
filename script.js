let actorJSON;
let actorList;
let index = 0;

// FETCHING YAY

document.addEventListener("DOMContentLoaded", event => {
    actorList = document.querySelector("#actor_list");
    console.log("actorlist");

    init();
});

async function init() {
    await loadData();
    console.log("actorjson");

    displayData();
}

async function loadData() {
    const response = await fetch("actors.json");
    actorJSON = await response.json();
}

// ALTERNATIVE FETCHING (THE WAY WE LEARNED IT BUT LESS COOL LOOKING)
/* 
fetch("../actors.json")
.then(function(res) {
    return res.json()
})
.then(function(data) {
    handleActorList(data)
});

function handleActorList(data) {
    console.log(data);
    data.forEach(showActor);

// event listener here bc it has to fetch first to access what to click (this was just for the first iteration, don't need it)
    document.querySelectorAll(".actorname").forEach(el => el.addEventListener("click", popUp));
}; 
*/

function displayData() {

    // ADDING AN INDEX NUMBER TO EACH OBJECT IN THE ARRAY
    // WE ARE GOING TO NEED THIS LATER TO IDENTIFY EACH OBJECT
    actorJSON.forEach((actor) => (actor.index = index++));

    // CLONING AND ADDING VALUES
    actorJSON.forEach(actor => {

    //Step 1: Choose the <template>'s content
    const myTemplate = document.querySelector(".myTemplate").content;

    //Step 2: Make a "clone"
    const myClone = myTemplate.cloneNode(true);

    //Step 3: Change the content of the clone
    myClone.querySelector(".actorname").textContent = actor.fullname;
    myClone.querySelector(".actormovie").textContent = actor.movie;
    // USING THE UNIQUE INDEX HERE TO HAVE A DIFFERENT ID ON EACH ACTOR SO WE CAN ACCESS THEM LATER
    myClone.querySelector(".container").setAttribute("id", `box${actor.index}`);
    myClone.querySelector(".actormovie").setAttribute("id", `movie${actor.index}`);

    //Step 4: Chose the new "parent" element
    const parentElement = document.querySelector(".actorlist");

    //Step 5: Add (Append) the clone to the DOM
    parentElement.appendChild(myClone);



    // ADDING AN EVENT LISTENER TO EVERY CONTAINER
    // AND A FUNCTION SO WHEN IT'S CLICKED, THE MOVIE IS SHOWN
        document.querySelector(`#box${actor.index}`).addEventListener("click", () => {
        document.querySelector(`#movie${actor.index}`).classList.toggle("hidden")
});
});
}