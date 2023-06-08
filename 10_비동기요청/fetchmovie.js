async function getBoxOffice(){
    const movieList = await fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230505`)
                            .then(async response => await response.json());
    console.log(movieList);
}