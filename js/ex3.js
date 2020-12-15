var year=[];
for(var i=2014;i<2050;i++)
{
    var d=new Date(i,0,1);//new Date(year,month,day)
    if(d.getDay()===0)      //0 -> sunday
    {
        year.push(i);
    }

}
document.write("Result : "+year);