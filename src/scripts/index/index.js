document.querySelector("nav .burger-btn").addEventListener(
	"click",
	() => {
		document.querySelector("nav .burger-btn").classList.toggle("opened")
		document.querySelector("nav .nav-links").classList.toggle("opened-menu")

	//	blackScreenAnim(document.querySelector("nav .burger-btn").classList.contains("opened"))
	},
	false
)

// function blackScreenAnim(state) {
// 	let screen = document.querySelector("nav .blackScreen")

// 	if (state) {
// 		screen.style.display = "flex"
// 		screen.style.opacity = 0
// 		setTimeout(() => {
// 			screen.style.opacity = 1
// 		}, 0)
// 	} else {
// 		screen.style.opacity = 0
// 		setTimeout(() => {
// 			screen.style.display = "none"
// 		}, 200)
// 	}
// }
