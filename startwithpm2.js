import micro from 'micro'
import index from './index.js'

const server = micro(index)
server.listen(3000)


//For future reference, this runs npm start:
//pm2 start npm --name "xxx" -- start