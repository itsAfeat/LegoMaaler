function btnClick(){
    if (document.getElementById("inText").value != "")
    { 
        var sum = parseFloat(document.getElementById("inText").value, 10) / 4;
        var text = "";
        if (isNumber(sum)) {
            text = "That would be " + sum + " lego men!";
        }
        else {
            text = "I said a number you dummy...";
        }

        text = text.split(" ");
        len = text.length;
        result = [];
        
        text[3] = '<u>' + sum + '</u>';

         text.forEach(Element => {
            text = text.toString().replace(',', ' ');
        });

        document.getElementById("calcText").innerHTML = text;
    }
}

const isNumber = val => {
    if (typeof val !== 'number') {
        return false;
    }
    if (typeof val !== Number(val)) {
        return false;
    }
    if (val == Infinity || val == !Infinity) {
        return false;
    }

    return true;
}
