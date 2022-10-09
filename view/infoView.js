
class InfoView{
    constructor(){
        const nev1Beker = "<p>Játékos 1 név:</p> <p id ='nev1'></p>";
        const nev2Beker = "<p>Játékos 2 név:</p> <p id ='nev2'></p>";
        const szuloElem =  $(".infopanel");
        szuloElem.append(nev1Beker,nev2Beker);
    }

    bekeres1(){
        let nev = prompt("Játékos 1 név: ")
        if (nev != null) {
            $("#nev1").append(nev)
        }
    }

    bekeres2(){
        let nev = prompt("Játékos 2 név: ")
        if (nev != null) {
            $("#nev2").append(nev)
        }
    }

    setJatekos1(value){
        $(".koviJatekosPanel").html("<p>"+value+"</p>")
    }

    setJatekos2(value){
        $(".koviJatekosPanel").html("<p>"+value+"</p>")
    }
    
}

export default InfoView;