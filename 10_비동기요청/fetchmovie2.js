
async function getBoxOffice(){   
    let $list = document.getElementById('boxOfficeList');
    const movieList = await fetch(`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230528`)
    .then(async response => await response.json())
    .then(response => response.boxOfficeResult.weeklyBoxOfficeList)
    .then(result => {
        for (let movie of result) {
             $list.innerHTML += `<h1>${movie.rank}위 ${movie.movieNm}</h1>`; 
        }
    }); 
}
