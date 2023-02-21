// promise, async, await

/**
 * setTimout 語法
 */
// const timeout = setTimeout(() => {
//   // what you want to do after 2 seconds...
//   console.log('trigger!');
// }, 2000);

/**
 * 國中老師批改學生考卷，並給予獎勵
 * - step 1：批改成績
 * - step 2：確認獎品
 */
// function correctTestAndCheckAward(){
//   console.log('批改成績中');
//   setTimeout(() => {
//     const score = Math.random() * 100;
//     setTimeout(() => {
//       if(score >= 90){
//         return '獲得電影票'
//       }else if(score > 60 && score < 90){
//         return '嘉獎'
//       }else{
//         return '毒打'
//       }
//     }, 1000);
//   }, 1000);
// }

// correctTestAndCheckAward();

/**
 * Correcting homework
 */
function correctHomework(name) {
  return new Promise((resolve, reject) => {
    console.log('Correcting homework...');
    setTimeout(() => {
      const score = Math.round(Math.random() * 100);
      if (score >= 60) {
        resolve({ score, name, isPass: 'Passed!' });
      } else {
        reject({ score, name, isPass: 'Failed!' });
      }
    }, 1000);
  });
}

/**
 * Checking out the prize
 */
function checkAward(data) {
  return new Promise((resolve, reject) => {
    console.log('Checking out the prize...');
    setTimeout(() => {
      const { score } = data;
      if (score >= 90) {
        resolve({ ...data, award: 'movie ticket' });
      } else {
        resolve({ ...data, award: 'cookie' });
      }
    }, 1000);
  });
}

/**
 * Pass: score >= 60
 */
function pass(data) {
  const { name, score, isPass, award } = data;
  console.log(`${isPass} ${name} got ${score} and will get a ${award}.`);
}

/**
 * Fail: score < 60
 */
function fail(data) {
  const { name, score, isPass } = data;
  console.log(
    `${isPass} ${name} got ${score} and need to take a make-up exam.`
  );
}

// [Promise chain]
// correctHomework('Alan').then(checkAward).then(pass).catch(fail);

// [async、await]
// async function init() {
//   try {
//     const studentInfo = await correctHomework('Abby');
//     const getAward = await checkAward(studentInfo);
//     pass(getAward);
//   } catch (error) {
//     fail(error);
//   }
// }
// init();
