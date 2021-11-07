var recursive = (val=0)=>
{
    val+=1;
    if(val == 10)
    {
        
        return 
    }
    else
    {
        console.log(val)
        return recursive(val)
    }
   
}
recursive();
