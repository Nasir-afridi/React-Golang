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
}
