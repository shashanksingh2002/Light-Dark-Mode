let light = true;
let toggleMode = () => {
    if (light) {
      
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('p').style.color = 'white';
        document.getElementById('btnText').innerText = 'Light-Mode';
       
        light = false;
    }
    else {
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('p').style.color = 'black';
        document.getElementById('btnText').innerText = 'Dark-Mode';
        light = true;
    }
};
document.getElementById('modeChange').addEventListener('click', toggleMode);
 