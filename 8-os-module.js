const os = require('os')

//into about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds

console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS ={
    name: os.type(),
    release: os.release(),
    totaleMem: os.totalmem(),
    freeMen: os.freemem(),
}
console.log(currentOS)