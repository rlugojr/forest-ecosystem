/*!
 * Forest Ecosystem Simulation
 * codenameyau.github.io
 *
 * Challenge Description:
 * http://redd.it/27h53e
 * http://codegolf.stackexchange.com/q/35322/30051
 */

/*---------------JSHint---------------*/
/* global GridCanvas, GridSimulation  */
/*------------------------------------*/
'use strict';


/***************************
 * Forest Life Constructor *
 ***************************/
function ForestLife(lifetype) {
  var parameters = this.parameters[lifetype];
  this.type = lifetype;
  this.parameters = parameters;
  this.radius = parameters.radius.start;
  this.age = 0;
}

ForestLife.prototype.parameters = {
  'sapling': {
    maturity: {age: 12, previous: '', next: 'tree'},
    radius: {start: 2, end: 5, growth: (5-2)/12},
    spawn: {chance: 0.0, child: ''},
    color: 'rgba(20, 20, 20, 0.8)',
    movement: 0,
  },

  'tree': {
    maturity: {age: 120, previous: 'sapling', next: 'elder'},
    radius: {start: 5, end: 6, growth: (6-5)/120},
    spawn: {chance: 0.1, child: 'sapling'},
    color: 'rgba(20, 20, 20, 0.8)',
    movement: 0,
  },

  'elder': {
    maturity: {age: 0, previous: 'tree', next: ''},
    radius: {start: 6, end: 6, growth: 0},
    spawn: {chance: 0.2, child: 'sapling'},
    color: 'rgba(20, 20, 20, 0.8)',
    movement: 0,
  },

  'lumberjack': {
    maturity: {age: 0, previous: '', next: ''},
    radius: {start: 4, end: 4, growth: 0},
    spawn: {chance: 0.0, child: ''},
    color: 'rgba(20, 20, 20, 0.8)',
    movement: 3,
  },

  'bear': {
    maturity: {age: 0, previous: '', next: ''},
    radius: {start: 5, end: 5, growth: 0},
    spawn: {chance: 0.0, child: ''},
    color: 'rgba(20, 20, 20, 0.8)',
    movement: 5,
  },
};

ForestLife.prototype.grow = function() {
  this.age++;
};


/**************************
 * Program Initialization *
 **************************/
(function() {

  // Specify configuration
  var CONFIG = {
    canvasID: 'imagination',
    gridRows: 10,
    gridCols: 10,
    cellSize: 10,
    delay: 1000,
    radius: 5,
    treeRatio: 0.5,
    lumberjackRatio: 0.1,
    bearRatio: 0.02,
  };

  // GridCanvas: visualizes the simulation
  // GridSimulation: handles the backend simulation
  var simulationCanvas = new GridCanvas(CONFIG);
  var simulation = new GridSimulation(simulationCanvas);
  var grid = simulation.getGrid();

  // Keep track of statisitcs
  simulation.stats = {
    // Simulation information
    lumber: {year: 0, total: 0},
    maul: {year: 0, total: 0},

    // ForestLife count
    sapling: 0,
    tree: 0,
    elder: 0,
    lumberjack: 0,
    bear: 0,
  };

  // Generate random forest ecosystem based on ratio
  // var gridSize = simulation.getSize();
  // for (var i=0; i<gridSize; i++) {
  //   while (true) {
  //     var pos = simulation.randomPosition();
  //     if (!grid[pos[0]][pos[1]].length) {
  //       grid[pos[0]][pos[1]].push();
  //       break;
  //     }
  //   }
  // }

  console.log(simulation);
  // simulation.run();

})();
