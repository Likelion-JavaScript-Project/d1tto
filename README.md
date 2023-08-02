# **멋쟁이 사자처럼 프론트엔드 스쿨 6기<br>JavaScript 프로젝트**

<div align="center">

</div>

# **🦁Lion Place🦁**

## 📆 목차 및 기간

- 목차

1. <a href="#a1">메인 페이지</a>
   > ➡️ 로그인 / 회원가입
2. <a href="#a2">관심지역 설정</a>
3. <a href="#a3">방문 탭</a>
4. <a href="#a4">리뷰 탭</a>
   > ➡️ 테마 추가하기
5. <a href="#a3">지도 페이지</a>

- 기간 : 2023 / 07 / 23 ~ 2023 / 08 / 02

## **팀 구성**

### 팀 이름 : d1tto

#### 조장

- 김다연 : <a>https://github.com/dani-day</a>

  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" height="30px"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white" height="30px"> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" height="30px">

  👉 메인 페이지 | 로그인 페이지 | 회원가입 페이지 | 테마 추가하기 페이지 | 방문 탭 | 관심지역 설정

  <br>

  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" height="30px">

  👉 메인 페이지 | 로그인 페이지 | 회원가입 페이지 | 테마 추가하기 페이지

#### 스크럼 마스터

- 김경아 : <a>https://github.com/201810902</a>

  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" height="30px"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white" height="30px"> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" height="30px"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" height="30px">

  👉 지도 페이지

  <br>

  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" height="30px">

  👉 방문 탭

#### 팀원

- 이준석 : <a>https://github.com/ljunseok0514</a>

  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" height="30px"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white" height="30px"> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" height="30px">

  👉 공통 Header, 하단 Navigation

  <br>

  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" height="30px">

  👉 관심지역 설정

<br>

- 김태일 : <a>https://github.com/seumomo</a>

  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" height="30px"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white" height="30px"> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" height="30px"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" height="30px">

  👉 리뷰 탭

  <br>

  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" height="30px">

  👉 공통 Header, 하단 Navigation

## 프로젝트 진행 시 준수사항

- 적절한 헤딩 사용하기, 시맨틱 마크업에 신경쓰기
- 문법 오류 없도록 구현하기
- 페이지 단위로 구현하기
- 네이밍 시 BEM 패턴 사용하기
- `Tailwind CSS` 사용하여 스타일링

### 기능별 요구사항

- 슬라이드 기능은 `swiper.js`로 구현
- 회원가입 기능 구현 ➡️ 유효성 검사를 통과해야만 제출 버튼 활성화
  - `LocalStorage`에 고유 `ID`를 저장 ➡️ 로그아웃을 하기 전까지는 자동로그인
- 로그인 ➡️ 필수 항목을 모두 입력해야만 로그인 버튼 활성화
- 지도 API 사용
- 데이터를 설계하여 리뷰 랜더링

## [설명자료 보기](https://slides.com/dayeonkim/minimal-cf442b/fullscreen)

### 접근 방법

1. **_메인 페이지_** ➡️ **_로그인 하기_** | **_회원가입 하기_**
2. **_로그인 하기_** ➡️ **_관심지역 설정_** ➡️ **_방문 탭_** ➡️ **_리뷰 탭_** ➡️ **_테마 추가하기_**
3. **_회원가입 하기_** ➡️ **_로그인 하기_**
4. **_공통 헤더_** ➡️ **_로그아웃_** ➡️ **_메인 페이지_**
   > **_로그아웃하지 않을 경우, 메인 페이지에서 시작하기를 누르면 방문 탭에서 시작_**
5. **_공통 헤더_** ➡️ **_방문 탭_** | **_리뷰 탭_**
6. **_하단 네비게이션_** ➡️ **_지도 페이지_** | **_방문 탭_**

# 기술 스택

## 환경

<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
## 사용 기술

  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

## 소통

<img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=black">

# 시작 가이드

- `git clone https://github.com/Likelion-JavaScript-Project/d1tto`

* `json-server` ➡️ 0.17.3
* `live-server` ➡️ 1.2.2
* `npm-run-all` ➡️ 4.1.5
* `postcss-import` ➡️ 15.1.0
* `prettier` ➡️ 3.0.0
* `prettier-plugin-tailwindcss` ➡️ 0.4.1
* `tailwindcss` ➡️ 3.3.3
  👉 `npm i`

## 결과물

<div align="center">

## <h2 id="a1">메인 페이지 / 로그인 하기 / 회원가입 하기</h2>

(김다연)

</div>

<div align="center">

![dayeon_main](https://github.com/seumomo/Project-F4/assets/127176650/78436ac1-8a2e-44cb-a0ca-6ebcbf48a565)

</div>

- 시작하기
  ➡️ 버튼을 누르면 로그인 창으로 이동

<br>

<div align="center">

![dayeon_login](https://github.com/seumomo/Project-F4/assets/127176650/1aa7e119-fa0e-4969-9c5b-8b7e7a6be176)

</div>

- 회원가입
  ➡️ 로그인 창에 회원가입 누르면 회원가입 화면 이동
  ➡️ 아이디, 이메일, 비밀번호가 조건에 맞는 경우에만 제출 버튼 활성화
  ➡️ 제출 버튼 클릭 시, 아이디 중복 확인
  ➡️ 중복이 확인되면 아이디 제외한 `input` 칸은 초기화
  ➡️ 아이디 중복 문구 렌더링
  ➡️ 회원가입 완료 시, 해당 아이디의 고유한 `token` 생성됨
  ➡️ `token과` 함께 회원정보 `data.json`에 저장됨
  ➡️ 모두 완료 시, 로그인 페이지로 이동

<div align="center">

![login](https://github.com/Likelion-JavaScript-Project/d1tto/assets/127176650/afa7d7d8-ae91-447e-978c-dcec39447bfd)

</div>

- 로그인
  ➡️ 아이디 및 비밀번호 입력칸이 공란이 아닐 경우, 로그인 버튼 활성화
  ➡️ 로그인 버튼 클릭 시 `json` 데이터 활용하여 아이디, 비밀번호 확인
  ➡️ 로그인 성공한 경우, 해당 계정의 고유 `token을` `localStorage에` 저장

- 자동로그인 & 로그아웃
  ➡️ `localStorage`에 고유 `token`이 있는 경우, 로그인 화면을 생략하고 자동로그인
  ➡️ 로그아웃 버튼을 클릭하면 `localStorage`의 `token` 삭제
  ➡️ 로그아웃하여 `localStorage`에 고유 `token`이 없는 경우, 주소창에 강제 입력하여 경로 이동하더라도 로그인 화면으로 리디렉션

---

<div align="center">
  
## <h2 id="a3">방문 탭 / 지도 페이지</h2>

(김경아)

</div>

<div align="center">

![kyounga_map](https://github.com/seumomo/Project-F4/assets/127176650/dfb2ed67-e66c-49a6-be06-b04711c93060)

</div>

- 방문 탭
  ➡️ `json` 데이터를 받아와서 화면에 랜더링(미완성)
  ➡️ 리뷰 작성 버튼을 누르면 리뷰 조회 및 작성 가능한 리뷰 페이지로 이동
- 지도 페이지
  ➡️ 화면 하단의 네비게이션 메뉴를 통해 접근 가능, 지도 확대 및 축소 기능
  ➡️ 특정 지역의 마커 표시 가능
  ➡️ 로드맵 뷰 `on`/`off` (미완성)

---

<div align="center">
  
## <h2 id="a2">관심지역 설정하기</h2>

(이준석)

</div>

<div align="center">

![Aug-02-2023_11-50-34](https://github.com/seumomo/Project-F4/assets/127176650/b43be0b2-3e77-453c-9a45-1413b2210e49)

</div>

- 아무것도 선택하지않고 저장버튼을 누르면 `alert창이` 뜸
- 지역버튼이 토글로 `css가` 반응함
- 선택한 지역을 저장하면 1개의 토큰별로 `body가` 생성됨
- 동일한 토큰이 지역을 다시 선택하고 저장하면 `data.json`에 있던 기존 값은 지워지고 새로운 값만 저장됨

---

<div align="center">
  
## <h2 id="a4">리뷰 탭 | 공통 header, 하단 navigation</h2>

(김태일)

</div>

<div align="center">

![commonLoginTiger](https://github.com/seumomo/Project-F4/assets/127176650/0143729b-7a2d-4288-bd1f-d3c7df3bbd31)
![commonLoginSeulbi](https://github.com/seumomo/Project-F4/assets/127176650/c2319f74-cb3b-47f6-abbd-266fbcda6d65)

</div>

- 로그인한 User의 Data와 일치하는 정보를 랜더링
  ➡️ `forEach` 반복문을 통해 User의 `name`, `profile image`, `review count`, `photo count`, `following`, `follower`의 `item`을 만들어 랜더링
  👉 `review count`는 해당 User가 가지고 있는 Data의 리뷰의 수를 랜더링하도록 함
  👉 `photo count`는 User의 리뷰 중 이미지의 경로가 존재하는 것만을 카운팅하려고 하였으나, 시간 관계상 시도하지 못함
  👉 `following`과 `follower`는 Data에 임의의 값을 넣음

<br>

<div align="center">

![commonClickReview](https://github.com/seumomo/Project-F4/assets/127176650/15975040-35fe-48d7-a4d0-4e7bf88d5633)

</div>

- 페이지별로 해당하는 네비게이션의 탭에 컬러가 변경
  ➡️ 현재 접속한 URL에 `html` 파일 명이 포함하는지의 여부를 파악하여 네비게이션의 배열의 `index`로 활용하여 스타일 적용

- 다른 네비게이션의 탭을 클릭 시, 활성화돼 있던 컬러 활성화 => 클릭한 탭의 컬러 활성화
  ➡️ 다른 탭을 클릭한 경우에 모든 탭의 스타일을 제거
  ➡️ 클릭한 탭에 스타일을 적용
  👉 `hover`될 때와 동일하게 `border-bottom`에도 스타일을 적용하였으나 구현되지 않는 이슈가 있음

- 네비게이션 탭마다 해당하는 페이지로 이동

<br>

<div align="center">

![reviewsLoadSeulbi](https://github.com/seumomo/Project-F4/assets/127176650/3b94ddaf-5906-42b8-93c9-9bd03fb67143)

</div>

- 리뷰 / 테마 리스트 계정별로 랜더링
  ➡️ User의 Data와 localStorage의 `token`을 일치하는지 비교하여 해당하는 Data를 랜더링함
  ➡️ 로그인 한 ID의 Data의 `name`을 가져와 `name`의 맛집 리스트라는 테마를 기본적으로 출력되도록 함
  👉 해당 ID의 `keywords`가 12개가 넘으면 `수정하기`를 랜더링하고, 그렇지 않으면 `임시저장`이 랜더링되도록 함
  👉 해당 ID의 리뷰가 3개 이상 있다면, 배경에 이미지 1개, 작은 이미지 2개를 랜더링, 그렇지 않으면 배경과 작은 이미지 각 1개를 랜더링되도록 함
  👉 조회수는 `Math.random()`을 이용하여 100 이하의 난수를 생성하여 랜더링함

<br>

<div align="center">

![reviewClickArrangePhoto](https://github.com/seumomo/Project-F4/assets/127176650/8fe0a532-530b-48b4-9673-e5e18c3b575d)
![reviewClickArrangeAll](https://github.com/seumomo/Project-F4/assets/127176650/d52563ee-8e5b-40e0-b442-dfbf05816e27)

</div>

- 정렬방법을 바꿀 수 있는 드롭다운 메뉴 추가(드롭다운 외부 영역을 클릭해도 메뉴가 닫힘)
  ➡️ 처음엔 `hidden`을 이용하였으나 `transition`이 적용되지 않는 이슈가 있어 `invisible`을 사용함
  ➡️ `body`에 이벤트를 부여하고, 위임을 이용하여 드롭다운 메뉴가 아니면 드롭다운 메뉴가 닫히도록 함
  👉 예상하지 못한 `span` 요소에서 리뷰 목록이 리랜더링 되는 이벤트가 발생하였는데, `body`에 적용된 이벤트 때문이었음
  👉 이유는 찾지 못하였으나, 리랜더링을 유발하는 모든 요소에 `stopPropagation`과 `preventDefault`를 적용하여 리랜더링을 방지함

- 정렬방법 변경 시 리랜더링
  ➡️ 정렬방법을 변경하였을 때, 하단으로 슬라이드 되었을 때 상단으로 올라가지 않는 이슈가 발생함
  👉 `swiper`의 `slideTo(0)` 메소드를 활용하여 리랜더링 되었을 때 상단으로 위치하도록 함
- 전체 / 사진 보기 모드별로 랜더링(정렬방법 유지)
  ➡️ 정렬방법을 바꾼 상태에서 모드를 변경하였을 때에 기본값인 최신순으로 리랜더링 되는 이슈가 발생함
  👉 모드 변경 버튼이 클릭되었을 때 조건문을 사용하여 어떤 값이 `order-first`를 가지는지 찾아 해당하는 방법으로 리랜더링되도록 함

---

### 프로젝트 소감

- **김다연**

같은 기간 동안 자바스크립트까지 구현해야한다는 생각에 막막했던 마음도 잠시, 작지만 하나하나 만들어가면서 배우는 기쁨에 즐겁게 작업했던 것 같습니다. 분명 들었는데 모르겠고, 분명 읽었는데 이해하지 못했던 개념이나 메서드들을 이번 프로젝트에서 사용하면서 더 뼛속깊이 체득된 것 같아서 보람찹니다! 짧지만 알차게, 조원분들과 좋은 추억 만들면서 프로젝트 기간 잘 보내고 마무리한 것 같아서 기쁩니다. 😊

- **김경아**

프로젝트는 어려웠지만, 좋은 팀원분들을 만나 즐겁게 할 수 있었습니다. 터놓고 질문하고 함께 해결하다 보니 하나에 대해 혼자 고민하는 시간이 꽤 많이 줄어들었고, 사소하게 모르는 것도 다시 짚고
넘어갈 수 있었습니다. 어떤 질문이든 성심성의껏 듣고 본인 일처럼 따뜻하게 도와주신 조원분들께 너무 감사하고 덕분에 짧은 기간동안 포기하지 않고 많이 배울 수 있었다고 생각합니다.
그리고 이번에도 역시 일정에 쫓기듯이 진행하느라 마일스톤이나 프로젝트 일정관리 기능을 끝까지 잘 활용하기가 쉽지 않았습니다. 하지만 스크럼 마스터로서 팀의 프로젝트를 관리하는 경험이 즐겁고 유익했고,
파이널 프로젝트 때는 미리 여유있게 준비해서 잘 활용해보고 싶습니다. 그리고 수업시간에 이해가 잘 안갔지만 천천히 해야지 하고 미뤄뒀던 사소한 메서드 하나, 개념 하나 때문에 프로젝트 하는 동안 계속
발목잡힐 줄 몰랐습니다. 기본의 중요성을 다시 한번 깨달았습니다. 많이 어려웠고 힘들었지만 그래도 즐거웠던 경험이었습니다. 다음 프로젝트를 기다리며 더 부지런히 노력해야겠다고 생각했습니다.

**아쉬웠던 점**
promise, ajax, async, 그리고 json 데이터를 받아와서 화면에 렌더링하는 부분이 제일 막막했습니다.. 데이터 셋 안에 데이터에 접근하는 과정을 직접 짜보려니까 헷갈리고 어려웠는데 그래도 해보면서 배운 점이 많았습니다. 모듈 프로그래밍에 있어서도 아직 확실하게 이해하지 못한 것 같아서 아쉬운것 같아요. 지도 api를 가져와서 사용하는 것은 예전에 조금 해본것인데도 쉽지 않았습니다. 지도 api 뿐만 아니라 api 활용하는 부분에 있어서 확실하게 더 공부해보고 다른 api도 받아와서 활용해보고 싶습니다.

- **이준석**

수업을 들으면서 내 실력을 인정하고 받아들여서 작은 것 하나라도 완성하자는 목표였으나 그 작은 것도 테일윈드라는 악질을 만나서 못 이룰 뻔 했습니다. 이번 프로젝트는 자바스크립트를 못 하는 걸까 생각하던 와중 조원분들의 도움으로 자바스크립트를 작업할 기회를 얻었고, 아기가 걸음마를 시작하듯 작은 기능들을 하나씩 조원분과 범쌤의 도움으로 만들다 보니 걸음은 이렇게 걷는구나 깨달으며 혼자 딱 ‘한’걸음을 걷는 저의 모습을 보며 미약하지만 끝은 창대하게 만들어 보고 싶은 마음이 생겼습니다. 하나하나 다 알려주신 조원분들 감사합니다! 하지만 그거 아시나요? 앞으로도 감사할 일을 계속 만들 것입니다 감사합니다.

**아쉬웠던 점**
테일윈드가 제일 어려웠다, 세상 불편하다는 걸 느꼈다. 장점이라고는 merge할 때 충돌날일이 없었다는점
querySelectorAll을 해서 변수에 할당해도 첫번 쨰 요소만 할당되었다.
closest는 가까운 부모에서 특정 요소를 탐색한다.
includes로 배열에 유무값을 알 수 있다
push로 배열에 값을 추가 할 수있다
promise 가 나오면 await를 쓰자
get으로 가져온 데이터에서 data로 접근해서 값을 가져와야한다
delete는 id 값으로 하나씩 지울 수 잇으며 url 마지막에 / ${id값}을 넣어야한다.

- **김태일**

HTML/CSS 프로젝트 때 조장을 하면서, Github의 Issues, Projects, Wiki 기능들은 사용해보지 못했었는데, 이번 프로젝트를 하면서 배워서 많이 써보게 된 것 같습니다. 기록의 중요성을 다시 한 번 배우게 되었고, 프로젝트의 기간이 한정적이어서 적극적으로 사용해보지는 못했지만 파이널 프로젝트와 그 이후의 프로젝트에서도 사용할 때는 더 적극적으로 사용해보고 싶습니다.
HTML/CSS를 구현할 때에는, JavaScript를 빨리 써야 할 거 같아서 시맨틱적인 분이나 접근성 관련 부분은 많이 고려하지 못했고 그 점이 아쉽습니다. 스타일링을 할 때에도 아직도 각 속성들의 개념에 대한 학습이 부족함을 많이 느꼈습니다.
JavaScript에 들어가면서, 처음에 생각했던 기능들을 열심히 구현을 하고 보니, 실제로 사용해보며 어떤 경우에서는 동작되지 않는 것이 많았습니다. 그것들을 해결해 나가며 모든 경우에서 원하는 대로 동작하게 하는 것이 많이 어려웠고 끝도 없겠다고 생각했습니다. console 창에 찍어가며 어떻게 해내기는 했지만, 객체나 배열에 대한 기본적인 개념도 부족함을 많이 느꼈고, 기본적인 개념에 대한 학습이 필요하다는 것을 많이 느꼈습니다.
React 과정에 들어가면서는 더 집중해서 재밌는 프로젝트를 해내고 싶습니다.
