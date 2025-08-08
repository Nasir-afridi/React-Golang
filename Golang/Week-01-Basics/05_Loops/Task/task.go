package main

import "fmt"

func main() {
	// 1.
	for i := 0; i < 10; i++ {
		fmt.Println(i)
	}

	// 2.
	for a := 2; a <= 10; a += 2 {
		fmt.Println(a)
	}

	// 3.
	arr := [3]int{1, 3, 4}
	for x := 0; x < len(arr); x++ {
		fmt.Println(arr[x])
	}

	// 4.
	b := 1
	for {
		fmt.Println(b)
		if b == 5 {
			break
		}
		b++
	}
}
