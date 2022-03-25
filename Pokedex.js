const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            pokeImage("./Imagenes/nosale.gif");
            window.Vida.textContent = "???"
            window.Ataque.textContent = "???"
            window.Defensa.textContent = "???"
            window.DefensaE.textContent = "???"
            window.Velocidad.textContent = "???"
            window.Id.textContent = "???"
            window.Nombre.textContent = `${pokeInput}`
        }
        else {
            return res.json();
        }
        return res.json();
    }).then((data) => {
        console.log(data);
        let pokeimg = data.sprites.other.dream_world.front_default;
        console.log(pokeimg);
        pokeImage(pokeimg);
    })

    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        window.Vida.textContent = data.stats[0].base_stat;
        console.log(Vida);
    })

    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        window.Ataque.textContent = data.stats[1].base_stat;
        console.log(Ataque);
    })
    
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        window.Defensa.textContent = data.stats[2].base_stat;
        console.log(Defensa);
    })

    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        window.DefensaE.textContent = data.stats[4].base_stat;
        console.log(DefensaE);
    })


    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        window.Velocidad.textContent = data.stats[5].base_stat;
        console.log(Velocidad);
    })

    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        window.Id.textContent = data.id;
        console.log(Id);
    })

    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        window.Nombre.textContent = data.name;
        console.log(Nombre);
    })

    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        window.Habilidad1.textContent = data.abilities[0].ability.name;
        console.log(Habilidad1);
    })

    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        window.Habilidad2.textContent = data.abilities[1].ability.name;
        console.log(Habilidad2);
    })
    
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        window.Habilidad3.textContent = data.abilities[2].ability.name;
        console.log(Habilidad3);
    })

    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        window.Tipo1.textContent = data.types[0].type.name;
        console.log(Tipo1);
    })

    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        window.Tipo2.textContent = data.types[1].type.name;
        console.log(Tipo2);
    })

    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        window.Tipo3.textContent = data.types[2].type.name;
        console.log(Tipo3);
    })
}





const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}




//pokeImage ("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png")
