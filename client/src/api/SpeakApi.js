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
    define(['ApiClient', 'model/TextToSpeechRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TextToSpeechRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveSpeechApiClient) {
      root.CloudmersiveSpeechApiClient = {};
    }
    root.CloudmersiveSpeechApiClient.SpeakApi = factory(root.CloudmersiveSpeechApiClient.ApiClient, root.CloudmersiveSpeechApiClient.TextToSpeechRequest);
  }
}(this, function(ApiClient, TextToSpeechRequest) {
  'use strict';

  /**
   * Speak service.
   * @module api/SpeakApi
   * @version 1.1.5
   */

  /**
   * Constructs a new SpeakApi. 
   * @alias module:api/SpeakApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the speakPost operation.
     * @callback module:api/SpeakApi~speakPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Perform text-to-speech on a string
     * Takes as input a string and a file format (mp3 or wav) and outputs a wave form in the appropriate format.
     * @param {String} format File format to generate response in; possible values are \&quot;mp3\&quot; or \&quot;wav\&quot;
     * @param {String} text The text you would like to conver to speech.  Be sure to surround with quotes, e.g. \&quot;The quick brown fox jumps over the lazy dog.\&quot;
     * @param {module:api/SpeakApi~speakPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.speakPost = function(format, text, callback) {
      var postBody = text;

      // verify the required parameter 'format' is set
      if (format === undefined || format === null) {
        throw new Error("Missing the required parameter 'format' when calling speakPost");
      }

      // verify the required parameter 'text' is set
      if (text === undefined || text === null) {
        throw new Error("Missing the required parameter 'text' when calling speakPost");
      }


      var pathParams = {
        'format': format
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/speech/speak/text/basicVoice/{format}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the speakTextToSpeech operation.
     * @callback module:api/SpeakApi~speakTextToSpeechCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Perform text-to-speech on a string
     * Takes as input a string and a file format (mp3 or wav) and outputs a wave form in the appropriate format.
     * @param {module:model/TextToSpeechRequest} reqConfig String input request
     * @param {module:api/SpeakApi~speakTextToSpeechCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.speakTextToSpeech = function(reqConfig, callback) {
      var postBody = reqConfig;

      // verify the required parameter 'reqConfig' is set
      if (reqConfig === undefined || reqConfig === null) {
        throw new Error("Missing the required parameter 'reqConfig' when calling speakTextToSpeech");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/speech/speak/text/voice/basic/audio', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
