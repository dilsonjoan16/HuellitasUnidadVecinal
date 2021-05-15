<template>
  <div id="general2" class="mx-auto my-3">
    <div class="container">
      <h1 id="list-item-1" class="mx-auto my-3">
        Hablemos un poco del Modelo TCP/IP
      </h1>
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
          <p class="text-justify">
            El modelo TCP/IP es usado para comunicaciones en redes y, como todo
            protocolo, describe un conjunto de guías generales de operación para
            permitir que un equipo pueda comunicarse en una red. TCP/IP provee
            conectividad de extremo a extremo especificando cómo los datos
            deberían ser formateados, direccionados, transmitidos, enrutados y
            recibidos por el destinatario. Para conseguir un intercambio fiable
            de datos entre dos equipos, se deben llevar a cabo muchos
            procedimientos separados. El resultado es que el software de
            comunicaciones es complejo. Con un modelo en capas o niveles resulta
            más sencillo agrupar funciones relacionadas e implementar el
            software modular de comunicaciones.
          </p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
          <img
            src="../assets/imago1.jpg"
            alt="Protocolo-TCP/IP"
            class="rounded"
          />
        </div>
      </div>
      <hr />
      <h1 class="mx-auto my-3">
        Caracteristicas mas resaltantes
      </h1>
      <div class="row">
        <div class="col-sm 12 col-md-6 col-lg-6 mx-auto my-auto">
          <img
            src="../assets/imago12.jpg"
            alt="Capas-del-protocolo"
            class="rounded w-100"
          />
        </div>
        <div class="col-sm 12 col-md-6 col-lg-6 mx-auto my-auto">
          <h3>
            Capas que conforman a este protocolo
          </h3>
          <p class="text-justify">
            Las capas están jerarquizadas. Cada capa se construye sobre su
            predecesora. El número de capas y, en cada una de ellas, sus
            servicios y funciones son variables con cada tipo de red. Sin
            embargo, en cualquier red, la misión de cada capa es proveer
            servicios a las capas superiores haciéndoles transparentes el modo
            en que esos servicios se llevan a cabo. De esta manera, cada capa
            debe ocuparse exclusivamente de su nivel inmediatamente inferior, a
            quien solicita servicios, y del nivel inmediatamente superior, a
            quien devuelve resultados.
          </p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
          <h3>
            El proceso de comunicacion del protocolo
          </h3>
          <p>
            Cuando un usuario ejecuta un comando que utiliza un protocolo de
            capa de aplicación TCP/IP, se inicia una serie de eventos. El
            mensaje o el comando del usuario se transfiere a través de la pila
            de protocolo TCP/IP del sistema local. A continuación , el mensaje o
            el comando pasa por el medio de red hasta los protocolos del sistema
            remoto. Los protocolos de cada capa del host de envío agregan
            información a los datos originales.
          </p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
          <img
            src="../assets/imago14.gif"
            alt="comunicacion-protocolo"
            class="rounded"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../assets/fondo2.jpg"
                  class="d-block w-100"
                  alt="protocolo-tcp/ip"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/imago5.jpg"
                  class="d-block w-100"
                  alt="protocolo-tcp/ip"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/fondo5.jpg"
                  class="d-block w-100"
                  alt="protocolo-tcp/ip"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/fondo1.png"
                  class="d-block w-100"
                  alt="protocolo-tcp/ip"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
          <h3 class="mx-auto my-4">
            Redes Ip
          </h3>
          <p>
            La internet protocol address, es decir, la dirección IP o
            simplemente IP, se basa en el protocolo de Internet, que es, además,
            la base del funcionamiento de Internet. Se trata de la dirección
            inequívoca de un dispositivo (por ejemplo, de un ordenador, de un
            servidor web o de una impresora) en una red interna o externa. Una
            dirección IP puede referirse también a un conjunto de dispositivos,
            como en el caso del broadcasting o del multicasting. Del mismo modo,
            a un único ordenador pueden asignársele varias direcciones IP. Lo
            que es seguro es que cada dirección IP de una red solo puede
            asignarse una vez al mismo tiempo.
          </p>
        </div>
      </div>
      <div class="row">
        <h2 class="mx-auto my-4">
          Tipos de Ip actualmente
        </h2>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
          <h3>
            Ipv4
          </h3>
          <p>
            Actualmente, se usan sobre todo direcciones de la versión 4 del
            protocolo de internet (abreviadas como IPv4). Están formadas por 32
            bits, así que desde el punto de vista técnico son un código binario
            de 32 cifras, como pudiera ser 11000000 10101000 10110010 00011111.
            Para lidiar con esta cifra monstruosa, suele representarse como una
            combinación de cuatro números decimales con valores entre 0 y 255
            separados por puntos. En ese formato, nuestro ejemplo tendría la
            siguiente forma: 192.168.178.31
          </p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
          <h3>
            Ipv6
          </h3>
          <p>
            Las direcciones de esta versión se componen de 128 bits de modo que
            deberían escribirse como un código binario de 128 cifras. Una cifra
            así sería demasiado larga y poco práctica, de manera que se recurre
            a una escritura hexadecimal que separa los 128 bits en 8 bloques de
            16 bits separados entre ellos por dos puntos. De este modo se
            obtiene , por ejemplo, la dirección Ipv6
            0000:0000:0000:0000:0000:ffff:c0a8:b21f, en la cual las letras de la
            “a” a la “f” también se refieren a cifras hexadecimales. Si omitimos
            los ceros al principio de cada bloque y sustituimos una serie de
            bloques consecutivos tipo 0000 por dos puntos (::), podemos
            simplificar este formato aún más. En nuestro caso resulta entonces
            la forma simplificada::ffff:c0a8:b21f.
          </p>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 mx-auto my-auto">
          <img
            src="../assets/imago15.png"
            alt="tipos-de-ip"
            class="mx-auto my-auto w-100 rounded"
          />
        </div>
      </div>
      <hr />
      <div class="row">
        <h1 class="mx-auto my-4">
          Encapsulado de datos en TCP/IP
        </h1>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
          <h3>
            ¿Que es este proceso?
          </h3>
          <p>
            Este proceso está relacionado con las diferentes capas del modelo
            OSI , y consiste en dar formato a los datos y agregar la información
            necesaria a medida que pasan por cada capa dependiendo del protocolo
            que intervenga en ese momento en la comunicación. La información que
            se agrega en cada capa se conoce como encabezado; estos contienen la
            información de control para cada dispositivo de la red y aseguran el
            envío correcto de los datos al receptor. Los encabezados reciben un
            nombre específico en cada capa conocidos como unidades de datos de
            protocolo (PDU):
          </p>
          <ol class="text-justify">
            <li>
              <strong>
                Datos:
              </strong>
              En la capa de aplicación, presentación y sesión.
            </li>
            <li>
              <strong>
                Segmentos:
              </strong>
              En la capa de Transporte.
            </li>
            <li>
              <strong>
                Paquetes:
              </strong>
              En la capa de Red.
            </li>
            <li>
              <strong>
                Tramas:
              </strong>
              En la capa de Enlace de datos.
            </li>
            <li>
              <strong>
                Bits:
              </strong>
              En la capa Física.
            </li>
          </ol>
          <ol class="mx-auto my-4">
            <h3>
              Paso a paso del proceso
            </h3>
            <li>
              Los datos son generados por el usuario en la capa de aplicación,
              estos pasan a las capas de presentación y sesión donde se les da
              el formato o representación especifica y se agrega el encabezado
              de protocolo correspondiente a estas capas para ser enviados a la
              capa de Transporte.
            </li>
          </ol>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
          <ol start="2">
            <hr />
            <li>
              Los datos son recibidos en la capa de transporte, esta capa divide
              los datos en porciones más pequeñas para facilitar su transmisión.
              A cada porción le agrega el encabezado correspondiente con la
              información de los protocolos de capa de transporte. Cada porción
              de datos se convierte en un segmento y es enviado a la capa de
              red.
            </li>
            <hr />
            <li>
              Los datos son recibidos en la capa de transporte, esta capa divide
              los datos en porciones más pequeñas para facilitar su transmisión.
              A cada porción le agrega el encabezado correspondiente con la
              información de los protocolos de capa de transporte. Cada porción
              de datos se convierte en un segmento y es enviado a la capa de
              red.
            </li>
            <hr />
            <li>
              La capa de enlace de datos recibe el paquete, le agrega su
              encabezado y convertir el paquete en una trama que es enviada a la
              capa física.
            </li>
            <hr />
            <li>
              Por último la capa física recibe las tramas y las convierte en
              bits, los cuales son enviados a través de los medios de red hacía
              el destino.
            </li>
          </ol>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 mx-auto my-4">
          <img
            src="../assets/imago16.jpg"
            alt="tipos-de-ip"
            class="mx-auto my-auto rounded"
          />
        </div>
      </div>
    </div>
    <div class="row mx-auto" id="prefooter">
      <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
        <img src="../assets/imago11.png" alt="final-protocolo" />
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto">
        <p class="mx-auto my-auto">
          <i>
            "En sintesis, TCP/IP es simplemente otro porotocolo que se encarga
            de decidir como se envian los datos e informacion, siendo un
            protocolo de conectividad confiable en el cual debemos referirnos a
            donde llegara el paquete de datos o informacion, esto quiere decir
            que ya se sabe o deberia saber con antelacion de donde a donde ira
            dicho paquete (origen y destino)."
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
            Primera capa
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "General2",
};
</script>
<style scoped>
#general2 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
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
