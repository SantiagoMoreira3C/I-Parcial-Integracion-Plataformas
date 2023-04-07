<template>
  <h1 class="bg-danger text-white">TABLA DATOS DE ACTIVOS TECNOLÓGICOS</h1>


  <div>

  </div>

  <table class="table">
  <thead>
    <tr class="p-3 mb-2 bg-primary text-white"  >
      <th  scope="col">ID</th>
      <th scope="col">Activo Tecnológico</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border border-success" v-for="(item, index) in items" :key="index">
      <th  scope="row" > {{ item.id }} </th>
      <td >{{ item.activotecnologico }}</td>
    </tr>

  </tbody>
</table>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  created(){
     axios.get('http://localhost:8080/activos').then(response => this.items = response.data.activos)
  },  
  data() {
      return {
        items: []
      }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
