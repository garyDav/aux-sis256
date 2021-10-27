const starWars7 = 'Start Wars: El Despertar de la Fuerza'
const pgStarWars7 = 13

const nameJuan = 'Juan'
const ageJuan = 26

const namePedro = 'Pedro'
const agePedro = 12

const canWatchStarWars7 = (name, age, isWithAdult = false) => {
  if ( age > pgStarWars7 )
    console.log(`${name} puede pasar a ver ${starWars7}`)
  else if ( isWithAdult )
    console.log(`${name} puede pasar a ver ${starWars7}. Aunque su edad es ${age}, se encuentra acompañado/a por un adulto`)
  else
    console.log(`${name} no puede pasar a ver ${starWars7}. Tiene ${age} años y necesita tener ${pgStarWars7}`)
}

canWatchStarWars7(nameJuan, ageJuan)
canWatchStarWars7(namePedro, agePedro)
canWatchStarWars7(namePedro, agePedro, true)

