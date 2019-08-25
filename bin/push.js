const { spawn } = require('child_process')
const argv = process.argv.slice(2)
const options = ['./bin/push.sh', ...argv]
const commit = spawn('sh', options)
commit.stdout.on('data', data => {
  console.log(`${data}`)
})

commit.stderr.on('data', data => {
  console.log(`${data}`)
})

commit.on('exit', code => {
  console.log(`on exit code: ${code}`)
})
