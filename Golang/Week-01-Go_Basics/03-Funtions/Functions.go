package main

import "fmt"

// Task-1
func sayHello() {
	fmt.Println("Hello World")
}

// Task-2
func add(a int, b int) int {
	return a + b
}

// Task-3
func isEven(a int) {

	if a%2 == 0 {
		fmt.Println(true)
	} else {
		fmt.Println(false)
	}
}

// final
func showProfile(name string, age int, language string) {
	fmt.Println("My name is: ", name)
	fmt.Println("My age is: ", age)
	fmt.Println("My language is: ", language)
}

func main() {
	sayHello() // task-1

	result := add(3, 5) //Task-2
	fmt.Println(result)

	isEven(3) // Task-3
	isEven(4)

	showProfile("Nasir", 20, "pashto") // final
}
