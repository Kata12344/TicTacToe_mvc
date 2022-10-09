import JatekModel from "../model/jatekModel.js";
import ElemView from "../view/elemView.js";
import InfoView from "../view/infoView.js";

class JatekController{
    #elemTomb=[];
    
    constructor(){
        const infoview = new InfoView();
        infoview.bekeres1();
        infoview.bekeres2();
        
        //pédányosítjuk a view-t
        //console.log("bármii érted bármi..")
        for (let index = 0; index < 9; index++) {
            this.#elemTomb.push(new ElemView(false, index));
        }
        
        
        const jatekmodel = new JatekModel();
        $(window).on("kattint", (event)=>{
            //itt kapja meg az infókat a viewtól
            const index = event.detail
            const kovetkezo = jatekmodel.kovetkezoJatekos(index);
            console.log(kovetkezo);
            this.#elemTomb[index].setErtek(kovetkezo);

            if (kovetkezo == "X") {
                infoview.setJatekos1($("#nev1").html());
            }else{
                infoview.setJatekos2($("#nev2").html());
            }
        });
    
        

    }
}

export default JatekController