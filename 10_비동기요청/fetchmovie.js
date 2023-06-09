

const movieList = fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230608`)
.then(async response => response.json())
.then(response => response.boxOfficeResult.dailyBoxOfficeList)
.then(data => {
    console.log(data);
    getBoxOffice(data);
    setInterval(getBoxOffice,2000,data);

});

let i = 0;
function getBoxOffice(movieList){   
    let $list = document.getElementById('boxOfficeList');
    // let $h1 = document.createElement('h1');
    // let $strong = document.createElement('strong');

    console.log('--------------');
    console.log(movieList);

    let str = `<h1>${movieList[i].rank}위 ${movieList[i].movieNm} (누적 관계수 : ${movieList[i].audiAcc}명)</h1>
                <h1>개봉일 : ${movieList[i].openDt}<h1><hr>`;

    $list.innerHTML = str;
    i++;     

    if(i == movieList.length){
        i = 0;
    }
}
