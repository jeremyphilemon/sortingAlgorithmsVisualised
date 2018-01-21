import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {'data': this.props.data, 'meta': this.props.meta};
    this.createBarChart = this.createBarChart.bind(this);
  }

  componentDidMount() {
    this.createBarChart();
  }

  componentDidUpdate() {
    this.createBarChart();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.meta[1]!==nextProps.meta[1]) {
      this.setState({
        'meta': nextProps.meta
      });
    }
  }

  createBarChart() {
    const node = this.node;
    const dataMax = max(this.props.data);
    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, this.props.size[1]]);

    select(node)
      .selectAll('rect')
      .data(this.state.data)
      .enter()
      .append('rect');

    select(node)
      .selectAll('rect')
      .data(this.state.data)
      .exit()
      .remove();

    select(node)
      .selectAll('rect')
      .data(this.state.data)
      .style('fill', 'whitesmoke')
      .attr('x', (d, i) => i*25)
      .attr('y', d => this.props.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 25)
      .attr('id', (d, i) => i);

    select(node)
      .selectAll('text')
      .data(this.state.data)
      .enter()
      .append('text')
      .attr('x', (d, i) => i*25 + 3)
      .attr('y', d => this.props.size[1] - yScale(d) + 18)
      .style('fill', 'whitesmoke')
      .text((d) => d);

    for(let start=0; start<this.state.meta[0]; start++) {
      select(node).select(`rect[id='${start}']`).style('fill', '#FDCD3D');
    }

    select(node).select(`rect[id='${this.state.meta[0]}']`).style('fill', '#8D2BFF');
    select(node).select(`rect[id='${this.state.meta[1]}']`).style('fill', '#0D8EFF');
  }

  render() {
    return(
      <div className="visualisation">
        <svg ref={node => this.node = node} preserveAspectRatio="xMidYMin" viewBox="0 0 1500 500" shapeRendering="crispEdges"/>
      </div>
    );
  }
}

export default BarChart;