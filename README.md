![](https://img.shields.io/badge/Express.js-tan?style=for-the-badge)
![](https://img.shields.io/badge/NodeJs-tan?style=for-the-badge)
![](https://img.shields.io/badge/Redis_-tan?style=for-the-badge)
![](https://img.shields.io/badge/Json_Web_Token-deeppink?style=for-the-badge)      
### $\ \ \textcolor{Tan}{REST \ API \ built\ with \ Express, \ which \ allows \ managing \ user  \ authentication \ }$ 

#### $\ \{The \ API \ offers \ two \ main \ endpoints: \ }$ 
  
• $\ \ \textcolor{DeepPink}{/register }$ : 𝘵𝘰 𝘢𝘭𝘭𝘰𝘸 𝘢 𝘯𝘦𝘸 𝘶𝘴𝘦𝘳 𝘵𝘰 𝘳𝘦𝘨𝘪𝘴𝘵𝘦𝘳  
• $\ \ \textcolor{DeepPink}{/login }$  : 𝘵𝘰 𝘢𝘭𝘭𝘰𝘸 𝘢𝘯 𝘦𝘹𝘪𝘴𝘵𝘪𝘯𝘨 𝘶𝘴𝘦𝘳 𝘵𝘰 𝘭𝘰𝘨 𝘪𝘯
  
#### $\ \{Three \ middleware \ functions : \ }$ 
    
• $\ \ \textcolor{Turquoise}{errorMiddleware }$ : 𝘵𝘰 𝘩𝘢𝘯𝘥𝘭𝘦 𝘦𝘳𝘳𝘰𝘳𝘴 𝘢𝘯𝘥 𝘳𝘦𝘵𝘶𝘳𝘯 𝘢𝘱𝘱𝘳𝘰𝘱𝘳𝘪𝘢𝘵𝘦 𝘳𝘦𝘴𝘱𝘰𝘯𝘴𝘦𝘴 𝘵𝘰 𝘵𝘩𝘦 𝘤𝘭𝘪𝘦𝘯𝘵  
• $\ \ \textcolor{Turquoise}{loginRateLimiter }$  : 𝘵𝘰 𝘭𝘪𝘮𝘪𝘵 𝘵𝘩𝘦 𝘯𝘶𝘮𝘣𝘦𝘳 𝘰𝘧 𝘭𝘰𝘨𝘪𝘯 𝘢𝘵𝘵𝘦𝘮𝘱𝘵𝘴 𝘧𝘳𝘰𝘮 𝘵𝘩𝘦 𝘴𝘢𝘮𝘦 𝘐𝘗 𝘢𝘥𝘥𝘳𝘦𝘴𝘴  
     &nbsp;&nbsp;&nbsp;&nbsp; 𝘛𝘩𝘦 𝘭𝘰𝘨𝘪𝘯𝘙𝘢𝘵𝘦𝘓𝘪𝘮𝘪𝘵𝘦𝘳 𝘮𝘪𝘥𝘥𝘭𝘦𝘸𝘢𝘳𝘦 𝘶𝘴𝘦𝘴 𝘵𝘩𝘦 𝘙𝘦𝘥𝘪𝘴 𝘴𝘦𝘳𝘷𝘦𝘳 𝟽.𝟶.𝟷𝟶 𝘢𝘯𝘥 𝘵𝘩𝘦 𝘳𝘢𝘵𝘦-𝘭𝘪𝘮𝘪𝘵𝘦𝘳-𝘧𝘭𝘦𝘹𝘪𝘣𝘭𝘦 𝘭𝘪𝘣𝘳𝘢𝘳𝘺 𝘵𝘰 𝘴𝘵𝘰𝘳𝘦 𝘢𝘯𝘥  
     &nbsp;&nbsp; &nbsp; 𝘮𝘢𝘯𝘢𝘨𝘦 𝘵𝘩𝘦 𝘤𝘰𝘯𝘯𝘦𝘤𝘵𝘪𝘰𝘯 𝘥𝘢𝘵𝘢.  
    &nbsp;&nbsp;&nbsp;&nbsp; 𝘛𝘩𝘪𝘴 𝘢𝘭𝘭𝘰𝘸𝘴 𝘧𝘰𝘳 𝘮𝘰𝘳𝘦 𝘦𝘧𝘧𝘪𝘤𝘪𝘦𝘯𝘵 𝘢𝘯𝘥 𝘳𝘦𝘭𝘪𝘢𝘣𝘭𝘦 𝘳𝘢𝘵𝘦 𝘭𝘪𝘮𝘪𝘵𝘪𝘯𝘨, 𝘢𝘴 𝘙𝘦𝘥𝘪𝘴 𝘪𝘴 𝘢 𝘧𝘢𝘴𝘵 𝘢𝘯𝘥 𝘳𝘦𝘭𝘪𝘢𝘣𝘭𝘦 𝘪𝘯-𝘮𝘦𝘮𝘰𝘳𝘺 𝘥𝘢𝘵𝘢 𝘴𝘵𝘰𝘳𝘦.  
• $\ \ \textcolor{Turquoise}{signUpSchemaValidator}$ : 𝘵𝘰 𝘷𝘢𝘭𝘪𝘥𝘢𝘵𝘦 𝘵𝘩𝘦 𝘶𝘴𝘦𝘳 𝘳𝘦𝘨𝘪𝘴𝘵𝘳𝘢𝘵𝘪𝘰𝘯 𝘥𝘢𝘵𝘢 𝘶𝘴𝘪𝘯𝘨 𝘵𝘩𝘦 𝘑𝘰𝘪 𝘭𝘪𝘣𝘳𝘢𝘳𝘺

#### $\ \{To \ test  : \ }$ 
    
• $\ \ \textcolor{Turquoise}{git \ clone \ URL }$ : 𝘊𝘭𝘰𝘯𝘦 𝘵𝘩𝘪𝘴 𝘳𝘦𝘱𝘰𝘴𝘪𝘵𝘰𝘳𝘺 𝘵𝘰 𝘺𝘰𝘶𝘳 𝘭𝘰𝘤𝘢𝘭 𝘮𝘢𝘤𝘩𝘪𝘯𝘦  
• $\ \ \textcolor{Turquoise}{npm \ install }$  : 𝘐𝘯𝘴𝘵𝘢𝘭𝘭 𝘵𝘩𝘦 𝘥𝘦𝘱𝘦𝘯𝘥𝘦𝘯𝘤𝘪𝘦𝘴  
• $\ \ \textcolor{Turquoise}{npm \ run \ dev }$  : 𝘙𝘶𝘯 𝘵𝘩𝘦 𝘢𝘱𝘱𝘭𝘪𝘤𝘢𝘵𝘪𝘰𝘯

