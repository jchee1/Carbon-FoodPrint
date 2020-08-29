
var bar = new ProgressBar.SemiCircle('#progress', {
        color: '#00cc00',
        duration: 3000,
        easing: 'easeInOut',
        from: {color: '#00cc00'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            var value =(bar.value()*10).toFixed(2);
            if (value === 0) {
            } else {
              bar.setText(value.concat("KG"));
            }
        
            bar.text.style.color = state.color;
          }
});

bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';
        


function StartAnimation() {
        var word = document.getElementById("textbox1").value;
        var word2 = document.getElementById("textbox2").value;
        var parse = parseFloat(word);
        var parse2 = parseFloat(word2)
        var ani = (parse+parse2)/10
        if(ani>1){
            bar.animate(ani);
          bar.setText(parse.concat("KG"));
        }
        else{
        bar.animate(ani);
        }   
}
