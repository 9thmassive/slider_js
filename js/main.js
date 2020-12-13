let img_list = document.querySelector('.img_list')

let albumImg = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
]

for (src of albumImg) {
    let img = document.createElement('img')
    img.src = src
    img.onclick = function miniMizeImg() {
        slider_img.src = this.getAttribute('src')
        index = albumImg.indexOf(this.getAttribute('src')) + 1
    }

    img.classList.add('album_img')
    img_list.appendChild(img)
}

let testing = document.querySelector('.testing')
let slider_img = document.querySelector('.slider_img')

let img_slider_left = document.querySelector('.img_slider_left')
let img_slider_right = document.querySelector('.img_slider_right')

let img_list_left = document.querySelector('.img_list_left')
let img_list_right = document.querySelector('.img_list_right')

let index = 1

//*************************************************** */
img_slider_left.addEventListener('click', (e) => {
    if (index < 0) {
        index = albumImg.length - 1
    }

    slider_img.style.transform = `translate(-50px,0px)`
    slider_img.style.opacity = '0'

    setTimeout(() => {
        slider_img.src = albumImg[index]
        slider_img.style.transform = 'translate(0px,0px)'
        slider_img.style.opacity = '1'
        index--
    }, 800)
})

img_slider_right.addEventListener('click', (e) => {
    if (index == albumImg.length) {
        index = 0
    }

    slider_img.style.transform = `translate(50px,0px)`
    slider_img.style.opacity = '0'

    setTimeout(() => {
        slider_img.src = albumImg[index]
        slider_img.style.transform = 'translate(0px,0px)'
        slider_img.style.opacity = '1'
        index++
    }, 800)
})

//*************************************************** */

let miniImg = document.querySelectorAll('.img_list>img')

img_list_left.addEventListener('click', (e) => {
    let imgs = document.querySelectorAll('.img_list>img')
    let img = document.createElement('img')
    img.classList.add('album_img')
    img.onclick = function miniMizeImg() {
        slider_img.src = this.getAttribute('src')
        index = albumImg.indexOf(this.getAttribute('src'))
    }
    img.src = imgs[0].getAttribute('src')
    img_list.appendChild(img)
    imgs[0].remove()
})

img_list_right.addEventListener('click', (e) => {
    let imgs = document.querySelectorAll('.img_list>img')
    let img = document.createElement('img')
    img.classList.add('album_img')
    img.onclick = function miniMizeImg() {
        slider_img.src = this.getAttribute('src')
        index = albumImg.indexOf(this.getAttribute('src'))
    }
    img.src = imgs[7].getAttribute('src')
    img_list.prepend(img)
    imgs[7].remove()
})

// miniImg.forEach((el, j) => {
//     el.addEventListener('click', (e) => {
//         console.log(this)
//     })
// })
