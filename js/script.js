const form = document.getElementById("form")
const btn_con = document.getElementById("confirm")
const form_div = document.getElementById("formdiv")
const btn_cont = document.getElementById("continue")
const thanksdiv = document.getElementById("thanksdiv")

form.addEventListener("submit", formtoggle)
btn_cont.addEventListener("click", togglehidden)

function togglehidden(e) {
    thanksdiv.classList.toggle("hidden")
    form_div.classList.toggle("hidden")
}
function formtoggle(e) {
    e.preventDefault()
    form_div.classList.toggle("hidden")
    thanksdiv.classList.toggle("hidden")

}