# API

| Domain | Method | URI | Name | Action | Middleware |
| ------ | ------ |------ |------ |------ |------ |
| | GET\|HEAD  | / | | Closure | web | |
| | GET\|HEAD  | api/sensors                             | sensors.index    | App\Http\Controllers\SensorController@index    | api |       
| | POST      | api/sensors                             | sensors.store    | App\Http\Controllers\SensorController@store    | api |        
| | GET\|HEAD  | api/sensors/{sensor}                    | sensors.show     | App\Http\Controllers\SensorController@show     | api |       
| | PUT\|PATCH | api/sensors/{sensor}                    | sensors.update   | App\Http\Controllers\SensorController@update   | api |      
| | DELETE    | api/sensors/{sensor}                    | sensors.destroy  | App\Http\Controllers\SensorController@destroy  | api |     
| | GET\|HEAD  | api/sensors/{sensor}/measures           | measures.index   | App\Http\Controllers\MeasureController@index   | api |    
| | POST      | api/sensors/{sensor}/measures           | measures.store   | App\Http\Controllers\MeasureController@store   | api |   
| | GET\|HEAD  | api/sensors/{sensor}/measures/{measure} | measures.show    | App\Http\Controllers\MeasureController@show    | api |  
| | PUT\|PATCH | api/sensors/{sensor}/measures/{measure} | measures.update  | App\Http\Controllers\MeasureController@update  | api |
| | DELETE    | api/sensors/{sensor}/measures/{measure} | measures.destroy | App\Http\Controllers\MeasureController@destroy | api |
| | GET\|HEAD  | api/user                                |                  | Closure                                        | api,auth:api |
