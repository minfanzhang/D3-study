const canvas = d3.select(".canvas");

const svg = canvas.append('svg')
    .attr('width', 600)
    .attr('height', 600);

svg.append('rect')
    .attr('x', 100)
    .attr('y', 100)
    .attr('width', 150)
    .attr('height', 100)
    .attr('fill', 'blue');
svg.append('circle')
    .attr('cx', 350)
    .attr('cy', 150)
    .attr('r', 50)
    .attr('fill', 'red');
svg.append('line')
    .attr('x1', 450)
    .attr('y1', 100)
    .attr('x2', 550)
    .attr('y2', 250)
    .attr('stroke', 'grey');

svg.append('text')
    .attr('x', 100)
    .attr('y', 250)
    .attr('fill', 'pink')
    .text('hello world')
    .style('font-family', 'arial');