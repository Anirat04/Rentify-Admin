//component added by "Fahima"

import { Component } from "react";
import ReactApexChart from "react-apexcharts";

class PieChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Residential", "Commercial", "Apartment"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart" className="">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="pie"
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default PieChart;
