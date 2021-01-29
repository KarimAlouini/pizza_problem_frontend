<template>
  <canvas ref="myChart"></canvas>
</template>
<script>
import { Bar } from "vue-chartjs";
import Chart from "chart.js";
export default {
  name: "Top10",
  extends: Bar,
  props: {
    label: {
      type: Array,
    },
    chartData: {
      type: Array,
    },
  },
  async mounted() {
    await new Chart(this.$refs.myChart, {
      type: "bar",
      data: {
        labels: this.label,
        datasets: [
          {
            label: "Press to get USERS",
            borderColor: "rgba(207, 0, 15, 1)",
            backgroundColor: "rgba(207, 0, 15, 1)",
            data: this.chartData,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  },
};
</script>
