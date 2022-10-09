class ElemView{
    #allapot;
    #index;
    constructor(allapot, index){
        const txt ="<div class ='elem'><p></p></div>";
        const szuloElem = $(".jatekter");
        szuloElem.append(txt);
        this.divElem = szuloElem.children("div:last-child");
        this.pElem = this.divElem.children("p");
        this.#allapot= allapot;
        this.#index = index;

        this.divElem.on("click",()=>{
            // console.log(index);
            if (!this.#allapot) {
                this.kattintasTrigger();
            }
        });
    }

    kattintasTrigger(){
        //itt ad magáról infókat a controllernek
        let esemeny = new CustomEvent("kattint", {
            detail:this.#index
        });
        window.dispatchEvent(esemeny);
    }

    setErtek(jel){
        this.pElem.append(jel);
        this.#allapot = true;
    }
}

export default ElemView;