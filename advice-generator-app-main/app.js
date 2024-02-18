// import axios from './axios';
const dice=document.querySelector('#dice');
dice.addEventListener('click', async function (){
    const result = await axios.get('https://api.adviceslip.com/advice');
    console.log(result.data[0].slip.advice);
})