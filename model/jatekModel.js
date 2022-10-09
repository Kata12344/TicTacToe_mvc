class JatekModel{
    #szamlalo;
    #jelTomb = [];
    constructor(){
        this.#szamlalo = 0;
        this.#jelTomb = ["-","-","-","-","-","-","-","-","-",];

        
    }

    kovetkezoJatekos(index){
        this.#szamlalo++;
        let jel="";

        if (this.#szamlalo % 2 == 0) {
            jel= "X";
        }else{
            jel= "O";
        }
        
        this.#jelTomb[index]=jel;
        console.log(this.#jelTomb);
        return jel;
    }
}

export default JatekModel;