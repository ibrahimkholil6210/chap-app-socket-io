const socket = io.connect('https://cranky-easley-7b8522.netlify.app/');


const output = document.querySelector('#output');
const handle = document.querySelector('#handle');
const btn = document.querySelector('#send');
const message = document.querySelector('#message');
const feedback = document.querySelector('#feedback');

btn.addEventListener('click',(e)=>{
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    });
    message.value = '';
});

message.addEventListener('keyup',(e)=>{
    socket.emit('typing',{
        name: handle.value,
        message: message.value
    });
});


message.addEventListener('keyup',(e)=>{
    socket.emit('typing',{
        name: handle.value,
        message: message.value
    });
});

socket.on('chat',(data)=>{
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>'+data.handle+'</strong>'+' '+data.message+'</p>';
});


socket.on('typing',(data) => {
    console.log('Hey')
    feedback.innerHTML = '<p><em>'+data.name+' is typing '+data.message+'</em></p>';
});
