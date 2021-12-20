let hiddenCards = document.querySelectorAll('.hidden-cards');

hiddenCards.forEach(element => {
    element.style.display='none';
});

showMoreButton = document.querySelector('#show-more-cards');
showLessButton = document.querySelector('#show-less-cards');

showMoreButton.addEventListener('click', function(){
    hiddenCards.forEach(element => {
        element.style.display='block';
    });

    showMoreButton.style.display='none';
})

showLessButton.addEventListener('click', function(){
    hiddenCards.forEach(element => {
        element.style.display='none';
    });

    showMoreButton.style.display='inline';
})


document.querySelector('#design').addEventListener('mouseenter', function(){
    document.querySelector('#heart').classList.add('animate__animated')
    document.querySelector('#heart').classList.add('animate__headShake')

    setTimeout(() => {
        document.querySelector('#heart').classList.remove('animate__animated')
        document.querySelector('#heart').classList.remove('animate__headShake')
    }, 1000);

} )

document.querySelector('#code').addEventListener('mouseenter', function(){
    document.querySelector('#coding').classList.add('animate__animated')
    document.querySelector('#coding').classList.add('animate__headShake')

    setTimeout(() => {
        document.querySelector('#coding').classList.remove('animate__animated')
        document.querySelector('#coding').classList.remove('animate__headShake')
    }, 1000);

} )

document.querySelector('#content').addEventListener('mouseenter', function(){
    document.querySelector('#writing').classList.add('animate__animated')
    document.querySelector('#writing').classList.add('animate__headShake')

    setTimeout(() => {
        document.querySelector('#writing').classList.remove('animate__animated')
        document.querySelector('#writing').classList.remove('animate__headShake')
    }, 1000);

} )