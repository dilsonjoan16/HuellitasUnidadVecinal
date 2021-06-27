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
              <router-link to="/" class="nav-link text-white"
                >Inicio</router-link
              >
              <!--<a class="nav-link text-white" href="./components/Nosotros.vue">Nosotros</a>-->
            </li>
            <li class="nav-item">
              <router-link to="/cuestionario" class="nav-link text-white"
                >Cuestionario</router-link
              >
              <!--<a class="nav-link text-white" href="./components/Nosotros.vue">Nosotros</a>-->
            </li>
            <li class="nav-item">
              <router-link to="/calculadora" class="nav-link text-white"
                >Calculadora Ip</router-link
              >
              <!--<a class="nav-link text-white" href="./components/Nosotros.vue">Nosotros</a>-->
            </li>
            <li class="nav-item active">
              <router-link to="/protocolo-general" class="nav-link text-white"
                >TCP/IP<span class="sr-only">(current)</span></router-link
              >
              <!--<a class="nav-link text-white" href="">Inicio<span class="sr-only">(current)</span></a>-->
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Capas
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/acceso" class="dropdown-item"
                  >Acceso</router-link
                >
                <router-link to="/internet" class="dropdown-item"
                  >Internet</router-link
                >
                <!--<a class="dropdown-item" href="./components/Movies.vue">Mejor valoradas</a>
                            <a class="dropdown-item" href="./components/NewMovies.vue">Mejor del momento</a>-->
                <div class="dropdown-divider"></div>
                <router-link to="/transporte" class="dropdown-item"
                  >Transporte</router-link
                >
                <router-link to="/aplicacion" class="dropdown-item"
                  >Aplicacion</router-link
                >
                <!--<a class="dropdown-item" href="#">Algo mas</a>-->
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled text-white" href="#"
                >Protocolo TCP/IP</a
              >
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link disabled text-white" href="#"
                  >Aplicacion Educativa TPC/IP U.N.E.F.A</a
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
                  class="list-group-item text-white text-justify mx-auto my-1"
                  id="titulo"
                >
                  El Protocolo mas usado
                </h1>
                <span
                  class="list-group-item mt-3 text-white text-justify"
                  id="titulo"
                >
                  <i>
                    TCP/IP es un conjunto de protocolos que permiten la
                    comunicación entre los ordenadores pertenecientes a una red.
                    La sigla TCP/IP significa Protocolo de control de
                    transmisión/Protocolo de Internet. Proviene de los nombres
                    de dos protocolos importantes incluidos en el conjunto
                    TCP/IP , es decir, del protocolo TCP y del protocolo IP.
                  </i>
                </span>
                <hr class="bg-white p-1" />
                <!--<router-link to="/">-->
                <a
                  id="titulo"
                  class="list-group-item list-group-item-action my-4"
                  href="#list-item-1"
                >
                  <button
                    class="btn btn-outline-info my-2 my-sm-0 mx-auto"
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
