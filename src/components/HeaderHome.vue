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
            <li class="nav-item active">
              <router-link to="/" class="nav-link text-white"
                >Inicio<span class="sr-only">(current)</span></router-link
              >
              <!--<a class="nav-link text-white" href="">Inicio<span class="sr-only">(current)</span></a>-->
            </li>
            <li class="nav-item">
              <router-link to="/protocolo-general" class="nav-link text-white"
                >Huellitas</router-link
              >
              <!--<a class="nav-link text-white" href="./components/Nosotros.vue">Nosotros</a>-->
            </li>
            <li class="nav-item">
              <router-link to="/acceso" class="nav-link text-white"
                >Actividades</router-link
              >
              <!--<a class="nav-link text-white" href="./components/Nosotros.vue">Nosotros</a>-->
            </li>
            <li class="nav-item">
              <router-link to="/cuestionario" class="nav-link text-white"
                >Reto Huellitas</router-link
              >
              <!--<a class="nav-link text-white" href="./components/Nosotros.vue">Nosotros</a>-->
            </li>
            
            <li class="nav-item">
              <a class="nav-link disabled text-white" href="#"
                >Huellitas Unidad Vecinal</a
              >
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link disabled text-white" href="#"
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
            <div class="col-6 mx-auto">
              <div class="list-group hover-zoom">
                <router-link to="/protocolo-general">
                  <button
                    class="btn btn-outline-secondary my-2 my-sm-0"
                    type="submit"
                    to="/protocolo-general"
                  >
                    Comenzar experiencia
                  </button>
                </router-link>
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
  name: "HeaderHome",
};
</script>
<style scoped>
/*ESTILOS DEL NAVBAR*/
.header {
  background: url(../assets/fondo3.jpg) no-repeat center;
  background-size: cover;
  min-height: 100vh;
}
.header .navbar {
  background-color: transparent !important;
}
</style>
