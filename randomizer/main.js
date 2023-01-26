let myArray = [];

function randomize() {

    let min = Number(document.getElementById('inputmin').value);
    let max = Number(document.getElementById('inputmax').value);
    let replace = Number(document.getElementById('replace').checked);
    let counter = Number(document.getElementById('choose').value);
    let inside = Number((max - min + 1));
    let possible = Number(max - min + 1);

    //Make sure maximum is more than minimum

    if (max < min) {

        document.getElementById('answer').innerHTML = "Maximum must be larger or equal to minimum";

    } else if ((replace == "0" && counter > possible)) {
    
    //Make sure there are enough answers (if replace is off)

        document.getElementById('answer').innerHTML = "You can't choose more numbers than there are possible";

    } else if (replace == "0") {

        myArray = [];
        let text = "";
        
        do {

            let random = Math.floor(Math.random() * (inside)) + min;
            let isitin = myArray.includes(random);

            if (isitin == false) {
                myArray.push(random);
                text += random + ", ";
                counter = counter - 1;
            }
        }
        while (counter > 0);

        
        document.getElementById('answer').innerHTML = text;

    //without unique
    } else {

        let text = "";

        do {
            
            let random = Math.floor(Math.random() * (inside)) + min;
            text += random + ", ";
            counter = counter - 1;
        }
        while (counter > 0);

        document.getElementById('answer').innerHTML = text;

    }
}
