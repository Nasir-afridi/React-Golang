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
}
