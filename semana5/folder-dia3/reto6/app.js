//darle el valor por defecto
let count = 0 ;
//seleccionar los botones (atraparlo)

const value = document.querySelectpr("#value")
const value = document.querySelectpr(".btn")

btns.forEach(function(btn){
    btn.addEventListener("click",funtion(e){
        const styles = e.currentTarget.clasList;
        if(styles.contains("decrease")){
            count--;
        }else if(styles.contains("decrease")){
                count--;
        }else{
            count=0;
        }
        if(count>0){
            value.styles.color="red";
        }
        if(count === 0){
            value.style.color = "#222";
        }
        value.textContent = count 
    })
})