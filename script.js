const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 120;   
	
//vertical bars
    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")       
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy")
       .attr("class", "bar")
       .append("title")  // Append a title element to each rect
       .text((d) => d); // Set the text of the title to the data value
	   

      //label
    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30+4)
       .attr("y", (d, i) => h - (d * 3 + 3))
	   
	   
	   
