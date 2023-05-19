today=new Date();
var chmas=new Date(today.getFullYear(), 11, 25);

if (today.getMonth()==11 && today.getDate()>25) 
{
    chmas.setFullYear(chmas.getFullYear()+1);
}
var oneday=1000*60*60*24;
var daysleft=Math.ceil((chmas.getTime()-today.getTime())/(oneday));

document.write(daysleft+" Days left until next Christmas!");
