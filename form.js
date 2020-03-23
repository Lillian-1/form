const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg)


function sendMsg (){
    let content = messageIn.value;

    if (content===''){
        alert('Please Enter Valid Value.Current Value Is Empty')
    }

    else{
        messageOut.innerHTML = content;
        messageIn.value ='';
    }
    
    //what this code means is that after you type in the value the input box would be empty when it returns the value

}
