package main

import "fmt"

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
}
