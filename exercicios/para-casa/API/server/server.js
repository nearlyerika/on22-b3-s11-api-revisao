const app = require('../app/app')
const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server up and running!\nListening to requests on port ${PORT}`)
})