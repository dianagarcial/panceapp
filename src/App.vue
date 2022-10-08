<template>
  <NavBar />
  <router-view />
  <Footer />

</template>

<script>
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";

export default {

  components: { NavBar, Footer }
}

</script>


<style>
* {
  margin: 0;
  padding: 0;
}

h1 {
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 3em;

  display: flex;
  align-items: center;

  /* Negro/Negro1 */

  color: #292929;
}

h2 {
  font-family: 'Varela';
  font-style: normal;
  font-weight: 400;
  font-size: 2em;
  line-height: 2em;
  display: flex;
  align-items: center;

  /* Negro/Negro1 */

  color: #292929;
}

div#contenido {
  width: 80%;
  margin: auto;
  margin-top: 10em;
  margin-bottom: 5%;

}

input {
  background: #EEEEEE;
  /* Sombra1 */

  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  width: 95%;
  border: 0;
  padding: 2%;
  font-family: 'Varela';
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  align-items: center;
  outline: none;
}
textarea{
  background: #EEEEEE;
  /* Sombra1 */

  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  width: 95%;
  border: 0;
  padding: 2%;
  font-family: 'Varela';
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  align-items: center;
  outline: none;
}

button#retro {
  /* AzulA */

  border: 3px solid #78E3FD;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.15));
  border-radius: 10px;
  width: 45%;
  padding: 1%;
  font-family: 'Varela';
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  cursor: pointer;

}

button#ir {
  /* AzulA */
  border: 3px solid #78E3FD;
  background: #78E3FD;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;

  width: 45%;
  padding: 1%;
  font-family: 'Varela';
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  cursor: pointer;
}

div#izq {
  display: flex;
  right: 0;
  flex-direction: row;
  width: 50%;
  float: right;
  justify-content: space-around;
  margin-top: 3%;
  margin-bottom: 2%;
  margin-right: 0;
  margin-right: -1%;
}

h3 {
  font-family: 'Varela';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5em;
  line-height: 47px;
  display: flex;
  align-items: center;

  /* Negro/Negro1 */

  color: #292929;

}
</style>

