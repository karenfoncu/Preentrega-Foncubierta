let totalIngresos = 0;

function mostrarMenu() {
   console.log("Bienvenidos a MusicArte")
   console.log("------------------------")
   console.log("Presione 1 para ver los aranceles")
   console.log("Presione 2 para cargar nombres y aranceles")
   console.log("Presione 3 para salir del programa")
   console.log("------------------------")
}

function agregarAlumno(nombre, arancel) {
   // Verificar datos ingresados
   if (!nombre || isNaN(arancel) || arancel < 0) {
       console.log("Por favor, ingresa datos válidos.")
       return
   }

   // Calcular ingresos totales
   totalIngresos += arancel

   // Opciones en la consola
   console.log("Se agregó el alumno:", nombre)
   console.log("Monto del arancel:", arancel)
   console.log("Ingresos totales:", totalIngresos)
}

function iniciarPrograma() {
   mostrarMenu()

   // Opciones de aramceles
   const entrada = prompt("Bienvenidos a MusicArte\nPresione 1 para ver los aranceles\nPresione 2 para cargar nombres y aranceles\nPresione 3 para salir del programa")
   switch (entrada) {
      case "1":
         console.log("Aranceles:")
         console.log("-------------------")
         console.log("Arancel 1: $4500")
         console.log("Arancel 2: $5000")
         console.log("Arancel 3: $6000")
         console.log("-------------------")
         break
      case "2":
         const nombre = prompt("Ingrese el nombre del alumno:")
         const arancel = parseFloat(prompt("Ingrese el monto del arancel:"))
         agregarAlumno(nombre, arancel)
         break
      case "3":
         console.log("Gracias por elegir MusicArte")
         return
      default:
         console.log("Opción inválida. Por favor, ingrese una opción válida.")
         break
   }

   // Volver a mostrar el menú y continuar el programa
   iniciarPrograma()
}

// Iniciar el programa
iniciarPrograma()

