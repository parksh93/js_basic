const kin = {
    name : '김철수',
}

//kin이 재할당되는것을 막는다
// kin = {
//     name: "박상현",
// }
//하지만 프로퍼티의 값 변경을 막을 수 없다
kin.name = "박상횬";

//-> const는 kin이 들고 있는 주소를 재할당하는것을 막는것일뿐 프로퍼티의 값을 바꾸는것은 막을수 없다.