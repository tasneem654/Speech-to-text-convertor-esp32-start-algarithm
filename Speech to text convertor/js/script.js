var textbox = document.getElementById('convert_text');
var instruction = document.getElementById("instruction");

document.getElementById('start').addEventListener('click', ()=>{
let rcd = new p5.SpeechRec('ar');
instruction.innerHTML = "Allow the mictofone and start speaking";
rcd.start();

rcd.onResult = ()=>{
    if (rcd.resultValue){
        textbox.value = rcd.resultString;
        instruction.innerHTML = "Stopped listening";
    }
}
})
