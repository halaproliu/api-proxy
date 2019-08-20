const { spawn } = require('child_process')
const commit = spawn('sh', ['./bin/push.sh'])
commit.stdout.on('data', data => {
  console.log(`${data}`)
})

commit.stderr.on('data', data => {
  console.log(`${data}`)
})

commit.on('exit', code => {
  console.log(`on exit code: ${code}`)
})
