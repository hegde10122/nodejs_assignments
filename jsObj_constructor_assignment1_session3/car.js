function CarObj(make,model,year){
	this.make = make;
	this.model = model;
    this.year = year;
    
	this.showProp = function(){
        alert("Make is "+ this.make+"\nModel is "+this.model+"\nYear is "+this.year);
	}
}

//creating object of type Hero
var obOne = new CarObj("Tata Motors","Indica",2009);
var obTwo = new CarObj("Bentley","Mulsanne",2008);
//calling the showProp function for obOne object
obOne.showProp();
//calling the showProp function for obTwo object
obTwo.showProp();