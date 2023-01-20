const calculateTemp = () =>
{
    const numberTemp=document.getElementById("temp").value;
    // console.log(numberTemp)
    const tempSelect=document.getElementById("temp_diff");
    const valueTemp=temp_diff.options[tempSelect.selectedIndex];
    // console.log(valueTemp);

    const celToFah=(cel)=>
    {
        let Fahrenheit =(cel*1.8)+32;
        return Fahrenheit;
    }

    const fehtoCel=(fah)=>
    {
        let celcius =(fah-32)*5/9;
        return celcius;
    } 
    let result;
    if(valueTemp=='cel')
    {
        result=celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML= result+'°Fahrenheit'
    }
    else 
    {
        result=fehtoCel(numberTemp);
        document.getElementById('resultContainer').innerHTML=result+'°Celsius'
    }
    
}