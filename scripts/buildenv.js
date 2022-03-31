const fs = require('fs')
fs.writeFileSync('./.env', `REACT_APP_BACKEND_URL=${process.env.REACT_APP_BACKEND_URL}\nPIC_S3=${process.env.PIC_S3}`)