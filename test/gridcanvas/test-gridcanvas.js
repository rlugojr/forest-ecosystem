/*---------------JSHint---------------*/
/* global GridCanvas, GridSimulation  */
/* global PubTest                     */
/*------------------------------------*/
'use strict';


(function() {

  // Create GridCanvas
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
  var canvas = new GridCanvas(CONFIG);
  var simulation = new GridSimulation(canvas);


  /**************************
  * Test Suite: GridCanvas *
  **************************/
  var testCanvas = new PubTest('GridCanvas');

  // Test Case: initialization
  testCanvas.testCase(function() {
    testCanvas.assertEqual(CONFIG, canvas.settings, 'matching settings for GridCanvas');
  });

  // Report testCanvas results
  testCanvas.results();


  /*****************************
  * Test Suite: GridSimulation *
  ******************************/
  var testSimulation = new PubTest('GridSimulation');

  // Test Case: initialization
  testSimulation.testCase(function() {
    testSimulation.assertEqual(canvas, simulation.canvas, 'simulation canvas should match canvas');
  });

  // Report testSimulation results
  testSimulation.results();

})();
