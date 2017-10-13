var gbp, usd, eur, cad, aud;

    // gbp = document.getElementById("GBP");
    // usd = document.getElementById("USD");
    // eur = document.getElementById("EUR");
    // cad = document.getElementById("CAD");
    // aud = document.getElementById("AUD");
function load()
{
    gbp = document.getElementById("GBP");
    usd = document.getElementById("USD");
    eur = document.getElementById("EUR");
    cad = document.getElementById("CAD");
    aud = document.getElementById("AUD");
}

function gbpConvert()
{
    // document.usd.value = document.gbp.value * 0.49246
    // document.eur.value = document.gbp.value * 0.69714
    // document.cad.value = document.gbp.value * 0.50221
    // document.aud.value = document.gbp.value * 0.43497
    usd.value = parseFloat((gbp.value) * 0.49246);
    eur.value = parseFloat((gbp.value) * 0.69714);
    cad.value = parseFloat((gbp.value) * 0.50221);
    aud.value = parseFloat((gbp.value) * 0.43497);
}

function eurConvert()
{
    gbp.value = parseFloat((eur.value) * 1.43448);
    usd.value = parseFloat((eur.value) * 0.70641);
    cad.value = parseFloat((eur.value) * 0.72037);
    aud.value = parseFloat((eur.value) * 0.62382);
}

function cadConvert()
{
    gbp.value = parseFloat((cad.value) * 1.99169);
    usd.value = parseFloat((cad.value) * 0.98054);
    eur.value = parseFloat((cad.value) * 1.38814);
    aud.value = parseFloat((cad.value) * 0.86613);
}

function audConvert()
{
    gbp.value = parseFloat((aud.value) * 2.29964);
    usd.value = parseFloat((aud.value) * 1.13262);
    eur.value = parseFloat((aud.value) * 1.60329);
    cad.value = parseFloat((aud.value) * 1.15498);    
}

function usdConvert()
{
    gbp.value = parseFloat((usd.value) * 2.03032);
    eur.value = parseFloat((usd.value) * 1.41544);
    cad.value = parseFloat((usd.value) * 1.01941);
    aud.value = parseFloat((usd.value) * 0.88297);
}


var fortunes = [
  // add more array items here if you want, make sure you put a comma between each one. You can use HTML here! Just remember that if it contains quotes, they need to be escaped, like this: \"
  "True wisdom comes not from knowledge, but from understanding.",
  "Chiefly the mould of a man's fortune is in his own hands",
  "The day of fortune is like a harvest day, We must be busy when the corn is ripe",
  "Fortune favors the brave.",
  "There is frequently a poison in fortune's gifts.",
  "Fortune rarely accompanies anyone to the door.",
  "Fortune sometimes knocks like a schoolmistress, but then she teaches when she does.",
  "We may lack riches, but the greatest fortune is what lies in our hearts."

];

function tellFortune() {
  
  // generate a random number between 0 and the number of the array items
  var randomNumber = Math.floor(Math.random() * fortunes.length);

  // print the random number to the console log to make sure it's working
  // console.log("random number: " + randomNumber);

  // take the fortune at the random spot in the array and insert it into the "fortune" div
 document.getElementById("fortune").innerHTML = fortunes[randomNumber];
}