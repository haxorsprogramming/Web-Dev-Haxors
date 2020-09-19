const divUtama = {
    data() {
      return {
        nama : 'Aditia'
      }
    },
    methods : {
        gantiTeks : function()
        {
            this.nama = document.querySelector('#txtNama').value;
        }
    }
  }
  
Vue.createApp(divUtama).mount('#divUtama');