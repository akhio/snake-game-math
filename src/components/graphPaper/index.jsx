import React, { useEffect } from "react";
import "./index.css";

function GraphPaper() {
  useEffect(() => {
    const el = document.getElementById("my-canvas");
    console.log(el);
    var grid_size = 25;
    var x_axis_distance_grid_lines = 14;
    var y_axis_distance_grid_lines = 26;
    var x_axis_starting_point = { number: 1, suffix: "\u03a0" };
    var y_axis_starting_point = { number: 1, suffix: "" };

    var canvas = document.getElementById("my-canvas");
    var ctx = canvas.getContext("2d");

    // canvas width
    var canvas_width = canvas.width;

    // canvas height
    var canvas_height = canvas.height;

    // no of vertical grid lines
    var num_lines_x = Math.floor(canvas_height / grid_size);

    // no of horizontal grid lines
    var num_lines_y = Math.floor(canvas_width / grid_size);

    // Draw grid lines along X-axis
    for (var i = 0; i <= num_lines_x; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;

      // If line represents X-axis draw in different color
      if (i === x_axis_distance_grid_lines) ctx.strokeStyle = "#000000";
      else ctx.strokeStyle = "#e9e9e9";

      if (i === num_lines_x) {
        ctx.moveTo(0, grid_size * i);
        ctx.lineTo(canvas_width, grid_size * i);
      } else {
        ctx.moveTo(0, grid_size * i + 0.5);
        ctx.lineTo(canvas_width, grid_size * i + 0.5);
      }
      ctx.stroke();
    }

    // Draw grid lines along Y-axis
    for (i = 0; i <= num_lines_y; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;

      // If line represents Y-axis draw in different color
      if (i == y_axis_distance_grid_lines) ctx.strokeStyle = "#000000";
      else ctx.strokeStyle = "#e9e9e9";

      if (i == num_lines_y) {
        ctx.moveTo(grid_size * i, 0);
        ctx.lineTo(grid_size * i, canvas_height);
      } else {
        ctx.moveTo(grid_size * i + 0.5, 0);
        ctx.lineTo(grid_size * i + 0.5, canvas_height);
      }
      ctx.stroke();
    }

    ctx.translate(
      y_axis_distance_grid_lines * grid_size,
      x_axis_distance_grid_lines * grid_size
    );

    // Ticks marks along the positive X-axis
    for (i = 1; i < num_lines_y - y_axis_distance_grid_lines; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#000000";

      // Draw a tick mark 6px long (-3 to 3)
      ctx.moveTo(grid_size * i + 0.5, -3);
      ctx.lineTo(grid_size * i + 0.5, 3);
      ctx.stroke();

      // Text value at that point
      ctx.font = "9px Arial";
      ctx.textAlign = "start";
      ctx.fillText(
        x_axis_starting_point.number * i + x_axis_starting_point.suffix,
        grid_size * i - 2,
        15
      );
    }

    // Ticks marks along the negative X-axis
    for (i = 1; i < y_axis_distance_grid_lines; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#000000";

      // Draw a tick mark 6px long (-3 to 3)
      ctx.moveTo(-grid_size * i + 0.5, -3);
      ctx.lineTo(-grid_size * i + 0.5, 3);
      ctx.stroke();

      // Text value at that point
      ctx.font = "9px Arial";
      ctx.textAlign = "end";
      ctx.fillText(
        -x_axis_starting_point.number * i + x_axis_starting_point.suffix,
        -grid_size * i + 3,
        15
      );
    }
    // Ticks marks along the positive Y-axis
    // Positive Y-axis of graph is negative Y-axis of the canvas
    for (i = 1; i < num_lines_x - x_axis_distance_grid_lines; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#000000";

      // Draw a tick mark 6px long (-3 to 3)
      ctx.moveTo(-3, grid_size * i + 0.5);
      ctx.lineTo(3, grid_size * i + 0.5);
      ctx.stroke();

      // Text value at that point
      ctx.font = "9px Arial";
      ctx.textAlign = "start";
      ctx.fillText(
        -y_axis_starting_point.number * i + y_axis_starting_point.suffix,
        8,
        grid_size * i + 3
      );
    }

    // Ticks marks along the negative Y-axis
    // Negative Y-axis of graph is positive Y-axis of the canvas
    for (i = 1; i < x_axis_distance_grid_lines; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#000000";

      // Draw a tick mark 6px long (-3 to 3)
      ctx.moveTo(-3, -grid_size * i + 0.5);
      ctx.lineTo(3, -grid_size * i + 0.5);
      ctx.stroke();

      // Text value at that point
      ctx.font = "9px Arial";
      ctx.textAlign = "start";
      ctx.fillText(
        y_axis_starting_point.number * i + y_axis_starting_point.suffix,
        8,
        -grid_size * i + 3
      );
    }
  }, []);

  return (
    <div>
      <canvas id="my-canvas" width={1300} height={"700vh"}></canvas>
    </div>
  );
}

export default GraphPaper;
