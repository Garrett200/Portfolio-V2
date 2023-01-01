// template_sgafzrp
// service_lo59kw2
// hDCgqlu9cChmWH-zT


function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_lo59kw2',
            'template_sgafzrp',
            event.target,
            'hDCgqlu9cChmWH-zT'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly at garrettjrh@live.com"
        )
    })
}

let contrastToggle = false;
function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        console.log('toggle on')
        return document.body.classList += " dark-theme"
    }
    else {
        console.log('toggle off')
        return document.body.classList.remove("dark-theme")
    }
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}