const dice=document.querySelector('#dice');
console.log('anan');
const getAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error('Error fetching advice:', error);
        });
}

dice.addEventListener('click', getAdvice);