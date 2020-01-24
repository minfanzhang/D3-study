const data = [
    {width: 200, height: 300, fill: 'red'},
    {width: 100, height: 150, fill: 'green'},
    {width: 50, height: 75, fill: 'yellow'}
];

const svg = d3.select('svg');

const rect = svg.selectAll('rect')
    .data(data)

// add attrs to rects already in the DOM
rect.attr('width', (d, i, n) => { return d.width })
.attr('height', (d) => { return d.height })
.attr('fill', (d) => { return d.fill });

// append the enter selection to the DOM
rect.enter()
    .append('rect')
    .attr('width', (d, i, n) => { return d.width })
    .attr('height', (d) => { return d.height })
    .attr('fill', (d) => { return d.fill });