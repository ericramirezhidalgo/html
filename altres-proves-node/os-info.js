const os  = require('os')

console.log('Informació sistema operatiu')

console.log('Nom sistema operatiu: ',os.platform())
console.log('Versió del sistema operatiu: ',os.release())
console.log('CPU: ', os.cpus())
console.log('Memoria total: ',os.totalmem()/1024 / 1024)
console.log('uptime: ',os.uptime() / 60 / 60)