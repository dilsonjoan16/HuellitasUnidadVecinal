<template>
  <div class="Aplicacion2">
    <div class="container">
      <div class="row mx-auto my-auto">
        <h1 class="mx-auto my-4" id="list-item-1">
          Cuarta capa del protocolo TCP/IP
        </h1>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-3">
          <h3>
            ¿Que argumentamos de ella?
          </h3>
          <p>
            La capa de aplicación se encuentra en la parte superior de las capas
            del protocolo TCP/IP. Contiene las aplicaciones de red que permiten
            la comunicación mediante las capas inferiores. Por lo tanto, el
            software en esta capa se comunica mediante uno o dos protocolos de
            la capa inferior (la capa de transporte), es decir, TCP o UDP.
            Existen diferentes tipos de aplicaciones para esta capa, pero la
            mayoría son servicios de red o aplicaciones brindadas al usuario
            para proporcionar la interfaz con el sistema operativo. Se pueden
            clasificar según los servicios que brindan: administración de
            archivos e impresión (transferencia), conexión a la red, conexión
            remota, diversas utilidades de Internet.
          </p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-3">
          <h3>
            ¿Para que la usamos?
          </h3>
          <p>
            Su función depende de la aplicación que se use, pero se podría
            resumir en proporcionar servicios de red que proporcionan la
            interfaz con el sistema operativo para que el usuario pueda
            interactuar acorde con la máquina ya sea enviando correos y datos o
            descargando información.
          </p>
          <h2>
            Protolos que la componen
          </h2>
          <ol>
            <li class="text-justify">
              <strong>
                FTP (File Transfer Protocol)
              </strong>
            </li>
            <li class="text-justify">
              <strong>
                TELNET (Teletype Network)
              </strong>
            </li>
            <li class="text-justify">
              <strong>
                HTTP (Hypertext Transfer Protocol)
              </strong>
            </li>
            <li class="text-justify">
              <strong>
                SMTP (Simple Mail Transfer Protocol)
              </strong>
            </li>
            <li class="text-justify">
              <strong>
                DNS (Domain Name System)
              </strong>
            </li>
          </ol>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 mx-auto my-auto">
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../assets/imago31.jpg"
                  class="d-block w-100 rounded"
                  alt="capa-de-aplicacion"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/imago30.jpg"
                  class="d-block w-100 rounded"
                  alt="capa-de-aplicacion"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/imago29.jpg"
                  class="d-block w-100 rounded"
                  alt="capa-de-aplicacion"
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
      </div>
      <hr class="mx-auto my-3" />
      <div class="row mx-auto my-auto">
        <h2>
          Hablemos sobre los protocolos que intervienen
        </h2>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-3">
          <h3>
            FTP (File Transfer Protocol)
          </h3>
          <p>
            El Protocolo de transferencia de archivos es un protocolo de red
            para la transferencia de archivos entre sistemas conectados a una
            red TCP (Transmission Control Protocol), basado en la arquitectura
            cliente-servidor. Desde un equipo cliente se puede conectar a un
            servidor para descargar archivos desde él o para enviarle archivos,
            independientemente del sistema operativo utilizado en cada equipo.
          </p>
          <h3>
            Seguridad
          </h3>
          <p>
            Un problema básico de FTP es que está pensado para ofrecer la máxima
            velocidad en la conexión, pero no la máxima seguridad, ya que todo
            el intercambio de información, desde el login y password del usuario
            en el servidor hasta la transferencia de cualquier archivo, se
            realiza en texto plano sin ningún tipo de cifrado, con lo que un
            posible atacante puede capturar este tráfico, acceder al servidor
            y/o apropiarse de los archivos transferidos.
          </p>
          <h3>
            Funcion especifica
          </h3>
          <p>
            FTP funciona con un modelo de cliente y servidor. Los archivos se
            suben desde un cliente FTP a un servidor FTP donde una aplicación o
            cliente pueden accederlos.
          </p>
          <img
            src="../assets/imago32.png"
            alt="protocolo-FTP"
            class="rounded w-100"
          />
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-3">
          <h3>
            Solucion a Seguridad
          </h3>
          <p>
            A lo largo del tiempo, se agregaron tres opciones a las
            implementaciones de FTP: Secure Sockets Layer (SSL), Secure Shell
            (SSH) y HTTPS. Los tres son ampliamente utilizados para aumentar la
            seguridad y confiabilidad de las transferencias de archivos al usar
            cifrado para prevenir la visualización y modificación no autorizada
            de datos confidenciales durante la transmisión a través de redes
            abiertas.
          </p>
          <ol>
            <li class="text-justify">
              <strong>
                FTPS
              </strong>
              <p>
                La opción más rápida e implementada es FTPS o FTP sobre SSL.
                FTPS asegura que los archivos viajen a través de FTP con
                Seguridad de capa de transporte (TLS o Transfer Layer Security).
              </p>
            </li>
            <li class="text-justify">
              <strong>
                SFTP
              </strong>
              <p>
                SFTP (protocolo de transferencia de archivos SSH o en inglés,
                SSH File Transfer Protocol) proporciona administración de
                transferencia de archivos a través de un solo canal.
              </p>
            </li>
            <li class="text-justify">
              <strong>
                HTTPS
              </strong>
              <p>
                HTTPS es la versión segura de HTTP. Justo como FTPS utiliza el
                cifrado TLS para transferir archivos.
              </p>
            </li>
          </ol>
          <img
            src="../assets/imago33.webp"
            alt="protocolo-FTP"
            class="rounded w-100"
          />
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-3">
          <h3>
            Telnet
          </h3>
          <p>
            Teletype Network, es el nombre de un protocolo de red que nos
            permite acceder a otra máquina para manejarla remotamente como si
            estuviéramos sentados delante de ella. También es el nombre del
            programa informático que implementa el cliente. Para que la conexión
            funcione, como en todos los servicios de Internet, la máquina a la
            que se acceda debe tener un programa especial que reciba y gestione
            las conexiones.
          </p>
          <h3>
            Funcionamiento
          </h3>
          <p>
            Telnet sólo sirve para acceder en modo terminal, es decir, sin
            gráficos, pero es una herramienta muy útil para arreglar fallos a
            distancia, sin necesidad de estar físicamente en el mismo sitio que
            la máquina que los tenga. También se usaba para consultar datos a
            distancia, como datos personales en máquinas accesibles por red,
            información bibliográfica, etc.
          </p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-3">
          <img src="../assets/imago34.png" alt="telnet" class="rounded w-100" />
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-3">
          <h3>
            Seguridad
          </h3>
          <p>
            Su mayor problema es de seguridad, ya que todos los nombres de
            usuario y contraseñas necesarias para entrar en las máquinas viajan
            por la red como texto plano (cadenas de texto sin cifrar). Esto
            facilita que cualquiera que espíe el tráfico de la red pueda obtener
            los nombres de usuario y contraseñas, y así acceder él también a
            todas esas máquinas. Por esta razón dejó de usarse, casi totalmente,
            hace unos años, cuando apareció y se popularizó el SSH, que puede
            describirse como una versión cifrada de telnet -actualmente se puede
            cifrar toda la comunicación del protocolo durante el establecimiento
            de sesión.
          </p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-3">
          <img src="../assets/imago35.png" alt="telnet" class="rounded w-100" />
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 mx-auto my-3">
          <img src="../assets/imago36.png" alt="telnet" class="rounded w-100" />
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-3">
          <h3>
            HTTP
          </h3>
          <p>
            El Protocolo de transferencia de hipertexto es el protocolo de
            comunicación que permite las transferencias de información a través
            de archivos como XHML, HTML y actualmente podemos incluir JSON. HTTP
            es un protocolo sin estado, es decir, no guarda ninguna información
            sobre conexiones anteriores. El desarrollo de aplicaciones web
            necesita frecuentemente mantener estado. Para esto se usan las
            cookies, que es información que un servidor puede almacenar en el
            sistema cliente. Esto le permite a las aplicaciones web instituir la
            noción de sesión, y también permite rastrear usuarios ya que las
            cookies pueden guardarse en el cliente por tiempo indeterminado.
          </p>
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../assets/imago37.jpg"
                  class="d-block w-100 rounded"
                  alt="protocolo-http-s"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/imago38.jpg"
                  class="d-block w-100 rounded"
                  alt="protocolo-http-s"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/imago39.png"
                  class="d-block w-100 rounded"
                  alt="protocolo-http-s"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/imago40.png"
                  class="d-block w-100 rounded"
                  alt="protocolo-http-s"
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
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-3">
          <h3>
            Peticiones del protocolo
          </h3>
          <p>
            HTTP define una serie predefinida de métodos de petición (algunas
            veces referido como "verbos") que pueden utilizarse. El protocolo
            tiene flexibilidad para ir añadiendo nuevos métodos y para así
            añadir nuevas funcionalidades. Cada método indica la acción que
            desea que se efectúe sobre el recurso identificado. Lo que este
            recurso representa depende de la aplicación del servidor.
          </p>
          <h3>
            Peticiones mas conocidas
          </h3>
          <ol>
            <li class="text-justify">
              <strong>
                GET
              </strong>
              <p>
                El método GET solicita una representación del recurso
                especificado. Las solicitudes que usan GET solo deben recuperar
                datos y no deben tener ningún otro efecto.
              </p>
            </li>
            <li class="text-justify">
              <strong>
                POST
              </strong>
              <p>
                Envía datos para que sean procesados por el recurso identificado
                en la URI de la línea petición. Los datos se incluirán en el
                cuerpo de la petición. A nivel semántico está orientado a crear
                un nuevo recurso
              </p>
            </li>
            <li class="text-justify">
              <strong>
                PUT
              </strong>
              <p>
                Envía datos al servidor, pero a diferencia del método POST la
                URI de la línea de petición no hace referencia al recurso que
                los procesará y mientras que POST está orientado a la creación
                de nuevos contenidos, PUT está más orientado a la actualización
                de los mismos (aunque también podría crearlos).
              </p>
            </li>
            <li class="text-justify">
              <strong>
                DELETE
              </strong>
              <p>
                Borra el recurso especificado.
              </p>
            </li>
            <p>
              <i>
                Esto normalmente se conoce como un
                <b>C</b>reate<b>R</b>ead<b>U</b>pdate<b>D</b>elete (CRUD),
                asociado de manera muy intinima con la metodologia REST.
              </i>
            </p>
          </ol>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-3">
          <h3>
            SMTP
          </h3>
          <p>
            En términos humanos y comprensibles, el SMTP (Simple Mail Transfer
            Protocol, o protocolo simple de transferencia de correo) es un
            protocolo básico que permite que los emails viajen a través de
            Internet. Es decir, es un protocolo de mensajería empleado para
            mandar un email de un servidor de origen a un servidor de destino.
            Este procedimiento, indispensable en el proceso de envío de emails,
            es completado por el servidor SMTP.
          </p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-3">
          <h3>
            ¿Servidor SMTP? ¿Que es?
          </h3>
          <p>
            El servidor SMTP es un ordenador encargado de llevar a cabo el
            servicio SMTP, haciendo las veces de “cartero electrónico” y
            permitiendo el transporte de ese correo electrónico por Internet. La
            retransmisión SMTP funciona de un modo muy sencillo: si el servidor
            SMTP confirma las identidades del remitente y del destinatario,
            entonces el envío se realiza. Digamos que es como la oficina de
            correos de la web: recoge el email del remitente y lo entrega en la
            oficina de correos local del destinatario, que es otro servidor
            SMTP.
          </p>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 mx-auto my-3">
          <img
            src="../assets/imago41.png"
            alt="protocolo-smtp"
            class="rounded w-100"
          />
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-3">
          <h3>
            ¿Que es la retransmision SMTP?
          </h3>
          <p>
            Cuando se envía un email a través del protocolo de retransmisión
            SMTP, lo que se produce es la validación de una serie de comandos de
            texto (de la cadena de caracteres ASCII), que posteriormente son
            enviados a un servidor SMTP. En este proceso no entra en juego el
            contenido del correo electrónico, sino que la atención del lenguaje
            SMTP define exclusivamente en la transmisión.
          </p>
          <h4>
            La conversación se produce mediante comandos de texto muy simples.
            Los más comunes son los siguientes:
          </h4>
          <ol>
            <li class="text-justify">
              <strong>
                HELO:
              </strong>
              <p>
                para abrir una sesión con el servidor.
              </p>
            </li>
            <li class="text-justify">
              <strong>
                MAIL FROM:
              </strong>
              <p>
                para indicar quien envía el mensaje.
              </p>
            </li>
            <li class="text-justify">
              <strong>
                RCPT TO:
              </strong>
              <p>
                para indicar el destinatario del mensaje.
              </p>
            </li>
            <li class="text-justify">
              <strong>
                DATA:
              </strong>
              <p>
                para indicar el comienzo del mensaje
              </p>
            </li>
            <li class="text-justify">
              <strong>
                QUIT:
              </strong>
              <p>
                para cerrar la sesión.
              </p>
            </li>
          </ol>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-3">
          <h3>
            ¿Que tipo de servidor SMTP es mejor?
          </h3>
          <p>
            El establecimiento y mantenimiento de un servidor SMTP propio suele
            ser una opción para aquellas empresas preocupadas por la seguridad y
            el control del proceso, así como por la fiabilidad del servicio,
            pues en ocaciones desconocen los estándares que pueden ofrecer los
            proveedores externos. Si lo que deseamos es obtener una capacidad de
            entrega óptima y beneficiarnos de las herramientas de seguimiento de
            un proveedor de email, sin dejar de utilizar nuestras propias
            aplicaciones para diseñar y enviar tanto correos electrónicos
            transaccionales como de marketing, un servidor SMTP de un tercero es
            la opcion perfecta!
          </p>
          <img
            src="../assets/imago42.png"
            alt="protocolo-SMTP"
            class="rounded"
          />
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-3">
          <h3>
            DNS
          </h3>
          <p>
            El sistema de nombres de dominio (DNS) es la agenda telefónica de
            Internet. Las personas acceden a la información en línea mediante
            los nombres de dominio, como nytimes.com o espn.com. Los navegadores
            web interactúan mediante direcciones de protocolo de Internet (IP).
            DNS traduce los nombres de dominio a direcciones IP para que los
            navegadores puedan cargar los recursos de Internet.
          </p>
          <h3>
            Ventaja que nos otorga!
          </h3>
          <p>
            Cada dispositivo conectado a Internet tiene una dirección IP única
            que pueden usar otras máquinas para encontrar el dispositivo. Con
            los servidores DNS, no es necesario que las personas memoricen
            direcciones IP, tales como 192.168.1.1 (en IPv4) o nuevas
            direcciones IP alfanuméricas más complejas, tales como
            2400:cb00:2048:1::c629:d7a2 (en IPv6).
          </p>
          <img
            src="../assets/imago43.png"
            alt="protocolo-dns"
            class="rounded w-100"
          />
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-3">
          <h3>
            ¿Cual es su funcionamiento?
          </h3>
          <p>
            El proceso de resolución de DNS consiste en convertir un nombre de
            host (tal como www.example.com) en una dirección IP fácil de usar en
            un computadora (tal como 192.168.1.1). Se otorga una dirección IP a
            cada dispositivo en Internet y esa dirección será necesaria para
            encontrar el dispositivo apropiado de Internet, al igual que se usa
            la dirección de una calle para encontrar una casa en particular.
            Cuando un usuario quiere cargar una página web, se debe hacer una
            traducción entre lo que un usuario escribe en su navegador web
            (example.com) y la dirección fácil de usar para la máquina que se
            necesitará para localizar la página web example.com.
          </p>
          <img
            src="../assets/imago44.png"
            alt="protocolo-dns"
            class="rounded w-100"
          />
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 mx-auto my-3">
          <img
            src="../assets/imago45.svg"
            alt="protocolo-dns"
            class="rounded w-100"
          />
        </div>
      </div>
    </div>
    <div class="row mx-auto" id="prefooter">
      <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-4">
        <p class="mx-auto my-auto">
          <i>
            "En sintesis, esta capa representa la capa 5,6,7 del modelo OSI, en
            donde, se manejan las funciones que interactuan con el usuario con
            diferentes protocolos, aunque parezca malo abarcar tantos detalles
            en una sola capa; y ¡Vaya! que realmente son muchos, es
            conceptualmente bueno pues debido a ello, elimina los limites
            difusos existentes en las capas superiores del modelo OSI si lo
            usamos como referencia, ya que ambos la mayoria de las veces se ven
            intrinsecamente relacionados."
            <br />
            <br />
            <strong>
              Dilson Porras | @dilsonjoan16
            </strong>
            <br />
            Desarrollador de la plataforma TCP/IP UNEFA
          </i>
        </p>
        <router-link to="/transporte">
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
        <router-link to="/cuestionario">
          <button
            class="btn btn-outline-dark btn-md my-5 mx-auto"
            type="submit"
          >
            Reto a tu conocimiento!
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Aplicacion2",
};
</script>
<style scoped>
p {
  text-align: justify;
}
li {
  text-align: justify;
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
</style>
