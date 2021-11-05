var array =[[1,2,4,5,[3,9],8],2,10,[0,3,4,[4,7,[2,10,[100,150,[300,50,1]]],3,1]]]
var dimension = 0
var recursive = (val=[])=>
{
    dimension+=1;

    if(dimension == 100)
    {
        return
    }
    for(var i=0;i<val.length;i++)
    {
        if(Array.isArray(val[i]))
        {
            recursive(val[i]);
        }
        else
        {
            console.log(val[i])
        }
        if(i == val.length-1)
        {
            break
        }
        
    }
}
recursive(array);