var ar = ["강아지","고양이"];

 console.log(ar);

 //배열 길이로도 추가 가능
 //ar[3]  ="별이";
 
 //마지막 데이터 추가
 ar.push("별이");
 console.log(ar);
 
 //넣은만큼 들어간단
 ar.push("땡칠이","어완자");
 console.log(ar);
 
 //마지막데이터 삭제
 var deleteDate = ar.pop();
 console.log(`마지막 데이터 삭제 : ${ar} / 삭제된데이터 : ${deleteDate}`);
 
 //첫 데이터 삭제
 deleteDate = ar.shift();
 console.log(`첫데이터 삭제 : ${ar} / 삭제된데이터 : ${deleteDate}`);
 
 //첫 데이터 추가
 ar.unshift("으랑이");
 console.log(ar);

 ar.unshift("아랑이","랭스");
 console.log(ar);
 