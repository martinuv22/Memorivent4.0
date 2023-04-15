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
/*
Te dejo algunas recomendaciones generales:

Deberías tener en cuenta la indentación de tu código, para que sea más legible. Ahora son pocas líneas, pero cuando el proyecto crece es importante que el código sea legible.

También te recomiendo que uses nombres de variables más descriptivos, por ejemplo, en lugar de usar “uno” podrías usar “productFound”.



En el método addProduct, podrías usar el operador ternario para asignar el valor de id, en lugar de usar un if/else. Eso te lo simplificaría a una sola línea, y te ahorraría la declaración de la variable id. Por ejemplo:

let id = this.product.length === 0 ? 1 : this.product[this.product.length-1].id + 1

También es conveniente que el método devuelva algo, por ejemplo, el producto agregado si todo salió bien, o un error, por ejemplo si faltan campos.

Te faltó validar que todos los campos sean obligatorios.

Cuidado con los nombres de las variables, estás usando “event” en lugar de “product”, lo mismo en el método getProductById.



En el método getProductById, también podrías usar el operador ternario, Por ejemplo:

let productFound = this.product.find(each=> each.id === event_id)

productFound ? console.log(productFound) : console.log('Not found')

De igual manera que en el método addProduct, podrías devolver el producto encontrado, o un error si no se encontró.



Por lo demás está muy bien. Dejo la pr abierta por si queres hacer los cambios que te comenté antes de hacer el merge.

Un saludo!*/
class ProductManager{

    constructor(){
    
    this.product= []

    }
    getProducts(){

        console.log(this.product)
           return this.product
               
           }
    addProduct({title,description,price,thumbnail,stock}){
       let id =this.product.length===0? 1 :this.product[this.product.length-1].id+1 
       console.log(id)
       let product={title,description,price,thumbnail,stock,id}
       product=(title ===''|| description ==='' ||price === '' ||thumbnail === ''||stock ==='')?console.log("Debes completar todos los campos"): this.product.push(product)
       return product

    }
  
    getProductById(product_id){
        let productFound = this.product.find(each=> each.id === product_id)
        productFound ?console.log(productFound)  :console.log('Not found')
        return productFound
     
    }

    }
    
    let producto = new ProductManager()
    producto.addProduct({title:'pendrive1',description:'50G',price:'5000',thumbnail:"imagen",stock:50})
    producto.addProduct({title:'pendrive2',description:'100G',price:'10000',thumbnail:"imagen",stock:100})
    producto.getProducts()
    producto.getProductById(2)
    producto.getProductById(5)

 