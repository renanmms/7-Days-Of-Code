class Compras {
    constructor(){
        this.compras = [];
    }
}

class Item {
    constructor(nome, categoria){
        this.nome = nome;
        this.categoria = categoria;
    }
}

var nome = document.querySelector("#comida").value;
var categoria = document.querySelector("#categoria").value;
var listaCompras = new Compras();

function adicionarCompra() {
    var item = new Item(nome, categoria)
    listaCompras.compras.push(item);
    document.write("")
}

function mostrarListaCompras(){
    for(var i = 0; i < listaCompras.compras.length; i++){
        
    }
}