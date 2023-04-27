import inquirer from "inquirer";

let bodyData = [];
const hobbyData = [
  {name : '음악'},
  {name : '영화'},
  {name : '독서'},
  {name : '자전거'},
  {name : '게임'},
  {name : '등산'},
]

inquirer
  .prompt([
    {
      type : 'input',
      name:'name',
      message:'당신의 이름은 무엇인가요?'
    },
    {
      type : 'input',
      name : 'email',
      message : 'email을 입력해주세요',
      validate : value => {
        if(value.indexOf('@')=== -1){
          return '이메일을 입력하지 않았습니다.'
        }
      }
    },
    {
      type : 'checkbox',
      name : 'hobby',
      message : '취미는 무엇인가요?',
      choices : hobbyData,
    },
    {
      type : 'confirm',
      name : 'confirm',
      message : '입력한 정보가 맞습니까?',
      default : true,
    }
  ])
  .then(answers => {
    bodyData.push(answers)
    console.log(`유저 데이터 : `, answers)
  })

  console.log(bodyData)