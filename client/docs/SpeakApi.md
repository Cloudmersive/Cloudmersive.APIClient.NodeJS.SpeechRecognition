# CloudmersiveImageApiClient.SpeakApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**speakPost**](SpeakApi.md#speakPost) | **POST** /speech/speak/text/basicVoice/{format} | Perform text-to-speech on a string


<a name="speakPost"></a>
# **speakPost**
> Object speakPost(format, text)

Perform text-to-speech on a string

Takes as input a string and a file format (mp3 or wav) and outputs a wave form in the appropriate format.

### Example
```javascript
var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveImageApiClient.SpeakApi();

var format = "format_example"; // String | File format to generate response in; possible values are \"mp3\" or \"wav\"

var text = "text_example"; // String | The text you would like to conver to speech.  Be sure to surround with quotes, e.g. \"The quick brown fox jumps over the lazy dog.\"


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.speakPost(format, text, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**| File format to generate response in; possible values are \&quot;mp3\&quot; or \&quot;wav\&quot; | 
 **text** | **String**| The text you would like to conver to speech.  Be sure to surround with quotes, e.g. \&quot;The quick brown fox jumps over the lazy dog.\&quot; | 

### Return type

**Object**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

