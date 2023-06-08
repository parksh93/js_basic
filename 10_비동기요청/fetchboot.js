// fetch()를 이용해서 rest서버에 요청을 넣거나 결과를 받을 수 있다
async function loadPersonList(){
    //fetch의 첫번째 파라미터는 요청 주소
    // let result = await fetch("http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230607")
    // .then(async response => await response.json()) //요청을 넣은 이후 동작은 then()안에 함수를 작성해 처리
    //                                     //화면에 뜨는 문자를 json으로 변환
    // console.log(result);

    // return result;
    const response = await fetch(`http://localhost:8080/resttest/person-list`);   //GET방식
    console.dir(response);

    //fetch의 결과로 받은 response의 body에 들어있던 json을 뽑아낼 수 있음
    const jsonData = await response.json();
    console.log('---------json---------');
    console.log(jsonData);
    return jsonData;
}