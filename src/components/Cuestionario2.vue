<template>
  <div class="Cuestionario2">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6 mx-auto my-auto text-justify">
          <form
            v-on:submit.prevent="enviardato()"
            class="row g-3 mx-auto my-5 rounded text-dark p-4"
            id="formula"
          >
            <div class="col-sm-12 col-md-12 col-lg-12">
              <h3>
                <label for="inputName" class="form-label" id="list-item-1"
                  >Tu nombre crack!</label
                >
              </h3>
              <input
                type="text"
                class="form-control"
                id="inputName"
                placeholder="Dame tu nombre campeon(a)"
                required
                autocomplete="off"
                v-model="nombre"
              />
            </div>
            <!-- PREGUNTA #1 ---- Respuesta es VERDADERO -->
            <div class="col-sm-12 col-md-12 col-lg-12">
              <label for="flexRadioDefault1" class="form-label">
                <strong>Pregunta #1</strong>
                <br />
                ¿Es cierto o falso que, la misión de cada capa del Protocolo
                TCP/IP es proveer servicios a las capas superiores haciéndoles
                transparentes el modo en que esos servicios se llevan a cabo?
              </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="1"
                  v-model="dato"
                  required
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Si que si!
                </label>
                <br />
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="0"
                  v-model="dato"
                  required
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Falso!
                </label>
              </div>
            </div>
            <!-- PREGUNTA #2 ---- Respuesta es VERDADERO -->
            <div class="col-sm-12 col-md-12 col-lg-12">
              <label for="flexRadioDefault2" class="form-label">
                <strong>Pregunta #2</strong>
                <br />
                ¿Es cierto o falso que, la palabra <b>Duplex</b> Es un término
                utilizado en telecomunicaión para definir a un sistema que es
                capaz de manetener una comunicación bidireccional, enviando y
                recibiendo mensajes de frma simultánea?
              </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault2"
                  id="flexRadioDefault2"
                  value="1"
                  v-model="dato2"
                  required
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Si que si!
                </label>
                <br />
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault2"
                  id="flexRadioDefault2"
                  value="0"
                  v-model="dato2"
                  required
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Falso!
                </label>
              </div>
              <!-- PREGUNTA #3 ---- Respuesta VERDADERO -->
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12">
              <label for="flexRadioDefault3" class="form-label">
                <strong>Pregunta #3</strong>
                <br />
                ¿Es cierto o falso que, cuando un equipo debe comunicarse con
                otro, consulta la tabla de búsqueda. Si la dirección requerida
                no se encuentra en la tabla, el protocolo ARP envía una
                solicitud a la red, donde todos los equipos comparan esa
                direccion con la suya y si alguno coincide con la misma responde
                al protocolo?
              </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault3"
                  id="flexRadioDefault3"
                  value="1"
                  v-model="dato3"
                  required
                />
                <label class="form-check-label" for="flexRadioDefault3">
                  Si que si!
                </label>
                <br />
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault3"
                  id="flexRadioDefault3"
                  value="0"
                  v-model="dato3"
                  required
                />
                <label class="form-check-label" for="flexRadioDefault3">
                  Falso!
                </label>
              </div>
              <!-- PREGUNTA #4 ----Respuesta VERDADERO -->
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12">
              <label for="flexRadioDefault4" class="form-label">
                <strong>Pregunta #4</strong>
                <br />
                ¿Es cierto o falso que, La función de la capa de transporte del
                modelo tcp/ip es garantizar que los paquetes lleguen sin errores
                y en secuencia, uno después de otro?
              </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault4"
                  id="flexRadioDefault4"
                  value="1"
                  v-model="dato4"
                  required
                />
                <label class="form-check-label" for="flexRadioDefault4">
                  Si que si!
                </label>
                <br />
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault4"
                  id="flexRadioDefault4"
                  value="0"
                  v-model="dato4"
                  required
                />
                <label class="form-check-label" for="flexRadioDefault4">
                  Falso!
                </label>
              </div>
            </div>
            <!-- PREGUNTA #5 ---- Respuesta VERDADERO -->
            <div class="col-sm-12 col-md-12 col-lg-12">
              <label for="flexRadioDefault5" class="form-label">
                <strong>Pregunta #5</strong>
                <br />
                ¿Es cierto o falso que, la función de la
                <b>Capa de aplicacion del protocolo TCP/IP</b>? depende de la
                aplicación que se use, pero se podría resumir en proporcionar
                servicios de red que proporcionan la interfaz con el sistema
                operativo para que el usuario pueda interactuar acorde con la
                máquina ya sea enviando correos y datos o descargando
                información?
              </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault5"
                  id="flexRadioDefault5"
                  value="1"
                  v-model="dato5"
                  required
                />
                <label class="form-check-label" for="flexRadioDefault5">
                  Si que si!
                </label>
                <br />
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault5"
                  id="flexRadioDefault5"
                  value="0"
                  v-model="dato5"
                  required
                />
                <label class="form-check-label" for="flexRadioDefault5">
                  Falso!
                </label>
              </div>
            </div>

            <div class="col-12">
              <button type="submit" class="btn btn-block btn-outline-dark">
                Obtener resultado!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var a = 4;
var b = 4;
var c = 4;
var d = 4;
var e = 0;
var f = 4;
var resultado = 1;
let valor;
let valor2;
let valor3;
let valor4;
let valor5;

import Swal from "sweetalert2";
export default {
  name: "Cuestionario2",
  data() {
    return {
      dato: "",
      dato2: "",
      dato3: "",
      dato4: "",
      dato5: "",
      resultado: "",
      nombre: "",
    };
  },
  methods: {
    enviardato() {
      valor = this.dato;
      valor2 = this.dato2;
      valor3 = this.dato3;
      valor4 = this.dato4;
      valor5 = this.dato5;
      console.log(this.dato);
      console.log(this.dato2);
      console.log(this.dato3);
      console.log(this.dato4);
      console.log(this.dato5);
      console.log(valor);
      console.log(valor2);
      console.log(valor3);
      console.log(valor4);
      console.log(valor5);

      //SE ASUME QUE 1 ES CORRECTO y 0 ES INCORRECTO PARA LA TABLA DE VALIDACIONES
      //ESTADOS DE LA VALIDACION -> warning, error, success e info

      //todos bien
      if (
        valor == 1 &&
        valor2 == 1 &&
        valor3 == 1 &&
        valor4 == 1 &&
        valor5 == 1
      ) {
        resultado = a + b + c + d + f;
        Swal.fire(
          this.nombre + " Grandioso, lo lograste!",
          "Obtuviste una puntuacion perfecta! " + resultado + " PTOS",
          "success"
        );
      }
      //todos mal
      if (
        valor == 0 &&
        valor2 == 0 &&
        valor3 == 0 &&
        valor4 == 0 &&
        valor5 == 0
      ) {
        resultado = e;
        Swal.fire(
          this.nombre + " Presta mucha atencion!",
          "Obtuviste una puntuacion muy mala! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #1, #2, #3, #4 y #5 ",
          "error"
        );
      }
      //almenos 1 bien en todas las posiciones
      if (
        valor == 1 &&
        valor2 == 0 &&
        valor3 == 0 &&
        valor4 == 0 &&
        valor5 == 0
      ) {
        resultado = a + e;
        Swal.fire(
          this.nombre + " Presta mas atencion!",
          "Obtuviste una puntuacion mala! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #2, #3, #4 y #5 ",
          "error"
        );
      }
      if (
        valor == 0 &&
        valor2 == 1 &&
        valor3 == 0 &&
        valor4 == 0 &&
        valor5 == 0
      ) {
        resultado = a + e;
        Swal.fire(
          this.nombre + " Presta mas atencion!",
          "Obtuviste una puntuacion mala! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #1, #3, #4 y #5 ",
          "error"
        );
      }
      if (
        valor == 0 &&
        valor2 == 0 &&
        valor3 == 1 &&
        valor4 == 0 &&
        valor5 == 0
      ) {
        resultado = a + e;
        Swal.fire(
          this.nombre + " Presta mas atencion!",
          "Obtuviste una puntuacion mala! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #1, #2, #4 y #5 ",
          "error"
        );
      }
      if (
        valor == 0 &&
        valor2 == 0 &&
        valor3 == 0 &&
        valor4 == 1 &&
        valor5 == 0
      ) {
        resultado = a + e;
        Swal.fire(
          this.nombre + " Presta mas atencion!",
          "Obtuviste una puntuacion mala! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #1, #2, #3 y #5 ",
          "error"
        );
      }
      if (
        valor == 0 &&
        valor2 == 0 &&
        valor3 == 0 &&
        valor4 == 0 &&
        valor5 == 1
      ) {
        resultado = a + e;
        Swal.fire(
          this.nombre + " Presta mas atencion!",
          "Obtuviste una puntuacion mala! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #1, #2, #3 y #4 ",
          "error"
        );
      }
      //almenos 2 bien en todas las posiciones
      if (
        valor == 1 &&
        valor2 == 1 &&
        valor3 == 0 &&
        valor4 == 0 &&
        valor5 == 0
      ) {
        resultado = a + b + e;
        Swal.fire(
          this.nombre + " Presta atencion, ya casi!",
          "Obtuviste una puntuacion no muy buena! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #3, #4 y #5 ",
          "error"
        );
      }
      if (
        valor == 1 &&
        valor2 == 0 &&
        valor3 == 1 &&
        valor4 == 0 &&
        valor5 == 0
      ) {
        resultado = a + b + e;
        Swal.fire(
          this.nombre + " Presta atencion, ya casi!",
          "Obtuviste una puntuacion no muy buena! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #2, #4 y #5 ",
          "error"
        );
      }
      if (
        valor == 1 &&
        valor2 == 0 &&
        valor3 == 0 &&
        valor4 == 1 &&
        valor5 == 0
      ) {
        resultado = a + b + e;
        Swal.fire(
          this.nombre + " Presta atencion, ya casi!",
          "Obtuviste una puntuacion no muy buena! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #2, #3 y #5 ",
          "error"
        );
      }
      if (
        valor == 1 &&
        valor2 == 0 &&
        valor3 == 0 &&
        valor4 == 0 &&
        valor5 == 1
      ) {
        resultado = a + b + e;
        Swal.fire(
          this.nombre + " Presta atencion, ya casi!",
          "Obtuviste una puntuacion no muy buena! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #2, #3 y #4 ",
          "error"
        );
      }
      if (
        valor == 0 &&
        valor2 == 1 &&
        valor3 == 1 &&
        valor4 == 0 &&
        valor5 == 0
      ) {
        resultado = a + b + e;
        Swal.fire(
          this.nombre + " Presta atencion, ya casi!",
          "Obtuviste una puntuacion no muy buena! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #1, #4 y #5 ",
          "error"
        );
      }
      if (
        valor == 0 &&
        valor2 == 1 &&
        valor3 == 0 &&
        valor4 == 1 &&
        valor5 == 0
      ) {
        resultado = a + b + e;
        Swal.fire(
          this.nombre + " Presta atencion, ya casi!",
          "Obtuviste una puntuacion no muy buena! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #1, #3 y #5 ",
          "error"
        );
      }
      if (
        valor == 0 &&
        valor2 == 1 &&
        valor3 == 0 &&
        valor4 == 0 &&
        valor5 == 1
      ) {
        resultado = a + b + e;
        Swal.fire(
          this.nombre + " Presta atencion, ya casi!",
          "Obtuviste una puntuacion no muy buena! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #1, #3 y #4 ",
          "error"
        );
      }
      if (
        valor == 0 &&
        valor2 == 0 &&
        valor3 == 1 &&
        valor4 == 1 &&
        valor5 == 0
      ) {
        resultado = a + b + e;
        Swal.fire(
          this.nombre + " Presta atencion, ya casi!",
          "Obtuviste una puntuacion no muy buena! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #1, #2 y #5 ",
          "error"
        );
      }
      if (
        valor == 0 &&
        valor2 == 0 &&
        valor3 == 1 &&
        valor4 == 0 &&
        valor5 == 1
      ) {
        resultado = a + b + e;
        Swal.fire(
          this.nombre + " Presta atencion, ya casi!",
          "Obtuviste una puntuacion no muy buena! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #1, #2 y #4 ",
          "error"
        );
      }
      if (
        valor == 0 &&
        valor2 == 0 &&
        valor3 == 0 &&
        valor4 == 1 &&
        valor5 == 1
      ) {
        resultado = a + b + e;
        Swal.fire(
          this.nombre + " Presta atencion, ya casi!",
          "Obtuviste una puntuacion no muy buena! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #1, #2 y #3 ",
          "error"
        );
      }
      //almenos 3 bien en todas las posiciones
      if (
        valor == 1 &&
        valor2 == 1 &&
        valor3 == 1 &&
        valor4 == 0 &&
        valor5 == 0
      ) {
        resultado = a + b + c + e;
        Swal.fire(
          this.nombre + " Muy bien, puedes mejorarlo!",
          "Obtuviste una puntuacion buena! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #4 y #5 ",
          "warning"
        );
      }
      if (
        valor == 1 &&
        valor2 == 1 &&
        valor3 == 0 &&
        valor4 == 1 &&
        valor5 == 0
      ) {
        resultado = a + b + c + e;
        Swal.fire(
          this.nombre + " Muy bien, puedes mejorarlo!",
          "Obtuviste una puntuacion buena! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #3 y #5 ",
          "warning"
        );
      }
      if (
        valor == 1 &&
        valor2 == 1 &&
        valor3 == 0 &&
        valor4 == 0 &&
        valor5 == 1
      ) {
        resultado = a + b + c + e;
        Swal.fire(
          this.nombre + " Muy bien, puedes mejorarlo!",
          "Obtuviste una puntuacion buena! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #3 y #4 ",
          "warning"
        );
      }
      if (
        valor == 0 &&
        valor2 == 1 &&
        valor3 == 1 &&
        valor4 == 1 &&
        valor5 == 0
      ) {
        resultado = a + b + c + e;
        Swal.fire(
          this.nombre + " Muy bien, puedes mejorarlo!",
          "Obtuviste una puntuacion buena! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #1 y #5 ",
          "warning"
        );
      }
      if (
        valor == 0 &&
        valor2 == 1 &&
        valor3 == 1 &&
        valor4 == 0 &&
        valor5 == 1
      ) {
        resultado = a + b + c + e;
        Swal.fire(
          this.nombre + " Muy bien, puedes mejorarlo!",
          "Obtuviste una puntuacion buena! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #1 y #4 ",
          "warning"
        );
      }
      if (
        valor == 0 &&
        valor2 == 1 &&
        valor3 == 0 &&
        valor4 == 1 &&
        valor5 == 1
      ) {
        resultado = a + b + c + e;
        Swal.fire(
          this.nombre + " Muy bien, puedes mejorarlo!",
          "Obtuviste una puntuacion buena! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #1 y #3 ",
          "warning"
        );
      }
      if (
        valor == 0 &&
        valor2 == 0 &&
        valor3 == 1 &&
        valor4 == 1 &&
        valor5 == 1
      ) {
        resultado = a + b + c + e;
        Swal.fire(
          this.nombre + " Muy bien, puedes mejorarlo!",
          "Obtuviste una puntuacion buena! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #1 y #2 ",
          "warning"
        );
      }
      if (
        valor == 1 &&
        valor2 == 0 &&
        valor3 == 1 &&
        valor4 == 1 &&
        valor5 == 0
      ) {
        resultado = a + b + c + e;
        Swal.fire(
          this.nombre + " Muy bien, puedes mejorarlo!",
          "Obtuviste una puntuacion buena! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #2 y #5 ",
          "warning"
        );
      }
      if (
        valor == 1 &&
        valor2 == 0 &&
        valor3 == 0 &&
        valor4 == 1 &&
        valor5 == 1
      ) {
        resultado = a + b + c + e;
        Swal.fire(
          this.nombre + " Muy bien, puedes mejorarlo!",
          "Obtuviste una puntuacion buena! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #2 y #3 ",
          "warning"
        );
      }
      if (
        valor == 1 &&
        valor2 == 0 &&
        valor3 == 1 &&
        valor4 == 0 &&
        valor5 == 1
      ) {
        resultado = a + b + c + e;
        Swal.fire(
          this.nombre + " Muy bien, puedes mejorarlo!",
          "Obtuviste una puntuacion buena! " +
            resultado +
            " PTOS" +
            " Tus respuestas erroneas fueron la #2 y #4 ",
          "warning"
        );
      }
      //almenos 4 bien en todas las posiciones
      if (
        valor == 1 &&
        valor2 == 1 &&
        valor3 == 1 &&
        valor4 == 1 &&
        valor5 == 0
      ) {
        resultado = a + b + c + f;
        Swal.fire(
          this.nombre + " Excelente, ya falta poco!",
          "Obtuviste una puntuacion muy buena! " +
            resultado +
            " PTOS" +
            " Tu respuesta erronea fue la #5 ",
          "success"
        );
      }
      if (
        valor == 1 &&
        valor2 == 1 &&
        valor3 == 1 &&
        valor4 == 0 &&
        valor5 == 1
      ) {
        resultado = a + b + c + f;
        Swal.fire(
          this.nombre + " Excelente, ya falta poco!",
          "Obtuviste una puntuacion muy buena! " +
            resultado +
            " PTOS" +
            " Tu respuesta erronea fue la #4 ",
          "success"
        );
      }
      if (
        valor == 1 &&
        valor2 == 1 &&
        valor3 == 0 &&
        valor4 == 1 &&
        valor5 == 1
      ) {
        resultado = a + b + c + f;
        Swal.fire(
          this.nombre + " Excelente, ya falta poco!",
          "Obtuviste una puntuacion muy buena! " +
            resultado +
            " PTOS" +
            " Tu respuesta erronea fue la #3 ",
          "success"
        );
      }
      if (
        valor == 1 &&
        valor2 == 0 &&
        valor3 == 1 &&
        valor4 == 1 &&
        valor5 == 1
      ) {
        resultado = a + b + c + f;
        Swal.fire(
          this.nombre + " Excelente, ya falta poco!",
          "Obtuviste una puntuacion muy buena! " +
            resultado +
            " PTOS" +
            " Tu respuesta erronea fue la #2 ",
          "success"
        );
      }
      if (
        valor == 0 &&
        valor2 == 1 &&
        valor3 == 1 &&
        valor4 == 1 &&
        valor5 == 1
      ) {
        resultado = a + b + c + f;
        Swal.fire(
          this.nombre + " Excelente, ya falta poco!",
          "Obtuviste una puntuacion muy buena! " +
            resultado +
            " PTOS" +
            " Tu respuesta erronea fue la #1 ",
          "success"
        );
      }
      this.nombre = "";
      this.dato = "";
      this.dato2 = "";
      this.dato3 = "";
      this.dato4 = "";
      this.dato5 = "";

      this.resultado = resultado;

      console.log(this.resultado);
    },
  },
};
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
.Cuestionario2 {
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
