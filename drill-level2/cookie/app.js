let cookiecount = 0

let add = () => {
    cookiecount = cookiecount + 1
    document.getElementById('text').value = cookiecount
    document.title = cookiecount + " Cookies"
}

let save = () => {
    localStorage.setItem("cookiecount", cookiecount)
}

let load = () => {
    cookiecount = localStorage.getItem("cookiecount")
    cookiecount = parseInt(cookiecount)
    document.getElementById('text').value = cookiecount
    document.title = cookiecount + " Cookies"
}