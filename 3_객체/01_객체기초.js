var cat = {
    'name' : '룰루',
    age : 3,
    hobbies : ['낚시놀이','간식먹기','잠자기'],
    kind : '스코티시폴드', //마지막 요소에도 ,를 붙여주시는게 좋다
};

var watermointor = {
    name : '뚜뚜',
    age : 5,
    hobbies : ['산책하기','수영하기'],
    kind : '물왕도마뱀',
}

console.log(`객체1 타입 : ${typeof cat}, 객체2 타입 : ${typeof watermointor}`);

//저장된 데이터 참조
console.log(watermointor.name);
console.log(cat.hobbies[1]);

console.log(watermointor.hobbies.push('꾹꾹이'));
console.log(watermointor.hobbies);

//프로퍼티 값 수정
cat.age = 1;
console.log(cat['age']);    //객체명[키값]으로도 조회 가능

//새로운 프로퍼티 추가
cat.woner = '박상현';
console.log(cat);

//프로퍼티 삭제
delete cat.woner;
console.log(cat);

console.log('--------------------------');

//프로퍼티의 유무 확인
var ageFlag = 'age' in cat;
console.log(ageFlag);

var ageFlag = 'age123' in cat;
console.log(ageFlag);

//master라는 프로퍼티가 없을때 추가
if (!('master' in cat)) {
    cat['master'] = '룰루주인';
}

console.log(cat);

//객체를 순회하는 반복문
for (const k in watermointor) {
    console.log(`키값 : ${k} 밸류값 :${watermointor[k]}`);
}

//객체 중첩
var items = {
    store : '착한가게',
    //list로 묶은 후 그 안에 객체 생성
    productList : [
        {
            name : '초코과자',
            price : 3000,
            count : 12,
        },
        {
            name : '딸기잼쿠키',
            price : 1500,
            count : 20,
        }
    ]
}

console.log(items.productList[1].name);