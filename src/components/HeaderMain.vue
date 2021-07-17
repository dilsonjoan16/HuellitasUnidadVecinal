<template>
  <div class="principal">
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <!--<a class="navbar-brand" href="#">Navbar</a>-->
        <button
          class="navbar-toggler bg-info"
          id="color-line"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link text-danger"
                >Inicio</router-link
              >
              <!--<a class="nav-link text-danger" href="./components/Nosotros.vue">Nosotros</a>-->
            </li>
            <li class="nav-item">
              <router-link to="protocolo-general" class="nav-link text-danger"
                >Huellitas</router-link
              >
              <!--<a class="nav-link text-danger" href="./components/Nosotros.vue">Nosotros</a>-->
            </li>
            <li class="nav-item">
              <router-link to="/acceso" class="nav-link text-danger"
                >Actividades</router-link
              >
              <!--<a class="nav-link text-danger" href="./components/Nosotros.vue">Nosotros</a>-->
            </li>
            <li class="nav-item">
              <router-link to="/cuestionario" class="nav-link text-danger"
                >Reto Huellitas</router-link
              >
              <!--<a class="nav-link text-danger" href="./components/Nosotros.vue">Nosotros</a>-->
            </li>
            
            <li class="nav-item">
              <a class="nav-link disabled text-danger" href="#"
                >Huellitas Unidad Vecinal</a
              >
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link disabled text-danger" href="#"
                  >Grupo E09-MD-1-2021</a
                >
              </li>
            </ul>
          </form>
        </div>
      </nav>
      <div>
        <div class="container">
          <div class="row">
            <div class="col-6 mx-auto my-4">
              <div class="list-group hover-zoom mx-auto my-auto">
                <h1
                  class="list-group-item text-danger text-justify mx-auto my-1"
                  id="titulo"
                >
                  Huellitas
                </h1>
                <span
                  class="list-group-item mt-3 text-danger text-justify"
                  id="titulo"
                >
                  <i>
                    En este apartado se tratara sobre los beneficios en general que se dejan
                    al ayudar a estos animales indefensos, el marco prinicipal sera teorico
                    buscando resaltar la importancia de este proyecto debido a que su enfoque primario
                    es el marcar de forma positiva la vida de estas inocentes criaturas.
                  </i>
                </span>
                <!--<hr class="bg-white p-1" />-->
                <!--<router-link to="/">-->
                <a
                  id="titulo"
                  class="list-group-item list-group-item-action my-4"
                  href="#list-item-1"
                >
                  <button
                    class="btn btn-outline-danger my-2 my-sm-0 mx-auto"
                    type="submit"
                    to="/"
                  >
                    Vamos a ello!
                  </button>
                </a>
                <!--</router-link>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "HeaderMain",
};
</script>
<style scoped>
/*ESTILOS DEL NAVBAR*/
.header {
  background: url(../assets/fondo4.jpg) no-repeat center;
  background-size: cover;
  min-height: 100vh;
}
.header .navbar {
  background-color: transparent !important;
}
#titulo {
  background: none;
  border: none;
}
</style>
