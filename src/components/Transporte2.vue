<template>
  <div class="Transporte2">
    <div class="container">
      <div class="row mx-auto my-auto">
        <h1 class="mx-auto my-4" id="list-item-1">
          Tercera capa del protocolo TCP/IP
        </h1>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-4">
          <h3>
            ¿Que podemos decir de ella?
          </h3>
          <p class="text-justify">
            La función de la capa de transporte del modelo tcp/ip es garantizar
            que los paquetes lleguen sin errores y en secuencia, uno después de
            otro (si llegan 2 o más paquetes a la vez se produce una colisión,
            gracias a esta capa evitamos que esto pase. A eso se le llama
            multiplexación de datagramas). La capa de transporte contiene dos
            protocolos que permiten que dos aplicaciones puedan intercambiar
            datos independientemente del tipo de red (es decir,
            independientemente de las capas inferiores). Los dos protocolos son
            el <strong>TCP</strong> y <strong>UDP</strong>, que se diferencian
            por el tipo de servicio que ofrecen
          </p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-4">
          <img
            src="../assets/imago10.png"
            alt="capa-transporte"
            class="rounded w-100"
          />
        </div>
        <h2 class="mx-auto my-3">
          Protocolos que intervienen
        </h2>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-3">
          <ol>
            <li class="text-justify">
              <strong>
                UDP (User Datagram Protocol)
              </strong>
              <p class="text-justify mx-auto my-1">
                UDP es un protocolo "sin conexiones". A diferencia de TCP, UDP
                no comprueba los datos que llegan al host de recepción. En lugar
                de ello, UDP da formato al mensaje que se recibe desde la capa
                de la aplicación en los paquetes UDP. UDP adjunta un encabezado
                a cada paquete. El encabezado contiene los puertos de envío y
                recepción, un campo con la longitud del paquete y una suma de
                comprobación. El proceso UDP de envío intenta enviar el paquete
                a su proceso UDP equivalente en el host de recepción. La capa de
                aplicación determina si el proceso UDP de recepción confirma la
                recepción del paquete. UDP no requiere ninguna notificación de
                la recepción. UDP no utiliza el protocolo de tres vías.
              </p>
            </li>
            <h3 class="mx-auto my-3">
              Su objetivo caracteristico
            </h3>
            <p class="text-justify">
              Es que implementa una transmisión no fiable, es decir, que no está
              libre de errores. Usada en aplicaciones de streaming y con
              actualizaciones en tiempo real donde no importa tanto que el
              mensaje llegue sí o sí en su totalidad: vídeos, peliculas,
              streamings, conferencias, etc. (si no llegan todos los mensajes se
              perderá calidad de imagen).
            </p>
          </ol>
          <img
            src="../assets/imago28.gif"
            alt="protocolo-UDP"
            class="rounded w-100"
          />
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-3">
          <ol start="2">
            <li class="text-justify">
              <strong>
                TCP (Transmission Control Protocol)
              </strong>
              <p class="text-justify mx-auto my-1">
                Que significa Protocolo de Control de Transmisión, es uno de los
                principales protocolos de la capa de transporte del modelo
                TCP/IP. En el nivel de aplicación, posibilita la administración
                de datos que vienen del nivel más bajo del modelo, o van hacia
                él, (es decir, el protocolo IP). Cuando se proporcionan los
                datos al protocolo IP, los agrupa en datagramas IP, fijando el
                campo del protocolo en 6 (para que sepa con anticipación que el
                protocolo es TCP). TCP es un protocolo orientado a conexión, es
                decir, que permite que dos máquinas que están comunicadas
                controlen el estado de la transmisión.
              </p>
            </li>
            <h3 class="mx-auto my-3">
              Su objetivo caracteristico
            </h3>
            <p class="text-justify">
              Con el uso del protocolo TCP, las aplicaciones pueden comunicarse
              en forma segura (gracias al sistema de acuse de recibo del
              protocolo TCP) independientemente de las capas inferiores. Esto
              significa que los routers (que funcionan en la capa de Internet)
              solo tienen que enviar los datos en forma de datagramas, sin
              preocuparse con el monitoreo de datos porque esta función la
              cumple la capa de transporte (o más específicamente el protocolo
              TCP).
            </p>
          </ol>
          <img
            src="../assets/imago27.gif"
            alt="protocolo-TCP"
            class="rounded w-100"
          />
        </div>
      </div>
    </div>
    <div class="row mx-auto" id="prefooter">
      <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-4">
        <p class="mx-auto my-auto">
          <i>
            "En sintesis, vamos a encontrar todos los protocolos que se encargan
            de que ese paquete llegue a su destino, tambien proporciona
            servicios de comunicacion confiable de extremo a extremo o sevicios
            de comunicacion sin garantia de entrega, segmenta y ordena datos,
            multiplexa conexiones simultaneas. Ademas esta capa realiza
            deteccion y correcion de errores, aunado a ello realiza control de
            flujos, identifica la aplicacion especifica de origen y su destino."
            <br />
            <br />
            <strong>
              Dilson Porras | @dilsonjoan16
            </strong>
            <br />
            Desarrollador de la plataforma TCP/IP UNEFA
          </i>
        </p>
        <router-link to="/internet">
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
        <router-link to="/aplicacion">
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
  name: "Transporte2",
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
