function createGame() {
    let titleInput = document.getElementById("title");
    let yearInput = document.getElementById("year");
    let priceInput = document.getElementById("price");

    let game = {
        title: titleInput.value,
        price: priceInput.value,
        year: yearInput.value
    }
    axios.post("http://localhost:8080/game", game)
        .then(res => {
            if (res.status == 200) {
                alert("Game ON");
            };
        }).catch(err => {
            console.log(err)
        });
}

function deleteGame(listItem) {
    let id = listItem.getAttribute("data-id");
    axios.delete("http://localhost:8080/game/" + id).then(res => {
        alert("Game deletado!");
    }).catch(err => {
        console.log(err);
    });
}
function updateGame() {
    let idInput = document.getElementById("idEdit");
    let titleInput = document.getElementById("titleEdit");
    let yearInput = document.getElementById("yearEdit");
    let priceInput = document.getElementById("priceEdit");

    let game = {
        title: titleInput.value,
        price: priceInput.value,
        year: yearInput.value
    }

    let id = idInput.value;

    axios.put("http://localhost:8080/game/" + id, game)
        .then(res => {
            if (res.status == 200) {
                alert("Game Update");
            };
        }).catch(err => {
            console.log(err)
        });
}


function loadForm(listItem) {
    let id = listItem.getAttribute("data-id");
    let year = listItem.getAttribute("data-year");
    let title = listItem.getAttribute("data-title");
    let price = listItem.getAttribute("data-price");

    document.getElementById("idEdit").value = id;
    document.getElementById("titleEdit").value = title;
    document.getElementById("priceEdit").value = price;
    document.getElementById("yearEdit").value = year;
}


axios.get("http://localhost:8080/games").then(res => {
    let games = res.data;
    let list = document.getElementById("games");


    games.forEach(game => {
        let item = document.createElement("li");
        item.setAttribute("data-id", game.id);
        item.setAttribute("data-title", game.title);
        item.setAttribute("data-year", game.year);
        item.setAttribute("data-price", game.price);

        item.innerHTML = game.id + " - " + game.title + " - $" + game.price;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.addEventListener("click", function () {
            deleteGame(item)
        });
        let editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.addEventListener('click', function () {
            loadForm(item)
        });

        deleteBtn.classList.add('bg-red-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded');
        editBtn.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded');

        item.appendChild(editBtn)
        item.appendChild(deleteBtn)
        list.appendChild(item)
    });
}).catch(err => {
    console.log(err);
});
