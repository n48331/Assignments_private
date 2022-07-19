function draw() {
var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);
var n = document.getElementById('num').value;
// var n = '200,180,310,280,';
var sum = 0;
var values = n.split(',');
for (let i = 0; i < values.length; i++) {
    sum += Number(values[i])
}
ctx.font = 'bold 12pt Arial'
var width = 50;
var x = 50;//first bar position
colors = ['#FFE000', '#CE9FFC', '#32CCBC', '#32CCBC', '#A0FE65', '#A0FE65','#2AFADF','#FD6585','#FFE985']
colLen = colors.length
for (var i = 0; i < values.length; i++) {

    var h = (values[i] / sum) * canvas.height;
    // var grd = ctx.createLinearGradient(x,200,200,550);
    var grd = ctx.createLinearGradient(0, 0, 0, canvas.height + 100);
    grd.addColorStop(0.6, colors[Math.floor(Math.random()*colLen)])
    grd.addColorStop(0.5, colors[Math.floor(Math.random()*colLen)])
    grd.addColorStop(0.85, colors[Math.floor(Math.random()*colLen)])
    ctx.fillStyle = grd;
    ctx.fillRect(x, canvas.height - h, width, h);
    x = x + width + 50;
    ctx.fillStyle = 'white';
    ctx.fillText(values[i], x - 80, canvas.height - h + 20);
}

}
