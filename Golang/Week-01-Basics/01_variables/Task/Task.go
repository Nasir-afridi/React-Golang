package main

import (
	"fmt"
	"math"
)

func main() {
	// 1.
	var name string = "Nasir"
	fmt.Println(name)

	// 2.
	var a, b, c int = 1, 2, 3
	fmt.Println(a + b + c)

	//3.
	var radius float64 = 5
	// Pow ka mtlb hai ktne power raise krna hai first one base nmbr second one power raise.
	area := math.Pi * math.Pow(radius, 2)
	fmt.Println("the area of the circle is ", area)

	// 4.
	city := "Islamabad"
	year := 2025
	fmt.Println(city, year)
}
