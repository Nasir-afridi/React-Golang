package main

import "fmt"

//For loop ek control structure hai jo repeatedly koi code block execute karta hai jab tak condition true ho.

func main() {
	for i := 0; i < 5; i++ {
		fmt.Println(i)
	}

	// Types of for loop

	i := 0 // while type loop
	for i < 5 {
		fmt.Println(i)
		i++
	}

	for { // infinite loop
		fmt.Println("infinite loop")
	}

}
