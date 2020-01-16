const canvas = d3.select(".canvas");

const svg = canvas.append('svg')
    .attr('width', 600)
    .attr('height', 600);

svg.append('rect');
svg.append('circle');
svg.append('line');