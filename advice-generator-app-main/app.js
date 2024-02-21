const dice=document.querySelector('#dice');
const qAdvice=document.querySelector('#query');
const paragraf=document.getElementById('advice');
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
        const slip_id = Math.floor(Math.random() * 200) + 1;
        const response = await axios.get(`https://api.adviceslip.com/advice/${slip_id}`);
        console.log(response.data); 
        paragraf.innerText = response.data.slip.advice;
    } catch (error) {
        console.error('Error fetching advice:', error);
    }
});

qAdvice.addEventListener('keypress', async function(e){
        try{
            if(e.key === 'Enter'){
            const queryAdvice = qAdvice.value;
            const res = await axios.get(`https://api.adviceslip.com/advice/search/${queryAdvice}`);
            console.log(res.data);
            qAdvice.value="";
            paragraf.innerText= res.data.slips[0].advice;
        }
    } 
    catch (error ){
        console.log("Error fetching advice:", error);
    }
})