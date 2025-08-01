package main

import "fmt"

// Go mein map ek built-in data type hai jo keys ke against values ko store karta hai
// bilkul JavaScript ke object ya dictionary ki tarah.
func main() {

	//Task-1
	students := map[string]string{
		"Nasir": "Islamabad",
		"Ahmad": "Karachi",
		"Mirza": "wah cantt",
	}
	fmt.Println(students)

	//Task-2
	students["sadeeq"] = "Sindh"
	fmt.Println(students)

	//Task-3
	fmt.Println("city of Nasir is", students["Nasir"])
}
