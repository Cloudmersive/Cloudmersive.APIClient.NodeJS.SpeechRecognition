/**
 * speechapi
 * Speech APIs enable you to recognize speech and convert it to text using advanced machine learning, and also to convert text to speech.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveSpeechApiClient) {
      root.CloudmersiveSpeechApiClient = {};
    }
    root.CloudmersiveSpeechApiClient.SpeechRecognitionResult = factory(root.CloudmersiveSpeechApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SpeechRecognitionResult model module.
   * @module model/SpeechRecognitionResult
   * @version 1.1.6
   */

  /**
   * Constructs a new <code>SpeechRecognitionResult</code>.
   * Result of recognizing speech
   * @alias module:model/SpeechRecognitionResult
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SpeechRecognitionResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpeechRecognitionResult} obj Optional instance to populate.
   * @return {module:model/SpeechRecognitionResult} The populated <code>SpeechRecognitionResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TextResult')) {
        obj['TextResult'] = ApiClient.convertToType(data['TextResult'], 'String');
      }
    }
    return obj;
  }

  /**
   * Recognition result in text format
   * @member {String} TextResult
   */
  exports.prototype['TextResult'] = undefined;



  return exports;
}));


