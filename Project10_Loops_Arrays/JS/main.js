function Call_Loop()    {
    var Digit = "";
    var X = 1;
    while (X < 21)  {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop()     {
    for (Y =0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_Instruments").innerHTML = Content;
}

function dog_pics()     {
    var Dog_Picture = [];
    Dog_Picture[0] = "barking";
    Dog_Picture[1] = "eating";
    Dog_Picture[2] = "howling";
    Dog_Picture[3] = "licking";
    document.getElementById("Dog").innerHTML = "Right here, Barky is " + Dog_Picture[3] + ".";
}