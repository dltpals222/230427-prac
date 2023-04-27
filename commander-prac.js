import { program } from "commander";

const app = program.command('multi <a> <b> <c>')
app.action((a,b,c)=>{
  const result = (a+b)/c
  console.log(`(${a}+${b})/${c} = ${result}`)
})


const bap = program.command('jwo')
const bapList = ['비빔밥','라면','김밥','도시락','굶기','물']
bap.action(()=>{
  const selectBap = bapList[Math.floor(Math.random()*bapList.length)]
  console.log(`오늘의 점심 밥은 ${selectBap}입니다.`)
})

  program.parse(process.argv)