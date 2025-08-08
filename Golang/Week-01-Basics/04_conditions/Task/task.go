package main

import "fmt"

func main() {
	// 1.
	temperature := 30
	if temperature == 30 {
		fmt.Println("to hot")
	} else if temperature == 15 {
		fmt.Println("to cold")
	} else {
		fmt.Println("Mindatory")
	}

	// 2.
	variable := 0
	if variable > 0 {
		fmt.Println("positive")
	} else if variable < 0 {
		fmt.Println("Negative")
	} else {
		fmt.Println("Zero")
	}

	// 3.
	user := 10
	if user >= 18 {
		fmt.Println("adult")
	} else {
		fmt.Println("minor")
	}
}
