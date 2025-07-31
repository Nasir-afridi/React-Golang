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
}
