/**
 * speechapi
 * Speech APIs enable you to recognize speech and convert it to text using advanced machine learning, and also to convert text to speech.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SpeechRecognitionResult', 'api/RecognizeApi', 'api/SpeakApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/SpeechRecognitionResult'), require('./api/RecognizeApi'), require('./api/SpeakApi'));
  }
}(function(ApiClient, SpeechRecognitionResult, RecognizeApi, SpeakApi) {
  'use strict';

  /**
   * Speech_APIs_enable_you_to_recognize_speech_and_convert_it_to_text_using_advanced_machine_learning_and_also_to_convert_text_to_speech_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CloudmersiveSpeechApiClient = require('index'); // See note below*.
   * var xxxSvc = new CloudmersiveSpeechApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CloudmersiveSpeechApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CloudmersiveSpeechApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CloudmersiveSpeechApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.1.3
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The SpeechRecognitionResult model constructor.
     * @property {module:model/SpeechRecognitionResult}
     */
    SpeechRecognitionResult: SpeechRecognitionResult,
    /**
     * The RecognizeApi service constructor.
     * @property {module:api/RecognizeApi}
     */
    RecognizeApi: RecognizeApi,
    /**
     * The SpeakApi service constructor.
     * @property {module:api/SpeakApi}
     */
    SpeakApi: SpeakApi
  };

  return exports;
}));
