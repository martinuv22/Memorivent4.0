///// Desafio

//Realizar una clase “ProductManager” que gestione un conjunto de productos.
//Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.
/*Cada producto que gestione debe contar con las propiedades:
title (nombre del producto)
description (descripción del producto)
price (precio)
thumbnail (ruta de imagen)
id (código identificador)
stock (número de piezas disponibles)*/
/*Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
Todos los campos son obligatorios menos id que debe agregarse automáticamente  y auto- incrementable*/
//Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento

class ProductManager{
    constructor(){
    
    this.product= []
    
    }
    getProducts(){
     console.log(this.product)
        return this.product
            
        }
    addProduct({title,description,price,thumbnail,stock}){
        let id 
        if(this.product.length===0){
            id =1
        }else{
           let lastProduct = this.product[this.product.length-1]
           id=lastProduct.id+1
       console.log(id)
        }
        let event = {title,description,price,thumbnail,stock,id}
        this.product.push(event)
    
    }
    
    
    }
    let producto = new ProductManager()
    producto.addProduct({title:'pendrive',description:'50G',price:'5000',thumbnail:"imagen",stock:50})
    producto.addProduct({title:'pendrive',description:'100G',price:'10000',thumbnail:"imagen",stock:100})
    producto.getProducts()
    

