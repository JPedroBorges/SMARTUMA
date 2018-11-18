| Domain | Method | URI | Name | Middleware |
| ------ | ------ |------ |------ |------ |
| | GET\|HEAD  | / | | Closure | web | |
| | GET\|HEAD  | api/sensors                             | sensors.index    | api |       
| | POST      | api/sensors                             | sensors.store    | api |        
| | GET\|HEAD  | api/sensors/{sensor}                    | sensors.show     | api |       
| | PUT\|PATCH | api/sensors/{sensor}                    | sensors.update   |  api |      
| | DELETE    | api/sensors/{sensor}                    | sensors.destroy  |  api |     
| | GET\|HEAD  | api/sensors/{sensor}/measures           | measures.index   | api |    
| | POST      | api/sensors/{sensor}/measures           | measures.store   | api |   
| | GET\|HEAD  | api/sensors/{sensor}/measures/{measure} | measures.show    |  api |  
| | PUT\|PATCH | api/sensors/{sensor}/measures/{measure} | measures.update  |  api |
| | DELETE    | api/sensors/{sensor}/measures/{measure} | measures.destroy |  api |
| | GET\|HEAD  | api/user                                |                  |  api,auth:api |
