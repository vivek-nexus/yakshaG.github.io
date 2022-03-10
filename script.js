
// Dynamic greeting message
let greetingMessage = document.querySelector('#greetings');
let myDate = new Date();
let hrs = myDate.getHours();
let message;
if (hrs < 4)
    message = 'Night! Vivek here!';
else if (hrs >= 4 && hrs < 12)
    message = 'Morning! Vivek here!';
else if (hrs >= 12 && hrs < 17)
    message = 'Afternoon! Vivek here!';
else if (hrs >= 17 && hrs < 24)
    message = 'Evening! Vivek here!';
greetingMessage.innerHTML=message;



// Show more or show less cards
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


// Headshake animation for emojis of first three cards
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


