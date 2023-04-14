//	Crea una variable firstName que almacena el string "Rojohn"
const firstName = "Rojohn"
//	Crea una variable firstNameUpperCase que
//	almacena firstName pero en mayúsculas, es decir "ROJOHN"
const firstNameUpperCase = firstName.toUpperCase() 

//	Muestra por consola firstName
console.log(firstName)
//	Muestra por consola firstNameUpperCase
console.log(firstNameUpperCase)

//	Crea una variable list que almacena en la primera posición
//	del array el valor 22, es decir list[0] = 22
const list = [22]
//	En la variable list añade los valores 124, 5 y 2 en las posiciones siguientes
//	es decir, list[1] = 124, list[2] = 5, list[3] = 2
list.push(124, 5, 2)
//	En la variable list añade el valor 3 en la siguiente posición
//	es decir, list[4] = 3
list.push(3)

//	Muestra por consola list[0], list[1], list[2], list[3], list[4]
console.log(list[0], list[1], list[2], list[3], list[4])
// Muestra por consola el array list
console.log(list)

//	Crea una variable newList que almacena la variable list
//	y le añade en la siguiente posición
//	el string "newList"
const newList = list.concat("newList")

//	Muestra por consola el array newList
console.log(newList)

//	Crea un objeto llamado myStruct con los
//	elementos myName, myAge, isMale, isFemale
const myStruct =
{
	myName: "Rojohn",
	myAge: 20,
	isMale: true,
	isFemale: false,
	student: ["42", "UMA"]
}
//	Muestra por consola el objeto myStruct
console.log(myStruct)
//	Muestra por consola el elemento myAge del objeto myStruct
console.log(myStruct.myAge)

//	Crea una función llamada suma con los parámetros n1 y n2
//	Las funciones se tratan como objetos de primera clase
const suma = (n1, n2) =>
{
	console.log("n1: ", n1)
	console.log("n2: ", n2)
	const resultado = n1 + n2
	return (resultado)
}

//	Muestra por consola "resultado: " y el valor que devuelve
//	la función suma con los parámetros 1 y 2
console.log("resultado: ", suma(1, 2))

//	Crea una función llamada resta con los parámetros n1 y n2
function resta (n1, n2)
{
	const resultado = n1 - n2
	return (resultado)
}

//	Muestra por consola el valor que devuelve la función resta
//	con los parámetros 3 y 2
console.log(resta(3, 2))