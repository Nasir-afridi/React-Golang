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

	// Multiple varibales in one line
	var a, b, c, d, e, f int = 1, 3, 4, 5, 5, 6
	fmt.Println(a, b, c, d, e, f)

	// Constant :  run time prrr inki values change nahe hoteen.
	const pi float32 = 3.14
	fmt.Println(pi)

	// group multiple constants together.
	const (
		port   = 2233
		adress = "Pakistan"
	)
	fmt.Println(port, adress)
}
