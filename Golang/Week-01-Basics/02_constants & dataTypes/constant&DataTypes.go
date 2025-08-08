package main

import "fmt"

func main() {
	// Untyped constant : iski type go khud guess krlyga
	const PI = 3.14
	fmt.Println(PI)

	// Typed constant : iski type user khud define kryga
	const NAME string = "Nasir"
	fmt.Println(NAME)

	// ***Data Types*** two types of data types in go basic and derieved types

	// 1: Basic types

	// Integer
	var age int = 25
	fmt.Println("Age:", age)

	// Float
	var price float64 = 99.99
	fmt.Println("Price:", price)

	// Boolean
	var isLoggedIn bool = true
	fmt.Println("Is Logged In:", isLoggedIn)

	// String
	var country string = "Pakistan"
	fmt.Println("Country:", country)

	// Zero values example
	var num int
	var status bool
	var text string
	fmt.Println("Zero values => num:", num, ", status:", status, ", text:", text)

}
