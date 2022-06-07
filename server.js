const express = require('express')
const app = express()
const PORT = 8000


const champions = {
  'aatrox': {
    'role': 'fighter',
    'difficulty': 'moderate',
    'skills': 'q,w,e,r'
  },
  'ahri': {
    'role': 'mage',
    'difficulty': 'moderate',
    'skills': 'q,w,e,r'
  },
  'akali': {
    'role': 'assasin',
    'difficulty': 'moderate',
    'skills': 'q,w,e,r'
  }

}

app.get('/',(req, res) => (
  res.sendFile(__dirname + '/index.html')  
))

app.get('/api/:name',(req,res) => {
  const champName = req.params.name.toLowerCase()
  if(champions[champName]){
    res.json(champions[champName])
  }
  res.json(champions)
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!   `)
})