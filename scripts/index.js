function btnClick(){
    if (document.getElementById("inText").value != "")
    {
        var sum = parseFloat(document.getElementById("inText").value, 10) / 4;
        var text = "That would be " + sum + " lego men!";

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