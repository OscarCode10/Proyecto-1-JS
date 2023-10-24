const screen = document.querySelector(".screen")
const btn = document.querySelectorAll(".btn")

btn.forEach(bn => {
    bn.addEventListener("click", ()=>{
        const btnClick = bn.value

        if (bn.id === "clear") {
            screen.textContent = "0"
            return
        }

        if (bn.id === "drop") {
            if(screen.textContent.length === 1 || screen.textContent === "¡Error!"){  
                screen.textContent = "0"
            } else {
                screen.textContent = screen.textContent.slice(0, -1)
            }
            return
        }

        if (bn.id === "equal") {
            try {
                if (screen.textContent.include("//")) {
                    screen.textContent="¡Error!"        
                }
                screen.textContent = eval(screen.textContent)
            } catch {
                screen.textContent="¡Error!"
            }
            return
        }

        if (screen.textContent === "0" || screen.textContent === "¡Error!") { 
            screen.textContent = btnClick
            return
        } else{
            screen.textContent += btnClick
        }
    })
})