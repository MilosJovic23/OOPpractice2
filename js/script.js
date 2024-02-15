// Domaci:

// * Napraviti klasu Vozilo
//      * Boja
//      * Vrsta(vrsta moze biti automobil, letelica ili plovilo)
//
//  * Napraviti klasu Automobil
//      * Marka ( moze biti BMW ili Audi ili Mercedes)
//      * Model ( ako je BMW(M5,M3,X1) ako je audi(A4 i A6) a ako je mercedes (G-class, S-class, SLS AMG))
//      * Broj vrata (3 ili 5)
//      * Gorivo (moze biti Benzini lil Dizel ili Metan)
//

class Vozilo {
	boja;
	vrsta;
	constructor(boja, vrsta) {
		const dozvoljeneVrste = ["automobil", "plovilo", "letelica"];
		// console.log(vrsta);
		if (!dozvoljeneVrste.includes(vrsta)) {
			throw new Error("Morate navesti vrstu vozila");
		}
		this.boja = boja;
		this.vrsta = vrsta;
	}

	ispis() {
		console.log("boja auta je " + this.boja + " a vrsta je " + this.vrsta);
	}
}
let audi = new Vozilo("plava", "plovilo");
audi.ispis();

class Automobil {
	marka;
	model;
	brojVrata;
	gorivo;
	constructor(marka, model, brojVrata, gorivo) {
		const markaAuta = ["Audi", "BMW", "Mercedes"];
		const vrataAutomobila = ["3", "5"];
		const vrstaGoriva = ["Benzin", "Dizel", "Metan"];
		const modelAudija = ["A4", "A6"];
		const modelBMW = ["M5", "M3", "X1"];
		const modelMercedesa=["S-class","SLS AMG","G-class"]
		// console.log("test")
		if (!vrataAutomobila.includes(brojVrata)) {
			throw new Error("Broj vrata moze biti 3 ili 5");
		}
		if (!vrstaGoriva.includes(gorivo)) {
			throw new Error("tip goriva moze biti Benizin, Dizel ili Metan");
		}
		if (!markaAuta.includes(marka)) {
			throw new Error("marka auta moze biti Audi, BMW ili Mercedes");
		}
		if (markaAuta[0] === marka) {
			if (!modelAudija.includes(model)) {
				throw new Error("model auta moze biti A4 ili A6");
			}
		}
		if (markaAuta[1] === marka) {
			if (!modelBMW.includes(model)) {
				throw new Error("model auta moze biti M5 ili M3 ili X1");
			}
		}
		if(markaAuta[2]===marka){
			if(!modelMercedesa.includes(model)){
				throw new Error("model auta moze biti S-class ili SLS AMG ili G-class");
			}
		}
		this.brojVrata = brojVrata;
		this.model = model;
		this.marka = marka;
		this.gorivo = gorivo;
	}
	ispisAutomobil() {
		console.log(
			"marka auta je " +
				this.marka +" "+
				this.model +
				" , broj vrata " +
				this.brojVrata +
				" a gorivo " +
				this.gorivo
		);
	}
}

let auto = new Automobil("Mercedes", "G-class", "5", "Dizel");
auto.ispisAutomobil();
