/** @jsx React.DOM */
'use strict'
require('normalize.css');
require('./index.css');
var React = require('react');
var cx = require('classNames');
var Chart = require('chart.js');
var template = "<ul class=\"<%=name.toLowerCase()%>-legend\">" +
                    "<% for (var i=0; i<datasets.length; i++){%>" +
                        "<li>" +
                            "<div class=\"legend-bullet\" style=\"background-color:<%=datasets[i].strokeColor%>\">" +
                            "</div>" +
                            "<div class=\"legend-label\">" +
                                "<%if(datasets[i].label){%><%=datasets[i].label%><%}%>" +
                            "</div>" +
                        "</li>" +
                    "<%}%>" +
                "</ul>";

Chart.defaults.global.animation = false;
Chart.defaults.global.scaleOverride = true;
Chart.defaults.global.scaleSteps = 10;
Chart.defaults.global.scaleStepWidth = 10;
Chart.defaults.global.scaleStartValue = 0;
Chart.defaults.global.scaleFontSize = 28;

var JPMathData = {
    labels: ["Period 1", "Period 2", "Period 3", "Period 4", "Period 5", "Period 6"],
    datasets: [
        {
            label: "2013-2014 Math averages for Jimmy Perkins",
            fillColor: "rgba(160, 27, 18, 0.7)",
            strokeColor: "#B61B12",
            pointColor: "#B61B12",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "#fff",
            data: [91, 87, 89, 91, 90, 92]
        },
        {
            label: "2014-2015 Math averages for Jimmy Perkins",
            fillColor: "rgba(171, 203, 245, 0.7)",
            strokeColor: "#6aa8f5",
            pointColor: "#6aa8f5",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "#fff",
            data: [88, 85, 89, 82, 80, 85]
        }
    ]
};

var JPMRWRData = {
    labels: ["Period 1", "Period 2", "Period 3", "Period 4", "Period 5", "Period 6"],
    datasets: [
        {
            label: "Reading",
            fillColor: "rgba(160, 27, 18, 0.7)",
            strokeColor: "#B61B12",
            pointColor: "#B61B12",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "#fff",
            data: [91, 95, 90, 91, 90, 94]
        },
        {
            label: "Writing",
            fillColor: "rgba(171, 203, 245, 0.7)",
            strokeColor: "#6aa8f5",
            pointColor: "#6aa8f5",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "#fff",
            data: [98, 95, 99, 94, 93, 95]
        },
        {
            label: "Arithmetic",
            fillColor: "rgba(203, 247, 198, 0.7)",
            strokeColor: "#81ca79",
            pointColor: "#81ca79",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "#fff",
            data: [88, 85, 89, 82, 80, 85]
        }
    ]
};

var AttendanceData = {
    labels: ["August", "September", "October", "November", "December", "January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "2009-2010 Absences",
            fillColor: "rgba(160, 27, 18, 0.7)",
            strokeColor: "#B61B12",
            pointColor: "#B61B12",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "#fff",
            data: [14, 62, 82, 89, 79, 71, 43, 62, 46, 14, 0, 0]
        },
        {
            label: "2010-2011 Absences",
            fillColor: "rgba(171, 203, 245, 0.7)",
            strokeColor: "#6aa8f5",
            pointColor: "#6aa8f5",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "#fff",
            data: [7, 9, 32, 76, 27, 120, 79, 88, 65, 20, 0, 0]
        }
    ]
};

var Body = React.createClass({

    componentDidMount() {
        this.renderLineChart();
        this.renderBarChart();
        this.renderRadChart();
        this.renderLineChart1();
        this.renderBarChart1();
        this.renderLineChart2();

    },

    render() {
        return <div className='body'>
            <div>
                <div className="chart-placeholder">
                    <canvas id="lineChart" className="chart"></canvas>
                    <div id="lineChartLegend" ></div>
                </div>
                <div className="chart-placeholder">
                    <canvas id="barChart" className="chart"></canvas>
                    <div id="barChartLegend" ></div>
                </div>
                <div className="chart-placeholder">
                    <canvas id="radChart" className="chart"></canvas>
                    <div id="radChartLegend" ></div>
                </div>
            </div>
            <div>
                <div className="chart-placeholder">
                    <canvas id="lineChart1" className="chart"></canvas>
                    <div id="lineChartLegend1" ></div>
                </div>
                <div className="chart-placeholder">
                    <canvas id="barChart1" className="chart"></canvas>
                    <div id="barChartLegend1" ></div>
                </div>
                <div className="chart-placeholder">
                    <canvas id="lineChart2" className="chart"></canvas>
                    <div id="lineChartLegend2" ></div>
                </div>
            </div>
        </div>;
    },

    renderLineChart() {
        var options = {
            scaleGridLineWidth : 1,
            scaleGridLineColor : "rgba(0,0,0,.5)",
            legendTemplate : template,
            pointDotRadius : 6,
            bezierCurve : false
        };
        var ctx = document.getElementById("lineChart").getContext("2d");
        var chart = new Chart(ctx).Line(JPMathData, options);
        document.getElementById("lineChartLegend").innerHTML = chart.generateLegend();
    },

    renderBarChart() {
        var options = {
            scaleGridLineWidth : 1,
            scaleGridLineColor : "rgba(0,0,0,.5)",
            legendTemplate : template
        };
        var ctx = document.getElementById("barChart").getContext("2d");
        var chart = new Chart(ctx).Bar(JPMRWRData, options);
        document.getElementById("barChartLegend").innerHTML = chart.generateLegend();
    },

    renderRadChart() {
        var options = {
            angleLineWidth : 1,
            angleLineColor : "rgba(0,0,0,.5)",
            pointDotRadius : 4,
            pointLabelFontSize : 28,
            legendTemplate : template,
            scaleOverride : true,
            scaleSteps : 12,
            scaleStepWidth : 10,
            scaleStartValue : 0
        };
        var ctx = document.getElementById("radChart").getContext("2d");
        var chart = new Chart(ctx).Radar(AttendanceData, options);
        document.getElementById("radChartLegend").innerHTML = chart.generateLegend();
    },

    renderLineChart1() {
        var options = {
            scaleGridLineWidth : 1,
            scaleGridLineColor : "rgba(0,0,0,.5)",
            legendTemplate : template,
            pointDotRadius : 6,
            bezierCurve : false,
            scaleOverride : true,
            scaleSteps : 3,
            scaleStepWidth : 10,
            scaleStartValue : 70
        };
        var ctx = document.getElementById("lineChart1").getContext("2d");
        var chart = new Chart(ctx).Line(JPMathData, options);
        document.getElementById("lineChartLegend1").innerHTML = chart.generateLegend();
    },

    renderBarChart1() {
        var options = {
            scaleGridLineWidth : 1,
            scaleGridLineColor : "rgba(0,0,0,.5)",
            legendTemplate : template,
            scaleOverride : true,
            scaleSteps : 3,
            scaleStepWidth : 10,
            scaleStartValue : 70
        };
        var ctx = document.getElementById("barChart1").getContext("2d");
        var chart = new Chart(ctx).Bar(JPMRWRData, options);
        document.getElementById("barChartLegend1").innerHTML = chart.generateLegend();
    },

    renderLineChart2() {
        var options = {
            pointDotRadius : 4,
            pointLabelFontSize : 28,
            scaleGridLineWidth : 1,
            scaleGridLineColor : "rgba(0,0,0,.5)",
            legendTemplate : template,
            scaleOverride : true,
            scaleSteps : 12,
            scaleStepWidth : 10,
            scaleStartValue : 0
        };
        var ctx = document.getElementById("lineChart2").getContext("2d");
        var chart = new Chart(ctx).Line(AttendanceData, options);
        document.getElementById("lineChartLegend2").innerHTML = chart.generateLegend();
    },
});

React.render(<Body />, document.getElementById('content-holder'));
document.body.setAttribute('spellcheck', false);