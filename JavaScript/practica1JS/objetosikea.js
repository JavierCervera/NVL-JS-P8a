var cosas = ["Reloj de arena decorativo	TILLSYN,descripcion del objeto,https://www.ikea.com/PIAimages/0460829_PE607058_S5.JPG,10",
    "LATTJO  Peluche,descripcion del objeto,https://www.ikea.com/PIAimages/0710666_PE727700_S5.JPG,12",
    "DRAGON  Cubertería 24 piezas,descripcion del objeto,https://www.ikea.com/PIAimages/0131001_PE285442_S5.JPG,22"
];

for (var i = 0; i < cosas.length; i++) {
    console.log(cosas[i]);
    var mueble = cosas[i].split(",");
    console.log(mueble);
    var objeto = new claseIkea(name, description, urlimagen, price)
    console.log(objeto[1]);
}






var claseIkea = function(name, description, urlimagen, price) {

    this.name = name;
    this.description = description;
    this.Nameurlimagen = urlimagen;
    this.price = price;


}