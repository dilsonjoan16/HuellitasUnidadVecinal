<template>
    <div class="CalculadoraIp" id="list-item-1">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto text-justify">
                    <form v-on:submit.prevent="calcularIp()" class="row g-3 mx-auto my-5 rounded text-dark p-4" id="formula">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <h3>
                                <label for="inputName" class="form-label">
                                    Tu nombre crack!
                                </label>
                            </h3>
                            <input
                                type="text"
                                class="form-control"
                                id="inputName"
                                placeholder="Dame tu nombre campeon(a)"
                                required
                                autocomplete="off"
                                autofocus
                                v-model="nombre"
                            />
                        </div>
                        <!-- Inicio de la Calculadora -->
                <div class="mb-3">
                    <div class="row g-4">
                    <div class="col-3">
                        <label for="InputCalculador1" class="form-label">1er octeto</label>
                        <input type="number" class="form-control" id="InputCalculador1" aria-describedby="emailHelp" maxlength="3" placeholder="255" max="255" min="0" v-model="octeto1">
                    </div>
                    <div class="col-3">
                        <label for="InputCalculador2" class="form-label">2do octeto</label>
                        <input type="number" class="form-control" id="InputCalculador2" aria-describedby="emailHelp" maxlength="3" placeholder="255" max="255" min="0" v-model="octeto2">
                    </div>
                    <div class="col-3">
                        <label for="InputCalculador3" class="form-label">3er octeto</label>
                        <input type="number" class="form-control" id="InputCalculador3" aria-describedby="emailHelp" maxlength="3" placeholder="255" max="255" min="0" v-model="octeto3">
                    </div>
                    <div class="col-3">
                        <label for="InputCalculador4" class="form-label">4to octeto</label>
                        <input type="number" class="form-control" id="InputCalculador4" aria-describedby="emailHelp" maxlength="3" placeholder="255" max="255" min="0" v-model="octeto4">
                    </div>
                    <div id="emailHelp" class="form-text">El resultado deberia verse similar a esto 255.255.255.255.</div>
                </div>
            </div>
               
                <div class="mb-3">
                    <label for="nredes" class="form-label">Subredes Requeridas</label>
                    <input type="number" class="form-control" id="nredes" maxlength="8" max="8" v-model="nredes" placeholder="Numero de Sub - redes">
                </div>

                 <button type="submit" class="btn btn-outline-dark">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
var woct1;
var woct2;
var woct3;
var woct4;
var wnredes;
var wclase;
var nbits, wmoct1, wmoct2, wmoct3, wmoct4;


import Swal from "sweetalert2";
export default {
    name: "Prueba",
    data() {
        return {
            nombre: "",
            octeto1: "",
            octeto2: "",
            octeto3: "",
            octeto4: "",
            nredes: "",
            clasered: "",
            maskocteto1: "",
            maskocteto2: "",
            maskocteto3: "",
            maskocteto4: "",
            maskbits: ""
        };
    },
    methods: {
        calcularIp(){
        woct1 = this.octeto1;
        woct2 = this.octeto2;
        woct3 = this.octeto3;
        woct4 = this.octeto4;
        wnredes = this.nredes;
        console.log(this.octeto1);
        console.log(this.octeto2);
        console.log(this.octeto3);
        console.log(this.octeto4);
        console.log(woct1);
        console.log(woct2);
        console.log(woct3);
        console.log(woct4);
        console.log(wnredes);
        /* Obtenemos los datos del formulario */
    /*  woct1 = parseInt(document.getElementById('oct1').value);
        woct2 = parseInt(document.getElementById('oct2').value);
        woct3 = parseInt(document.getElementById('oct3').value);
        woct4 = parseInt(document.getElementById('oct4').value);
        wnredes = parseInt(document.getElementById('nredes').value);
    */
        /* inicializamos las variables y deyterminamos la clase de la red en función del primer octeto*/
        wclase = ""
        
        if ((woct1 >= 1) && (woct1 <= 126)) wclase="A";
        if ((woct1 >= 128) && (woct1 <= 191)) wclase="B";
        if ((woct1 >= 192) && (woct1 <= 223)) wclase="C";
        if ((woct1 >= 224) && (woct1 <= 239)) wclase="D";
        if ((woct1 >= 240) && (woct1 <= 255)) wclase="E";
        this.clasered = wclase;

        // Determinamos la potencia de 2 que es >= que el número de redes introducidas
        // para saber el número de bits de la máscara
        // Así para 7 redes necesitamos 3 bits
        nbits = 0
        while (Math.pow(2,nbits) < wnredes){
        nbits++
        }

        //Vamos a calcular la máscara en función del tipo de red

        switch(wclase){
        case 'A':
        // Máscara por defecto sin subneting
        wmoct1 = 255;
        wmoct2 = 0;
        wmoct3 = 0;
        wmoct4 = 0;
        // bits necesarios para la máscara (los de la clase+subneting)
        this.maskbits = 8 + nbits;
        //Debemos diferenciar si el número de redes implica 1, 2 o 3 bytes
        if (nbits >= 16){
        // necesitamos 2 bytes para las subredes
        nbits = nbits - 16;
        wmoct2 = 255;
        wmoct3 = 255;
        //Calculamos los bits que necesitamos para el subneting
        wmoct4 = Math.pow(2,nbits) - 1;
        //los pasamos a la iquierda o parte MSB mediante desplazamiento
        wmoct4 = wmoct4 << (8-nbits);

        }
        else {
        if (nbits >= 8){
        // necesitamos 2 bytes para las subredes
        nbits = nbits - 8;
        wmoct2 = 255;
        wmoct4 = 0;
        //Calculamos los bits que necesitamos para el subneting
        wmoct3 = Math.pow(2,nbits) - 1;
        //los pasamos a la iquierda o parte MSB mediante desplazamiento
        wmoct3 = wmoct3 << (8-nbits);

        }
        else{
        // necesitamos 1 byte para las subredes, es como el caso C
        //Calculamos los bits que necesitamos para el subneting
        wmoct2 = Math.pow(2,nbits) - 1;
        //los pasamos a la iquierda o parte MSB mediante desplazamiento
        wmoct2 = wmoct2 << (8-nbits);
        wmoct3 = 0;
        wmoct4 = 0;
        }
        // end-else
        }

        Swal.fire(
            "Estimado "+ this.nombre +" el calculo fue exitoso",
            "Direccion Ip: "+woct1+"."+woct2+"."+woct3+"."+woct4
            +"  Clase de red: "+wclase+"    Mascara de red: "
            +wmoct1+"."+wmoct2+"."+wmoct3+"."+wmoct4+"  bits de la mascara: "
            +this.maskbits,
            "success"
        )

        break;
        case 'B':
        // Máscara por defecto sin subneting
        wmoct1 = 255;
        wmoct2 = 255;
        wmoct3 = 0;
        wmoct4 = 0;
        // bits necesarios para la máscara (los de la clase+subneting)
        this.maskbits = 16 + nbits;
        //Debemos diferenciar si el número de redes implica 1 o 2 bytes
        if (nbits >= 8){
        // necesitamos 2 bytes para las subredes
        nbits = nbits - 8;
        wmoct3 = 255;
        //Calculamos los bits que necesitamos para el subneting
        wmoct4 = Math.pow(2,nbits) - 1;
        //los pasamos a la iquierda o parte MSB mediante desplazamiento
        wmoct4 = wmoct4 << (8-nbits);

        }
        else{
        // necesitamos 1 byt para las subredes, es como el caso C
        //Calculamos los bits que necesitamos para el subneting
        wmoct3 = Math.pow(2,nbits) - 1;
        //los pasamos a la iquierda o parte MSB mediante desplazamiento
        wmoct3 = wmoct3 << (8-nbits);
        }

                Swal.fire(
            "Estimado "+ this.nombre +" el calculo fue exitoso",
            "Direccion Ip: "+woct1+"."+woct2+"."+woct3+"."+woct4
            +"  Clase de red: "+wclase+"    Mascara de red: "
            +wmoct1+"."+wmoct2+"."+wmoct3+"."+wmoct4+"  bits de la mascara: "
            +this.maskbits,
            "success"
        )

        break;
        case 'C':
        // Máscara por defecto sin subneting
        wmoct1 = 255;
        wmoct2 = 255;
        wmoct3 = 255;
        wmoct4 = 0;
        // En este caso no es necesario diferenciar ya que únicamente disponemos de 1 byte para las subredes
        // bits necesarios para la máscara (los de la clase+subneting)
        this.maskbits = 24 + nbits;
        //Calculamos los bits que necesitamos para el subneting
        wmoct4 = Math.pow(2,nbits) - 1;
        //los pasamos a la iquierda o parte MSB mediante desplazamiento
        wmoct4 = wmoct4 << (8-nbits);

                Swal.fire(
            "Estimado "+ this.nombre +" el calculo fue exitoso",
            "Direccion Ip: "+woct1+"."+woct2+"."+woct3+"."+woct4
            +"  Clase de red: "+wclase+"    Mascara de red: "
            +wmoct1+"."+wmoct2+"."+wmoct3+"."+wmoct4+"  bits de la mascara: "
            +this.maskbits,
            "success"
        )

        break;
        case 'D':
        // Máscara por defecto sin subneting
        wmoct1 = 0;
        wmoct2 = 0;
        wmoct3 = 0;
        wmoct4 = 0;
        // En este caso no es necesario diferenciar ya que únicamente disponemos de 1 byte para las subredes
        // bits necesarios para la máscara (los de la clase+subneting)
        this.maskbits = 0 + nbits;
        //Calculamos los bits que necesitamos para el subneting
        wmoct4 = Math.pow(2,nbits) - 1;
        //los pasamos a la iquierda o parte MSB mediante desplazamiento
        wmoct4 = wmoct4 << (8-nbits);

                Swal.fire(
            "Estimado "+ this.nombre +" el calculo fue exitoso",
            "Direccion Ip: "+woct1+"."+woct2+"."+woct3+"."+woct4
            +"  Clase de red: "+wclase+"    Mascara de red: "
            +wmoct1+"."+wmoct2+"."+wmoct3+"."+wmoct4+"  bits de la mascara: "
            +this.maskbits,
            "success"
        )

        break;
        case 'E':
        // Máscara por defecto sin subneting
        wmoct1 = 0;
        wmoct2 = 0;
        wmoct3 = 0;
        wmoct4 = 0;
        // En este caso no es necesario diferenciar ya que únicamente disponemos de 1 byte para las subredes
        // bits necesarios para la máscara (los de la clase+subneting)
        this.maskbits = 0 + nbits;
        //Calculamos los bits que necesitamos para el subneting
        wmoct4 = Math.pow(2,nbits) - 1;
        //los pasamos a la iquierda o parte MSB mediante desplazamiento
        wmoct4 = wmoct4 << (8-nbits);

                Swal.fire(
            "Estimado "+ this.nombre +" el calculo fue exitoso",
            "Direccion Ip: "+woct1+"."+woct2+"."+woct3+"."+woct4
            +"  Clase de red: "+wclase+"    Mascara de red: "
            +wmoct1+"."+wmoct2+"."+wmoct3+"."+wmoct4+"  bits de la mascara: "
            +this.maskbits,
            "success"
        )

        break;
        }
        this.maskocteto1 = wmoct1;
        this.maskocteto2 = wmoct2;
        this.maskocteto3 = wmoct3;
        this.maskocteto4 = wmoct4;
    ///////////////////////////////////////////////////////     SETEO DE DATOS     /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.nombre = ""
        this.maskbits = ""
        this.maskocteto1 = ""
        this.maskocteto2 = ""
        this.maskocteto3 = ""
        this.maskocteto4 = ""
        this.octeto1 = ""
        this.octeto2 = ""
        this.octeto3 = ""
        this.octeto4 = ""
        this.clasered = ""
        

}
    }
}

</script>
<style scoped>
#formula {
  border: outset;
  background: #457fca; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #5691c8,
    #457fca
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #5691c8,
    #457fca
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.CalculadoraIp {
  background: #00c6ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0072ff,
    #00c6ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0072ff,
    #00c6ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>