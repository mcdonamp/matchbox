/**
 * Creates a LIBRARY_NAME instance.
 *
 * @constructor
 * @this {LIBRARY_NAME}
 * @param {Firebase} firebaseRef A Firebase reference where the LIBRARY_NAME data will be stored.
 */
var LIBRARY_NAME = function(firebaseRef) {
  /********************/
  /*  PUBLIC METHODS  */
  /********************/

  this.publicMethod = function(args) {
    return args;
  };

  /*********************/
  /*  PRIVATE METHODS  */
  /*********************/
  
  function _privateMethod(args) {
    return args;
  }

  /*****************/
  /*  CONSTRUCTOR  */
  /*****************/
  
  if (Object.prototype.toString.call(firebaseRef) !== "[object Object]") {
    throw new Error("firebaseRef must be an instance of Firebase");
  }

  /************************/
  /*  INSTANCE VARIABLES  */
  /************************/

  var _firebaseRef = firebaseRef;
};

/********************/
/*  STATIC METHODS  */
/********************/

LIBRARY_NAME.staticMethod = function(args) {
  return args;
};
