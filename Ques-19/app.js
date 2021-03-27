const div = document.querySelector('.container');
const label = document.querySelector('.heading');
const submit = document.querySelector('.btn-submit');
submit.addEventListener('click',(e)=>{
    const text = document.querySelector('#hexInput').value;
    const hexString = 'abcdefABCDEF0123456789'
    const hexSymbol = text.slice(0,1);
    let remStr = text.slice(1,)
    if(text === ''){
        displayMsg('*Enter hex color values')
    }if(remStr.length ===6 || remStr.length===3 && hexSymbol ==='#'){
        for(let i=0;i<remStr.length;i++){
            let check = hexString.search(remStr[i])
            if(check=== -1){
                displayMsg('*Wrong hex Input')
                break
            }
        }
        
        document.body.style.backgroundColor = text;
    }
    document.querySelector('#hexInput').value='';
    e.preventDefault();
})


function displayMsg(msg){
    const errorHead = document.createElement('h4');
    errorHead.innerText = msg;
    errorHead.style.color = 'Red'
    div.insertBefore(errorHead,label)
    setTimeout(()=>{
        errorHead.style.display='none'
    },2000)

}