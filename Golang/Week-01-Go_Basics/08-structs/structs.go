package main

import "fmt"

type students struct {
	Name string
	age  int
	city string
}

func main() {
	Data := students{
		Name: "M.Nasir",
		age:  90,
		city: "wah cantt",
	}
	fmt.Println(Data)
}
