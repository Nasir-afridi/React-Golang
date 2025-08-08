package main

import "fmt"

func main() {
	// 1.
	for i := 0; i < 10; i++ {
		fmt.Println(i)
	}

	// 2.
	for a := 2; a >= 10; a += 2 {
		fmt.Println(a)
	}
}
