function calculateBill() {
 let inuput=document.getElementById('watt').value;
if(inuput <= 100){
    var total=0;
    document.getElementById('total').innerHTML=total;
}
else if(inuput > 100 && inuput <= 200)
{
    total=inuput * 2.25;
    document.getElementById('total').innerHTML=total;
}
else if(inuput > 200 && inuput <=400)
{
    total=inuput * 4.50;
    document.getElementById('total').innerHTML=total;
}
else
{
    total=inuput * 6.00;
    document.getElementById('total').innerHTML=total;
}
//  document.getElementById('total').innerHTML=inuput;
}