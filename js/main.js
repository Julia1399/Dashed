const canvas = document.querySelector('#draw');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth/1.5;
canvas.height = window.innerHeight/1.5;
ctx.lineWidth = 3;
function dashed(x1,y1,x2,y2,l1,l2){
    l1 = parseInt(l1)
    l2 = parseInt(l2)
    x1 = parseInt(x1)
    x2 = parseInt(x2)
    y1 = parseInt(y1)
    y2 = parseInt(y2)
    ctx.moveTo(x1,canvas.height-y1)
    let sum = 0;
    let length = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
    let angSin = (y2-y1)/length;
    let xLine,yLine,xSp,ySp;
    console.log(canvas.width)
        while (sum<length){
            yLine = y1 + l1*angSin;
            if (x2-x1 >=0){
                xLine = x1 + Math.sqrt(l1*l1*(1-angSin*angSin));
            } else{
                xLine = x1 - Math.sqrt(l1*l1*(1-angSin*angSin));
            }
            ctx.lineTo(xLine, canvas.height-yLine);
            ctx.stroke();
            sum += l1;
            ySp = yLine + l2*angSin;
            if (x2-x1 >=0){
                xSp = xLine + Math.sqrt(l2*l2*(1-angSin*angSin));
            } else {
                xSp = xLine - Math.sqrt(l2*l2*(1-angSin*angSin));
            }
            ctx.moveTo(xSp, canvas.height-ySp);
            ctx.stroke();
            sum += l2;
            x1 = xSp;
            y1 = ySp
            console.log(sum)
        }
}

function formSubmit(event) {
    event.preventDefault();
    dashed(inputX1.value,inputY1.value,inputX2.value,inputY2.value,inputL1.value,inputL2.value)
    inputX1.value = '';
    inputY1.value = '';
    inputX2.value = '';
    inputY2.value = '';
    inputL1.value = ''; 
    inputL2.value = '';
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
}

function clickValid(){
    input.forEach(element => {
        if(element.value == ''){
            element.style.borderColor = 'red'
        } else {
            element.style.borderColor = 'black'
        }
    });
}



const coordinates = document.getElementById('line');
var input = document.querySelectorAll('input');
const inputX1 = document.getElementById('1');
const inputY1 = document.getElementById('2');
const inputX2 = document.getElementById('3');
const inputY2 = document.getElementById('4');
const inputL1 = document.getElementById('5');
const inputL2 = document.getElementById('6');
coordinates.addEventListener('submit', formSubmit);
document.querySelector('.btn-2').addEventListener('click', clearArea)
document.querySelector('.btn-1').addEventListener('click', clickValid)
inputX1.max = canvas.width
inputX2.max = canvas.width
inputY1.max = canvas.height
inputY2.max = canvas.height