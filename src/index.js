let herois = [
    ['Rioty', 1500], ['Gauzeus', 2500], ['Troot', 4500], ['Byndol', 6500], ['Garshok', 7500], ['Swingel', 8500], ['Ragnar', 9500], ['Draugr', 10500], ['Gorath', 11500],
    ['Valkyrie', 12500], ['Fenrir', 13500], ['Surtur', 4500], ['Jormungandr', 9500], ['Loki', 16500], ['Odin', 17500]
]

for (let i = 0; i < herois.length; i++) {
    let nivelHeroi
    if (herois [i][1] <= 1000) {
        nivelHeroi = 'Ferro'        
    }   else if (herois [i][1] <= 2000) {
        nivelHeroi = 'Bronze'
    }   else if (herois [i][1] <= 5000) {
        nivelHeroi = 'Prata'
    }   else if (herois [i][1] <= 7000) {
        nivelHeroi = 'Ouro'
    }   else if (herois [i][1] <= 8000) {
        nivelHeroi = 'Platina'
    }   else if (herois [i][1] <= 9000) {
        nivelHeroi = 'Ascendente'
    }   else if (herois [i][1] <= 10000) {
        nivelHeroi = 'Imortal'
    }   else {
        nivelHeroi = 'Radiante'
   }
    console.log(
        'O herói ' + herois[i][0] + ' está no nível '+ nivelHeroi
    )
}
