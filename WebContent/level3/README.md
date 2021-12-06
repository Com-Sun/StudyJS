# 연습문제 3

## 소수 출력하기

1 - 10000 사이의 소수를 화면에 출력하는 프로그램을 작성해 봅시다.
* HTML + JS로 작성할 것
* 객체와 메소드를 사용해 볼 것
* 최대한 예쁘게 만들어 볼 것

## 구현할 객체와 메소드 예시

	numbers = {};
	numbers.all = [];
	numbers.prime = [];
	numbers.isPrime = function(number);
	numbers.addPrime = function(number);
	numbers.getAllPrimes = function();
	numbers.addAll = function(max_num);
	
## JSON 표기법

* JSON 객체는 중괄호 블록 "{", "}" 으로 표기합니다.
* JSON 배열은 대괄호 블록 "[", "]" 으로 표기합니다.
* 속성(Key)과 값(Value) 쌍으로 이룹니다.
* 속성과 값이 쌍을 이룰 때 콜론으로 구분하며 속성 : 값 형태로 표기합니다.
* 속성은 쌍따옴표(")로 묶어 표기하며, 값은 자료형에 따라 표기 방법이 달라집니다. ex) "age" : 3
* 속성이 여러개인 경우 ,(콤마)로 구분합니다.
