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
/*Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
En caso de no coincidir ningún id, mostrar en consola un error “Not found”*/

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
    getProductById(event_id){
        let uno = this.product.find(each=> each.id === event_id)
        if(uno){
            console.log(uno)
            return uno
        }else{
console.log('Not found')

        }

    }

    }
    let producto = new ProductManager()
    producto.addProduct({title:'pendrive1',description: 'Marca: SanDisk, capacidad: 50G',price:'5000',thumbnail: 'img src="imagenes/Sandisk.jpg',stock:50});
    producto.addProduct({title:'pendrive2',description:'Marca: Kingtong, capacidad: 100G',price:'10000',thumbnail: 'img src="imagenes/Sandisk.jpg',stock:100});
    producto.getProducts()
    producto.getProductById(2)
    producto.getProductById(5)

