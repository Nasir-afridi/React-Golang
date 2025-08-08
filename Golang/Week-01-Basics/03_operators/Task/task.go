package main

import "fmt"

func main() {
	// 1.
	a := 10
	b := 20

	fmt.Println(a + b)
	fmt.Println(a == b)
	fmt.Println(a * b)
	fmt.Println(a / b)
	fmt.Println(b % a)

	// 2.
	c := 44
	if c%2 == 0 {
		fmt.Println("even")
	} else {
		fmt.Println("odd")
	}

	// 3.
	var x, y, z int = 1, 4, 6
	var largest int
	if x > y && x > z {
		largest = x
	} else if y > x && y > z {
		largest = y
	} else {
		largest = z
	}

	fmt.Println("Largest number is:", largest)

	// 4.
	username := "admin"
	password := "1234"
	if username == "admin" && password == "1234" {
		fmt.Println("Login successfully")
	} else {
		fmt.Println("Incorrect")
	}

}
