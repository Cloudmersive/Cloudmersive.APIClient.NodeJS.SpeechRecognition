# CloudmersiveImageApiClient.RecognizeApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recognizeFile**](RecognizeApi.md#recognizeFile) | **POST** /speech/recognize/file | Recognize audio input as text using machine learning


<a name="recognizeFile"></a>
# **recognizeFile**
> SpeechRecognitionResult recognizeFile(speechFile)

Recognize audio input as text using machine learning

Uses advanced machine learning to convert input audio, which can be mp3 or wav, into text.

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.RecognizeApi();

var speechFile = "/path/to/file.txt"; // File | Speech file to perform the operation on.  Common file formats such as WAV, MP3 are supported.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recognizeFile(speechFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **speechFile** | **File**| Speech file to perform the operation on.  Common file formats such as WAV, MP3 are supported. | 

### Return type

[**SpeechRecognitionResult**](SpeechRecognitionResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

