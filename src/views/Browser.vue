<template>
    <div>
        <div ref="container"></div>
    </div>
</template>
<script>
export default {
    name:'browser',
  mounted(){
        this.get();
    },
    methods:{
        render(series,categories){
            Highcharts.chart(this.$refs.container, {
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
        text: 'NAVEGADORES'
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
        name: 'Navegadores',
          colorByPoint: true,
        data: series
    }]
});
        },
        get(){
            $http.get("Counter.php?action=get_browser_report").then(response=>{
              if(response.data.state){
                  this.render(response.data.series,response.data.categories);
              }
            });
        }
    }
}
</script>