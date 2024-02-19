const dice=document.querySelector('#dice');
console.log('anan');
// const getAdvice = () => {
//     for(let i=0; i<100; i++) {
//         axios.get('https://api.adviceslip.com/advice')
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error('Error fetching advice:', error);
//         });
//     }
// }
dice.addEventListener('click', async function getAdvice(){
    try {
        const timestamp = new Date().getTime(); // Get current timestamp
        const response = await axios.get(`https://api.adviceslip.com/advice?timestamp=${timestamp}`);
        console.log(response.data); // Log the response data to see what's being returned
        document.getElementById('advice').innerText = response.data.slip.advice;
    } catch (error) {
        console.error('Error fetching advice:', error);
    }
});

