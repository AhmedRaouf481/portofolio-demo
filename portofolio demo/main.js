

let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}




let themeDots = document.getElementsByClassName("theme-circles")

for(var i = 0; themeDots.length >i; i++){
    themeDots[i].addEventListener("click", function(){
        let mode = this.dataset.mode
        setTheme(mode)
    }
    )
}

function setTheme(mode){
    
    if(mode == "light"){
        document.getElementById('theme-opion').href='defult.css'
    } 

    if(mode == "blue"){
        document.getElementById('theme-opion').href='blue.css'
    } 

    if(mode == "green"){
        document.getElementById('theme-opion').href='green.css'
    } 

    if(mode == "purple"){
        document.getElementById('theme-opion').href='purple.css'
    } 

    localStorage.setItem('theme', mode)

}
