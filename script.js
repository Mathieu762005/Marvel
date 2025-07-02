fetch('Heros.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(Heros => {

            function createli(pow) {
                let lilist = ""
                pow.forEach(power => {
                    lilist += `<li class="list-group-item"><span class="fw-bold">Pouvoir : </span>${power}</li>`
                })
                return lilist
            }

            document.getElementById("conteneur").innerHTML += `

            <div class="card p-0 my-4" style="width: 18rem;">
                <img src="${Heros.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${Heros.name}</h5>
                    <p class="card-text"><span class="fw-bold">Vrai nom : </span>${Heros.realName}</p>
                </div>
                <ul class="list-group list-group-flush">
                ${createli(Heros.powers)}
                </ul>
                <div class="card-body">
                    <p class=""><span class="fw-bold">Ville : </span>${Heros.city}</p>
                    <p class=""><span class="fw-bold">Première apparition : </span>${Heros.firtApparence}</p>
                </div>
            </div>
            `
        });
    })