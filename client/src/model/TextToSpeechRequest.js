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
    root.CloudmersiveSpeechApiClient.TextToSpeechRequest = factory(root.CloudmersiveSpeechApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TextToSpeechRequest model module.
   * @module model/TextToSpeechRequest
   * @version 1.1.5
   */

  /**
   * Constructs a new <code>TextToSpeechRequest</code>.
   * Input to a Text To Speech request
   * @alias module:model/TextToSpeechRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TextToSpeechRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TextToSpeechRequest} obj Optional instance to populate.
   * @return {module:model/TextToSpeechRequest} The populated <code>TextToSpeechRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Format')) {
        obj['Format'] = ApiClient.convertToType(data['Format'], 'String');
      }
      if (data.hasOwnProperty('Text')) {
        obj['Text'] = ApiClient.convertToType(data['Text'], 'String');
      }
    }
    return obj;
  }

  /**
   * File format for output audio file: wav or mp3, default is mp3
   * @member {String} Format
   */
  exports.prototype['Format'] = undefined;
  /**
   * Text to be converted to speech
   * @member {String} Text
   */
  exports.prototype['Text'] = undefined;



  return exports;
}));


