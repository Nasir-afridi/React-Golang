package main

import "fmt"

func main() {
	// array: static size fixed.
	names := [2]string{"Nasir", "Ali"}
	count := [4]int{1, 3, 4, 5}
	fmt.Println(names)
	fmt.Println(count)

	//slices: dynamic arrays size not fixed.
	country := []string{"pakistan", "india", "srilanka"}
	country = append(country, "afghanistan", "syria") // add to the array
	fmt.Println(country)
	fmt.Println(len(country)) //checking the length of array.
	fmt.Println(cap(country))

	//task-1
	integer := [5]int{1, 3, 4, 5, 6}
	fmt.Println(integer)

	//task-2
	ourNames := []string{"Ali", "Ahmad", "sadeeq"}
	ourNames = append(ourNames, "Nawaz", "mujtaba")
	fmt.Println(ourNames)

	//task-3
	ourName := []string{"Ali", "Ahmad", "sadeeq"}
	fmt.Println(len(ourName))
	fmt.Println(cap(ourName))
}
