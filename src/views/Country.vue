<template>
    <div>
        <div ref="container"></div>
    </div>
</template>
<script>
export default {
    name:'os',
  mounted(){
        this.get();
    },
    methods:{
        render(series,categories){
           Highcharts.chart(this.$refs.container, {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        },
         height:(window.innerHeight-100)+'px'
    },
    title: {
        text: 'USUARIOS POR PAÍSES'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name} <b>{point.percentage:.1f}%</b>'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Total',
        data: series
    }]
});
        },
        get(){
            $http.get("Counter.php?action=get_country_report").then(response=>{
              if(response.data.state){
                  this.render(response.data.series,response.data.categories);
              }
            });
        }
    }
}
</script>