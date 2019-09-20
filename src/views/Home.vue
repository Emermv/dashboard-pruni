<template>
  <div>
   <div ref="edition_chart"></div>
  </div>
</template>

<script>
export default {
    name:'home',
    data(){
        return {

        }
    },
    mounted(){
        this.get();
    },
    methods:{
        render(series,categories){
            Highcharts.chart(this.$refs.edition_chart, {
    chart: {
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 0,
            beta: -28,
            depth: 100
        },
        height:(window.innerHeight-100)+'px'
    },
    title: {
        text: 'TOP 20 EDICIONES'
    },
    subtitle: {
        text: ''
    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    xAxis: {
        categories: categories,
        labels: {
            skew3d: true,
            style: {
                fontSize: '16px'
            }
        }
    },
    yAxis: {
        title: {
            text: null
        }
    },
    series: [{
        name: 'Ediciones',
        colorByPoint: true,
        data: series
    }]
});
        },
        get(){
            $http.get("Counter.php?action=get").then(response=>{
              if(response.data.state){
                  this.render(response.data.series,response.data.categories);
              }
            });
        }
    }
}
</script>