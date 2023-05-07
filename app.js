

function listaProductSeleccion(){
    let martillo=500;
    let taladro=5650;
    let destornillador=450;
    let pinza=900;
    let amoladora=8000;
    let seleccionarProducto=0;

    read=prompt(`
                LISTA DE PRODUCTOS
                1)Martillo:->$${martillo}
                2)Taladro->$${taladro}
                3)Destornillador->$${destornillador}
                4)Pinza->$${pinza}
                5)amoladora->${amoladora}`)

    read=Number(read);

    switch(read){
        case 1:
            seleccionarProducto=martillo;
            break;
        case 2:
            seleccionarProducto=taladro;
         
            break;
        case 3:
            seleccionarProducto=destornillador;
          
            break;
        case 4:
            seleccionarProducto=pinza;
         
            break;
        case 5:
            seleccionarProducto=amoladora;
           
            break;        
        
    }

    
    return seleccionarProducto;
              
}



let totalCompra=0;
let option=false;
let condicion=1;


    while(option==false){
        condicion=Number(condicion); 

        if(condicion==1){
            totalCompra+=listaProductSeleccion();
                 
        }else if(condicion==2){
            option=true;
            condicion=2;
            break;
        }

        condicion=prompt(`Desea seguir comprando?
                    1)Seleccione 1 para seguir comprando
                    2)Selecione 2 para salir
                    `)

    }
 


console.log(`Su total de la compra es de $ ${totalCompra}`);

