
document.querySelector('[text="image"]').addEventListener('click', () => {
    const a = document.querySelector('.poshuk').value
    window.location = 'https://images.google.com/search?q=' + a + '&tbm=isch'
})


document.querySelector('[text="lucky"]').addEventListener('click', () => {
    window.location = 'https://www.google.com/doodles'
})

document.querySelector('.advance').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'flex'
})

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none'
})

document.querySelector('[text="search"]').addEventListener('click', () => {
    const a = document.querySelector('.poshuk').value
    window.location = 'https://www.google.com/search?q=' + a


})


document.querySelector('.advance__button').addEventListener('click', ()=>{
    const all = document.querySelector('[text="all"]')
    const exact = document.querySelector('[text="exact"]')
    const any = document.querySelector('[text="any"]')
    const none = document.querySelector('[text="none"]')
    let endpoint = 'https://images.google.com/search?q='
    let search = false
    if (all.value !== ''){
        endpoint = endpoint + all.value
        search = true
    }
    if(exact.value !== ''){
        endpoint = endpoint + ' '+  exact.value
        search = true
    }
    if(any.value !== ''){
        endpoint = endpoint + ' "' + any.value + '"'
        search = true
    }
    if(none.value !== ''){
        endpoint = endpoint + ' -' + none.value
        search = true
    }
    if(search){
        window.location = endpoint
    }
})