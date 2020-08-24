var axios = require ('axios');
var express = require('express');
var app = express ();
var mcache = require('memory-cache');


const API_URL = 'https://api.mercadolibre.com';
const ITEMS = '/items';
const SITES = '/sites';

var cache = (duration) => {
    console.log('inicio cache')
    return (req, res, next) => {
    
        let key = '__express__' + req.originalUrl || req.url
    
        let cachedBody = mcache.get(key)
    
        if (cachedBody) {
        
            res.send(cachedBody)
        
            return
        
        } else {
        
            res.sendResponse = res.send
        
            res.send = (body) => {
        
            mcache.put(key, body, duration * 1000);
        
            res.sendResponse(body)
            console.log('estoy en la cache');
            console.log(key +  duration);
            
        
        }
    
        next()
        }
 
    
    }
    
}


const parseItemList = data => {
  let itemList = [];
  

 
  data.results.map(i => {
    itemList.push({
      id: i.id,
      title: i.title,
      price: i.price,
      currency_id: i.currency_id,
      available_quantity: i.available_quantity,
      thumbnail: i.thumbnail,
      condition: i.condition,
      
    });
  });

  return itemList;
};


app.get('/id', cache(10), (req, res) => {
  const query = req.query.q;
  console.log('viene la query search by id');
  console.log(query);
  
  return axios
    
    .get(`https://api.mercadolibre.com/items/MLA821677367`)
    .then(response => {
      res.json(response);
      console.log(resonse.data.responsults)
    })
    .catch(error => {
      console.log(error.message);
    });
});

app.get('/', cache(10), (req, res) => {
  const query = req.query.q;
  console.log('viene la query');
  console.log(req.query.q);
  
  return axios
    
    .get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    .then(response => {
      res.json(parseItemList(response.data));
    })
    .catch(error => {
      console.log(error.message);
    });
});
  
app.listen(3002);
