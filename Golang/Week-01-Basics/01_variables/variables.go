package main

import "fmt"

func main() {
	// empty typed variable declaration. first declare and then initialize. ham agr value na dain to ye by default value layga.
	var name string
	name = "Nasir"
	fmt.Println(name)
	name = "ali"
	fmt.Println(name)

	// type variable initalization.
	var country string = "pakistan"
	fmt.Println(country)

	//in short method Go automatically guesses type = string
	city := "islamabad"
	fmt.Println(city)
}
