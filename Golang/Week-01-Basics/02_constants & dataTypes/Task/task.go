package main

import (
	"fmt"
	"math"
)

func main() {
	// 1.
	const COMPANYNAME string = "CapregSoft"
	fmt.Println("Welcome to ", COMPANYNAME, "company")

	// 2.
	const GRAVITY = 6.14
	fmt.Println(GRAVITY)

	// 3.
	var isLogin bool
	fmt.Println(isLogin)
	isLogin = true
	fmt.Println(isLogin)

	// 4.
	var radius float64 = 3.4543
	area := math.Pi * math.Pow(radius, 2)
	fmt.Println(area)
}
