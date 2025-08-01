package main

import "fmt"

// Task- 1
type Book struct {
	title  string
	author string
	price  int
}

func main() {
	// Task-2
	books := []Book{
		{title: "isl", author: "rehman", price: 220},
		{title: "eng", author: "john", price: 2220},
	}

	//Task-3
	for _, s := range books {
		fmt.Println(s)
	}
}
