function calculateBill() {
 let inuput=document.getElementById('watt').value;
if(inuput <= 100){
    var total=0;
    document.getElementById('total').innerHTML=total;
}
else if(inuput > 100 && inuput <= 200)
{
    total=(inuput-100) * 2.25;
    document.getElementById('total').innerHTML=total;
}
else if(inuput > 200 && inuput <=400)
{
    total=(100*2.25) + (inuput-200) * 4.50;
    document.getElementById('total').innerHTML=total;
}
else
{
    total=(100*0)+(100*2.25)+(100*4.50)+(inuput-400)*6;
    document.getElementById('total').innerHTML=total;
}

}
