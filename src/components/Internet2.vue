<template>
  <div class="Internet2">
    <div class="container">
      <div class="row mx-auto my-4">
        <h1 class="mx-auto my-3" id="list-item-1">
          Segunda capa del modelo TCP/IP
        </h1>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
          <h3>
            ¿Que podemos decir de ella?
          </h3>
          <p>
            La capa de Internet, también conocida como capa de red o capa IP,
            acepta y transfiere paquetes para la red. Esta capa incluye el
            potente Protocolo de Internet (IP), el protocolo de resolución de
            direcciones (ARP), el protocolo de resolucion de direcciones inverso
            (RARP) y el protocolo de mensajes de control de Internet (ICMP).
          </p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
          <img
            src="../assets/imago24.png"
            alt="capa-internet"
            class="rounded w-100"
          />
        </div>
      </div>
      <hr />
      <div class="row mx-auto my-auto">
        <h2>
          Hablemos un poco sobre los protocolos
        </h2>
        <hr class="mx-auto my-3" />
        <h3>
          Protocolo de Internet (IP)
        </h3>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-5">
          <img
            src="../assets/imago25.jpg"
            alt="protocolo-ip"
            class="rounded w-100"
          />
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
          <h3>
            ¿Que es?
          </h3>
          <p>
            El protocolo IP es parte de la capa de Internet del conjunto de
            protocolos TCP/IP. Es uno de los protocolos de Internet más
            importantes, ya que permite el desarrollo y transporte de datagramas
            de IP (paquetes de datos), aunque sin garantizar su entrega. En
            realidad, el protocolo IP procesa datagramas de IP de manera
            independiente al definir su representación, ruta y envío.
          </p>
          <h3>
            ¿Cual seria su funcion?
          </h3>
          <p>
            El protocolo IP determina el destinatario del mensaje mediante 3
            campos: el campo de dirección IP (dirección del equipo); el campo de
            máscara de subred, que permite al protocolo IP establecer la parte
            de la dirección IP que se relaciona con la red; el campo de pasarela
            predeterminada, que permite al protocolo de Internet saber a qué
            equipo enviar un datagrama si el equipo de destino no se encuentra
            en la red de área local.
          </p>
        </div>
        <hr class="mx-auto my-3" />
        <h3>
          Protocolo de resolucion de direcciones (ARP)
        </h3>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-4">
          <h3>
            ¿Que es?
          </h3>
          <p>
            El protocolo ARP (Address Resolution Protocol, protocolo de
            resolución de dirección) tiene un papel clave entre los protocolos
            de capa de Internet relacionados con el protocolo TCP/IP, ya que
            permite que se conozca la dirección física de una tarjeta de
            interfaz de red correspondiente a una dirección IP. Cuando un equipo
            debe comunicarse con otro, consulta la tabla de búsqueda. Si la
            dirección requerida no se encuentra en la tabla, el protocolo ARP
            envía una solicitud a la red. Todos los equipos en la red comparan
            esta dirección lógica con la suya. Si alguno de ellos se identifica
            con esta dirección, el equipo responderá al ARP
          </p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-4">
          <h3>
            ¿Cual es su objetivo principal?
          </h3>
          <p>
            Cada equipo conectado a la red tiene un número de identificación de
            48 bits. Este es un número único establecido en el momento de la
            fabricación de la tarjeta. Sin embargo, la comunicación en Internet
            no utiliza directamente este número , sino una dirección lógica
            asignada por un organismo, que seria la direccion IP Para que las
            direcciones físicas se puedan conectar con las direcciones lógicas,
            el protocolo ARP interroga a los equipos de la red para averiguar
            sus direcciones físicas y luego crea una tabla de búsqueda entre las
            direcciones lógicas y físicas en una memoria caché.
          </p>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 mx-auto my-auto">
          <img
            src="../assets/imago6.jpg"
            alt="protocolo-ARP"
            class="rounded w-100"
          />
        </div>
        <hr class="mx-auto my-3" />
        <h3 class="mx-auto my-3">
          Protocolo de resolucion de direcciones inverso (RARP)
        </h3>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-3">
          <h3>
            ¿Que entendemos por ello?
          </h3>
          <p>
            El protocolo RARP (Reverse Address Resolution Protocol, protocolo de
            resolución de dirección inversa) es mucho menos utilizado. Es un
            tipo de directorio inverso de direcciones lógicas y físicas. En
            realidad, este protocolo se usa esencialmente para las estaciones de
            trabajo sin discos duros que desean conocer su dirección física.
          </p>
          <h3>
            ¿Cual es su enfoque?
          </h3>
          <p>
            El protocolo RARP le permite a la estación de trabajo averiguar su
            dirección IP desde una tabla de búsqueda entre las direcciones MAC
            (direcciones físicas) y las direcciones IP alojadas por una pasarela
            ubicada en la misma red de área local (LAN). Para poder hacerlo, el
            administrador debe definir los parámetros de la pasarela (router)
            con la tabla de búsqueda para las direcciones MAC/IP. A diferencia
            del ARP, este protocolo es estático. Por lo que la tabla de búsqueda
            debe estar siempre actualizada para permitir la conexión de nuevas
            tarjetas de interfaz de red.
          </p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-3">
          <img
            src="../assets/imago13.jpg"
            alt="protocolo-RARP"
            class="rounded w-100"
          />
        </div>
        <hr class="mx-auto my-3" />
        <h3>
          Protocolo de mensajes de control de internet (ICMP)
        </h3>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
          <h3>
            ¿Como seria su gestion errores?
          </h3>
          <p>
            Si se tienen en cuenta los escasos controles que lleva a cabo el
            protocolo IP, ICMP no permite corregir los errores sino que los
            notifica a los protocolos de capas cercanas. Por lo tanto, el
            protocolo ICMP es usado por todos los router para indicar un error
            (llamado un problema de entrega).
          </p>

          <h3>
            Caracteristica resaltante
          </h3>
          <p>
            Siempre estan encapsulados, los mensajes de error ICMP se envían a
            través de la red en forma de datagramas (paquetes de datos) como
            cualquier otro dato. Por lo tanto, los mismos mensajes de error
            pueden contener errores. Sin embargo, si hay un error en un
            datagrama que transporta un mensaje ICMP, no se envía ningún mensaje
            de error para evitar el efecto "bola de nieve" en el caso de un
            incidente en la red.
          </p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-4">
          <h3>
            ¿Que seria?
          </h3>
          <p>
            ICMP (Internet Control Message Protocol, Protocolo de mensajes de
            control de Internet) es un protocolo que permite administrar
            información relacionada con errores de los equipos en red.
          </p>
          <img
            src="../assets/imago26.jpg"
            alt="protocolo ICMP"
            class="rounded w-100"
          />
        </div>
      </div>
      <hr class="mx-auto my-3" />
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 mx-auto my-3">
          <img
            src="../assets/imago9.jpg"
            alt="protocolo-conexion"
            class="rounded w-100"
          />
        </div>
      </div>
    </div>
    <div class="row mx-auto" id="prefooter">
      <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
        <p class="mx-auto my-auto">
          <i>
            "En sintesis, al igual que la capa 3 del modelo OSI, recibe la
            peticion de enviar un segmento de la capa de transporte y una
            direccion de destino para el paquete, esta capa se encarga de
            direccionamiento logico, enrutamiento, fragmentacion, reenvio, etc.
            Aunado a ello, se define un formato de paquete y protocolo, tratando
            de encontrar la mejor ruta."
            <br />
            <br />
            <strong>
              Dilson Porras | @dilsonjoan16
            </strong>
            <br />
            Desarrollador de la plataforma TCP/IP UNEFA
          </i>
        </p>
        <router-link to="/acceso">
          <button
            class="btn btn-outline-dark btn-md my-5 mx-auto"
            type="submit"
          >
            Capa anterior
          </button>
        </router-link>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
        <img src="../assets/imago11.png" alt="final-protocolo" />
        <router-link to="/transporte">
          <button
            class="btn btn-outline-dark btn-md my-5 mx-auto"
            type="submit"
          >
            Siguiente capa
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Internet2",
};
</script>
<style scoped>
#prefooter {
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
p {
  text-align: justify;
}
li {
  text-align: justify;
}
</style>
