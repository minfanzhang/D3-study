const data = [
    {width: 200, height: 300, fill: 'red'}
];

const svg = d3.select('svg');

const rect = svg.select('rect')
    .data(data)
    .attr('width', (d, i, n) => { return d.width })
    .attr('height', (d) => { return d.height })
    .attr('fill', (d) => { return d.fill });