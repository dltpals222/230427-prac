import { program } from "commander";

const app = program.command('kdt')
app.action(()=>{
  console.log('wow! 내가 만든 명령어!')
})

program.parse(process.argv)