Remove-Item –path ./client –recurse
& java -jar swagger-codegen-cli.jar generate -i https://api.cloudmersive.com/swagger/api/speech -l javascript -o client -c packageconfig.json
(Get-Content ./client/src/api/RecognizeApi.js).replace('var returnType = Object;', "var returnType = 'Blob';") | Set-Content ./client/src/api/RecognizeApi.js
(Get-Content ./client/src/api/SpeakApi.js).replace('var returnType = Object;', "var returnType = 'Blob';") | Set-Content ./client/src/api/SpeakApi.js
& npm build ./client