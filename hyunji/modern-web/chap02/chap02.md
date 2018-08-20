## 기본 문법
> 2018.08.20, 작성자: 유현지

### 기본 용어
1) 표현식: 값을 만들어내는 간단한 코드
2) 문장: 하나 이상의 표현식이 모여 구성되는 코드를 읽어 들이는 단위가 되는 것
3) 키워드: 프로그래밍 언어가 처음 만들어질 때 정해진 특별한 의미가 있는 단어
4) 식별자: 이름을 붙일 때 사용하는 단어
5) 주석: 프로그램 코드를 설명하며, 프로그램의 진행에 전혀 영향을 주지 않는 문장
6) 문자열: 문자를 표현할 때 사용하는 자료형
7) 숫자: 숫자를 표현할 때 사용하는 자료형
8) 불: 참과 거짓을 표현할 때 사용하는 자료형
9) 변수: 값을 저장할 때 사용하는 식별자

<br>

---
### 논리 연산자   
- 논리곱 연산자

| 좌변 | 우변 | 결과 |
| --- | --- | --- |
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

- 논리합 연산자

| 좌변 | 우변 | 결과 |
| --- | --- | --- |
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | false |

#### 비교 연산자 주의
```$xslt
<script>
    alert(30 > 20 > 10);
</script>
```
```$xslt
alert( (30>20) > 10 );
alert( true > 10 );
alert ( 1 > 10 );
alert(false);
```

---
### 자료형
- 문자열
- 숫자
- 불
- 함수
- 객체
- undefined

```$xslt
<script>
    var StringVar = 'String';
    var numberVar = 273;
    var booleanVar = true;
    var functionVar = function() {};
    var objectVar = {};
</script>
```

