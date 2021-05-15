<template>
<div>
    <div class="container">
        <div class="row mx-auto my-4">
            <h1 id="list-item-1" class="mx-auto">
                Primera capa del modelo TCP/IP
            </h1>
            <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
                <h3>
                    ¿Que es?
                </h3>
                <p>
                    La capa de acceso a la red es la primera
                    capa de la pila TCP/IP. Ofrece la capacidad
                    de acceder a cualquier red física, es decir,
                    brinda los recursos que se deben implementar para
                    transmitir datos a través de la red.
                    Por lo tanto, la capa de acceso a la red contiene
                    especificaciones relacionadas con la transmisión
                    de datos por una red física, cuando es una red de
                    área local (red en anillo, Ethernet, FDDI), conectada
                    mediante línea telefónica u otro tipo de conexión a
                    una red. Trata los siguientes conceptos: enrutamiento
                    de datos por la conexión, coordinación de la transmisión
                    de datos (sincronización), formato de datos, conversión
                    de señal (análoga/digital), detección de errores a su
                    llegada, etc.
                </p>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
                <img src="../assets/imago17.jpg" alt="capa-de-acceso" class="rounded">
            </div>
        </div>
        <div class="row mx-auto my-4">
            <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/imago18.png" class="d-block w-100 rounded" alt="">
    </div>
    <div class="carousel-item">
      <img src="../assets/imago19.jpg" class="d-block w-100 rounded" alt="">
    </div>
    <div class="carousel-item">
      <img src="../assets/imago20.png" class="d-block w-100 rounded" alt="">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
            <h3>
                Datos resaltantes
            </h3>
            <p>
                En esta capa, encontramos 3 protocolos inmersos! El Protocolo
                de Ethernet(mas popular por su distribucion Lan), el Protocolo
                FDDI(se usa mas que todo para la fibra optica) y el Protocolo 
                Token Ring(creado por IBM pero fue sustituido por el protocolo
                ethernet por su bajo costo). Afortunadamente, todas estas 
                especificaciones son invisibles al ojo del usuario, ya que en
                realidad es el sistema operativo el que realiza estas tareas,
                mientras los controladores de hardware permiten la conexión a 
                la red (por ejemplo, el controlador de la tarjeta de red).
            </p>
            </div>
        </div>
        <div class="row mx-auto my-4">
            <h1>
              Hablemos un poco de sus protocolos
            </h1>
            <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
              <h3>
                Protocolo de ethernet
              </h3>
              <p>
                El Ethernet es un estándar de redes de área local para computadoras,
                por sus siglas en español Acceso Múltiple con Escucha de Portadora 
                y Detección de Colisiones (CSMA/CD). Este protocolo tambien define 
                las características de cableado y señalización; de nivel físico y 
                los formatos de tramas de datos del nivel de enlace de datos del 
                modelo OSI. Ethernet se tomó como base para la redacción del estándar
                internacional IEEE 802.3, siendo usualmente tomados como sinónimos.
              </p>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
              <img src="../assets/imago21.gif" alt="redes-ethernet" class="rounded w-100">
            </div>
            <hr class="my-3">
            <div class="col-sm-6 col-md-6 col-lg-6 mx-auto my-auto">
              <img src="../assets/imago23.jpg" alt="token-ring" class="rounded w-100">
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 mx-auto my-auto">
              <h3>
                Protocolo Token Ring
              </h3>
              <p>
                Token Ring es una arquitectura de red desarrollada por IBM en los años 1970
                con topología lógica en anillo y técnica de acceso de paso de testigo, usando
                una trama de 3 bytes llamado testigo (en inglés token) que viaja alrededor 
                del anillo. Token Ring queda definido en el estándar IEEE 802.5. En desuso por
                la popularización de Ethernet; actualmente no es empleada en diseños de redes.
                En palabras mucho mas simples, este protocolo define una red de área local LAN
                en configuración de anillo (Ring), con método de paso de testigo como control
                de acceso al medio
              </p>
            </div>
            <hr class="my-3">
            <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
              <h3>
                Protocolo FDDI
              </h3>
              <p>
                En ingles Fiber Distributed Data Interface y en español lo conocemos como
                interfaz de datos distribuida por fibra, de esta misma podemos decir que 
                es un conjunto de estándares ISO y ANSI para la transmisión de datos en 
                redes de computadoras de área extendida (WAN) o de área local (LAN), mediante
                cables de fibra óptica. Se basa en la arquitectura Token Ring y permite una 
                comunicación tipo dúplex. Dado que puede abastecer a miles de usuarios
                , una LAN FDDI suele ser empleada como backbone para una red de área amplia (WAN).
              </p>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
              <h3>
                Glosario de terminologias usadas
              </h3>
              <p>
                <ol>
                  <li class="text-justify">
                    <strong>
                      Comunicacion tipo Duplex
                    </strong>
                    <i>
                      Es un término utilizado en telecomunicaión para definir a un sistema que es capaz de manetener
                      una comunicación bidireccional, enviando y recibiendo mensajes de frma simultánea.
                    </i>
                  </li>
                  <li class="text-justify">
                    <strong>
                      Backbone
                    </strong>
                    <i>
                      La palabra backbone se refiere a las principales conexiones troncales de internet, es decir, estas
                      mismas estan compuestas por un gran numero de enrutadores e interconectados comerciales,
                      gubernamentales, universitarios y otros tipos de gran capacidad que lelvan datos a traves de paises,
                      continentes, oceanos, etc. 
                    </i>
                  </li>
                </ol>
              </p>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 mx-auto my-">
              <img src="../assets/imago22.jpg" alt="red-FDDI" class="rounded w-100">
            </div>
        </div>
        </div>
        <div class="row mx-auto" id="prefooter">
          <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
                    <p class="mx-auto my-auto">
                        <i>
                            "En sintesis, la capa de acceso podriamos tomarla como un punto de interfaz
                            o interaccion entre la Red local y los protocolos TCP/IP, debido a que en esta
                            capa, se establecen las caracteristicas funcionales para transmitir los datos y
                            determinar los protocolos adecuados para manipular los enlaces, aunado a ello,
                            esta capa es responsable de aceptar paquetes IP y realizar su transmision sobre una red
                            especifica."
                            <br>
                            <br>
                            <strong>
                                Dilson Porras | @dilsonjoan16                              
                            </strong>
                            <br>
                            Desarrollador de la plataforma TCP/IP UNEFA
                        </i>
                    </p>
                    <router-link to="/protocolo-general">
                    <button
                    class="btn btn-outline-dark btn-md my-5 mx-auto"
                    type="submit"
                      >
                    Concepto anterior
                  </button>
                  </router-link>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
                    <img src="../assets/imago11.png" alt="final-protocolo">
                    <router-link to="/internet">
                    <button
                    class="btn btn-outline-dark btn-md my-5 mx-auto"
                    type="submit"
                      >
                    Siguiete capa
                  </button>
                  </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Acceso2'
}
</script>
<style scoped>
#prefooter{
    background: #00c6ff;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #0072ff, #00c6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
p{
  text-align: justify;
}
li{
  text-align: justify;
}
</style>