<template>
  <div class="principal">
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <!--<a class="navbar-brand" href="#">Navbar</a>-->
        <button
          class="navbar-toggler bg-warning"
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
            <div class="col-6 mx-auto">
              <div class="list-group hover-zoom">
                <div class="rounded p-3" id="fondo">
                  <h1 class="text-warning mx-auto my-5">
                    <i>
                      FELICIDADES LLEGASTE LEJOS!
                    </i>
                  </h1>
                  <h3>
                    <p class="text-warning mx-auto my-1 text-justify">
                      Ahora el ultimo paso, es un reto al conocimiento.
                      Basandote en todo lo que aprendiste de la plataforma vamos
                      a poner a prueba esos conceptos con un <br />
                      <strong>RETO AL CONOCIMIENTO!</strong>
                    </p>
                  </h3>
                </div>
                <a
                  id="titulo"
                  class="list-group-item list-group-item-action my-4"
                  href="#list-item-1"
                >
                  <button
                    class="btn btn-lg btn-outline-warning my-2 my-sm-0 mx-auto"
                    type="submit"
                    to="/"
                  >
                    ENFRENTAR EL RETO!
                  </button>
                </a>
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
  name: "HeaderCuestionario",
};
</script>
<style scoped>
/*ESTILOS DEL NAVBAR*/
.header {
  background: url(../assets/fondo6.jpg) no-repeat center;
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
#fondo {
  background-color: rgba(70, 70, 70, 0.6);
}
</style>
