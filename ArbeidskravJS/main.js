    /*
    Comments av all koding;

        OBS: Last ned og les README filen i denne mappen for å kunne se hva oppgaven går ut på.

        Først lage variabler man kommer til å trenge senere og kan kalle inn når man vil(hente inn id/classes fra html dokument og variabler man kan bruke 
        som templateliteral senere.)

        Så legge til en onclick på 2 knapper som er lagt til i index.html, med 2 funksjoner som er laget tidligere.
        deretter kjører jeg en funksjon med en for of loop som "blar" igjennom alle classes fra index.html som er kalt "alle-div-som-finnes" og putter disse i en array,
        for så og sette tilfeldige farger til hver index av det arrayet samt css styling. Så kommer det en if/else som sier at hvis man har trykket på riktig farge
        så skal noe skje, hvis ikke man trykker riktig, gjør noe annet. Det kommer også et bilde utifra om du shar svart riktig/galt. Etter if/else vil en tekst bli oppdatert.

        De 3 neste funksjonene er bare funksjoner som generer et bilde eller random fargekode som jeg bruker i de andre funksjonene over.

        De 2 nederste funksjonene er funksjoner som blir lagt til en addEventListner til hver button og de legger da til 5 eller 15 nye div's med class="alle-div-som-finnes"
        også vil den kjøre styleDivs funksjonen igjen for å oppdatere farger og lignende. Etter man har klikket på en av knappene så blir EventListener'en borte så man ikke
        skal kunne lage så mange bokser man vil.

    */
    
    let outputAntallGanger = document.getElementById("antallGanger");
    let boxSomSkalSammenlignes = document.getElementById("boxSomSkalSammenlignes");
    boxSomSkalSammenlignes.style.height = "100px";
    boxSomSkalSammenlignes.style.width = "100px";
    
    let alleDivs = document.getElementsByClassName("alle-div-som-finnes");
    let nyDiv = document.getElementById("flereDiv");
    let femBoksKnapp = document.getElementById("5boxes");
    let femtenBoksKnapp = document.getElementById("15boxes");
        
    let antallRiktig = 0;
    let antallFeil = 0;

    let randomTall = 3;

    femBoksKnapp.addEventListener("click", leggeTil5Divs)
    femtenBoksKnapp.addEventListener("click", leggeTil15Divs);
   
    styleDivs(); 
    
    function styleDivs (){    

        let randomTallAvAntallDivs = (Math.floor (Math.random()*randomTall));
        
        for(let box of alleDivs) {
            
            box.style.backgroundColor = `rgb(${tilfeldigFargeKode()},${tilfeldigFargeKode()},${tilfeldigFargeKode()})`;
            box.style.height = "100px";
            box.style.width = "100px";
            box.style.cssFloat = "left";
            //for å hindre at det kommer border på den boksen man tidligere trykket på som var riktig, før man trykker på +5 eller +15 knappene
            box.style.border = "";
            boxSomSkalSammenlignes.style.backgroundColor = alleDivs[randomTallAvAntallDivs].style.backgroundColor;

            box.addEventListener("click", function() {
                
                if(alleDivs[randomTallAvAntallDivs].style.backgroundColor == box.style.backgroundColor) {
                    antallRiktig ++;
                    document.getElementById("svar").innerHTML = "Gratulerer du har svart riktig!";
                    alleDivs[randomTallAvAntallDivs].style.height = "150px";
                    alleDivs[randomTallAvAntallDivs].style.width = "150px";
                    alleDivs[randomTallAvAntallDivs].style.border = "1px solid black";
                    HyggeligBilde();
                    
                }else {
                    antallFeil ++;
                    document.getElementById("svar").innerHTML = "Du har svart feil! Prøv igjen."
                    alleDivs[randomTallAvAntallDivs].style.height = "100px";
                    alleDivs[randomTallAvAntallDivs].style.width = "100px";
                    alleDivs[randomTallAvAntallDivs].style.border = "";
                    ikkeHyggeligBilde();
                } 
                outputAntallGanger.innerHTML = `Du har svart riktig ${antallRiktig} ganger og svart feil ${antallFeil} ganger`;
            
                
            })
            
        }
    }
    
    function tilfeldigFargeKode(){
        let randomFarge = Math.floor (Math.random()*256);
        return randomFarge
    }
    
    function ikkeHyggeligBilde() {
        var x = document.getElementById("goodOrBadPicture");
        x.src = "images/ikkeHyggelig.jpg"
        x.style.width = "200px";
        x.style.height = "200px";
    }
    
    function HyggeligBilde() {
        var x = document.getElementById("goodOrBadPicture");
        x.src = "images/Hyggelig.jpg"
        x.style.width = "200px";
        x.style.height = "200px";
    }
    
  
    
    function leggeTil5Divs(){
        randomTall += 5;

        for(let i = 0; i < 5; i++){
            nyDiv.innerHTML += `<div class="alle-div-som-finnes"></div>`;             
        }

        styleDivs();
        femBoksKnapp.removeEventListener("click", leggeTil5Divs);
    }
  
    function leggeTil15Divs(){
        randomTall += 15;
        for(let i = 0; i < 15; i++){
            nyDiv.innerHTML += `<div class="alle-div-som-finnes"></div>`;             
        }
        
        styleDivs();
        femtenBoksKnapp.removeEventListener("click", leggeTil15Divs);       
    }


       


    

    
    