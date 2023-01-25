madiv = document.getElementById("madiv")
valeurResultat = document.getElementById("valeurResultat")
afficheAction = document.getElementById("afficheAction")

hero1= document.getElementById("hero1")
pvhero1 = document.getElementById("pvhero1")
attaquehero1 = document.getElementById("attaquehero1")
attaquespecialehero1= document.getElementById("attaquespecialhero1")
manahero1= document.getElementById("manahero1")

hero2= document.getElementById("hero2")
pvhero2 = document.getElementById("pvhero2")
attaquehero2 = document.getElementById("attaquehero2")
attaquespecialehero2= document.getElementById("attaquespecialhero2")
manahero2= document.getElementById("manahero2")

hero3= document.getElementById("hero3")
pvhero3 = document.getElementById("pvhero3")
attaquehero3 = document.getElementById("attaquehero3")
attaquespecialehero3= document.getElementById("attaquespecialhero3")
manahero3= document.getElementById("manahero3")

hero4= document.getElementById("hero4")
pvhero4 = document.getElementById("pvhero4")
attaquehero4 = document.getElementById("attaquehero4")
attaquespecialehero4= document.getElementById("attaquespecialhero4")
manahero4= document.getElementById("manahero4")

monstre1= document.getElementById("monstre1")
pvmonstre1= document.getElementById("pvmonstre1")
attaquemonstre1= document.getElementById("attaquemonstre1")

monstre2 =document.getElementById("monstre2")
pvmonstre2= document.getElementById("pvmonstre2")
attaquemonstre2= document.getElementById("attaquemonstre2")

monstre3= document.getElementById("monstre3")
pvmonstre2= document.getElementById("pvmonstre3")
attaquemonstre3= document.getElementById("attaquemonstre3")

valeurResultat = document.getElementById("valeurResultat")

afficheAction = document.getElementById("afficheAction")

bouton= document.getElementById("bouton")

Textbox= document.getElementById("Textbox")

tour=0


pvhero1=50
attaquehero1=10
attaquespecialehero1=75
manahero1=150

pvhero2=40
attaquehero2=15
attaquespecialehero2=100
manahero2=200

pvhero3=70
attaquehero3=5
attaquespecialehero3=25
manahero3=125

pvhero4=50
attaquehero4=10
attaquespecialehero4=75
manahero4=150


pvmonstre1=50
attaquemonstre1=10

pvmonstre2= 50
attaquemonstre2=10

pvmonstre3=50
attaquemonstre3=10

function getRandomInt(max) {
        return Math.floor(Math.random() * max);
        pvmonstre1.innerHTML=pvmonstre1.innerHTML-attaquehero1
        textbox.innerHTML = hero1 + "inflige" + attaquehero1 + "à" + monstre1 + "!"
         if (pvmonstre1.innerHTML < 0)
         {pvmonstre1 = 0
        }
}

bouton.onclick= function()

{
        if ( pvhero1.innerHTML > 0 && pvmonstre1.innerHTML > 0)
        {
                if(tour % 2 ==0){
                        attaquehero1("hero1","monstre1", pvmonstre1)
                }
                else {
                        attaquehero1("monstre1", "hero1", pvhero1 )
                        
                }
        }
        else if (pvhero1.innerHTML == 0)
        {
                textbox.innerHTML= "hero1 est vaincu"
        }
        else if (pvmonstre1.innerHTML == 0)
        {
                textbox.innerHTML= "monstre1 est vaincu"
        }
}



maDiv.onclick = function() {
        pvmonstre1.innerHTML = pvmonstre1.innerHTML-+attaque1;
        afficheAction.innerHTML = "Vous avez infliger 10 points de dommages !";
    }

madiv.onclick = function() {
        pvmonstre=(pvmonstre-attaque);
        afficheAction.innerHTML= ("vous infliger",-+attaque1,"points de dégats")
        pvhero1=(pvhero1-attaquemonstre)
        afficheAction.innerHTML = ("le monstre contre attaque et vous subissez ",-+attaquemonstre1,"de dégats")


}

