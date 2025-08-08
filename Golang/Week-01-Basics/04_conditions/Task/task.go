package main

import "fmt"

func main() {
	// 1.
	temperature := 30
	if temperature >= 30 {
		fmt.Println("to hot")
	} else if temperature <= 15 {
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

	// 4.
	e := 0
	f := 20
	operator := "/"
	var result float64

	switch operator {
	case "+":
		result = float64(e + f)
	case "-":
		result = float64(e - f)
	case "*":
		result = float64(e * f)
	case "/":
		if f != 0 {
			result = float64(e) / float64(f)
		} else {
			fmt.Println("Error: Division by zero")
			return
		}
	}

	fmt.Println("result", result)

}
