function bubblesort(a)
{
var n=a.length;
var x=a;
while(n>0)
{
    for(var i=0;i<n;i++)
    {
        if(x[i]>x[i+1])
         {
            var temp=x[i];
            x[i]=x[i+1];
             x[i+1]=temp;
        }
    }
    n--;
    }
    return x;
}

var sort=bubblesort([89,56,90,23,3,1,60,4]);
document.write("Sorted Array Using Bubblesort is : "+sort);