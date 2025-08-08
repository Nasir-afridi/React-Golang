package main

import "fmt"

func main() {
	// Arithmetic
	a := 10
	b := 3
	fmt.Println("Addition:", a+b)
	fmt.Println("Subtraction:", a-b)
	fmt.Println("Multiplication:", a*b)
	fmt.Println("Division:", a/b)
	fmt.Println("Modulus:", a%b)

	// Relational
	fmt.Println("a == b:", a == b)
	fmt.Println("a != b:", a != b)
	fmt.Println("a > b:", a > b)
	fmt.Println("a < b:", a < b)

	// Logical
	x := true
	y := false
	fmt.Println("x && y:", x && y)
	fmt.Println("x || y:", x || y)
	fmt.Println("!x:", !x)

}
