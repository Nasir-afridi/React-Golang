package main

import "fmt"

func main() {
	// Task-1
	age := 18
	if age >= 18 {
		fmt.Println("You can Vote")
	} else {
		fmt.Println("You are underage")
	}

	// Task-2
	lang := "JavaScript"
	switch lang {
	case "Go":
		fmt.Println("You are learning Go")
	case "JavaScript":
		fmt.Println("You are learnin JavaScript")
	case "Python":
		fmt.Println("You are learning Python")
	default:
		fmt.Println("Unknown language")
	}

	// Task-3
	for i := 1; i <= 20; i++ {
		if i%2 == 0 {
			fmt.Println(i)
		}
	}
	// Task-4
	table := 5
	for i := 1; i <= 10; i++ {
		fmt.Println(table, "x", i, "=", table*i)
	}
}
