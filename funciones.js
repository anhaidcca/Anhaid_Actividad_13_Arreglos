const amigos = []

while (true) {
   let nombre = prompt("Ingresa el nombre de un amigo");
    if (nombre !== "fin"){
          amigos.push(nombre)
     }else{
          break;
     }
}

console.table(amigos);