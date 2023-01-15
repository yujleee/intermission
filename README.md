# intermission
공연예술통합전산망(KOPIS)의 OPEN API를 활용한 뮤지컬 정보 제공 및 리뷰 앱

프로젝트 진행 기간: 2023.01.06 ~ 2023.01.13

![intermission-mockup](https://user-images.githubusercontent.com/82587107/212228406-f5f01a2b-8e44-4f59-8eb5-45726e92a63a.jpg)




## ✨ 배포 QR코드
### 📱 iOS
![image](https://user-images.githubusercontent.com/82587107/212118973-dee2d54d-b551-4ca8-accb-2b3f39f8ea36.png)
### 📱 Android
![image](https://user-images.githubusercontent.com/82587107/212119171-760f76da-8c22-4f56-9e45-dbe9002de4f7.png)

**🔗 [시연 영상](https://www.youtube.com/watch?v=QyEP2lnGfWc)**
  
<br/>
<br/>

## 🙌 팀원 소개

| 이름   | 깃허브                                       |
| ------ | -------------------------------------------- |
| 이유정 | [@yujleee](https://github.com/yujleee)       |
| 김승우 | [@coachkim](https://github.com/coachkim) |
| 김명준 | [@chorongs](https://github.com/chorongs)       |
| 김예슬 | [@2sel](https://github.com/2sel)         |
| 남마리나 | [@nyangmal123](https://github.com/nyangmal123)   |



역할 분담과 관련해서는 아래 프로젝트 노션을 참고해주세요.

📑 [프로젝트 노션](https://yjworking.notion.site/bc9c2449dddc4fafb152f143347e08b9)


<br/>
<br/>


## 🖥 기술 스택

### Front-end
- React-Native
- Emotion Styled-components : 스타일 컴포넌트의 재사용을 위해 선택
- React Navigation
- React Query
- React Native xml2json

### Back-end
- firebase


### Deploy
- Expo 


<br/>
<br/>


## 🗂 디렉토리 구조

```
📦 assets
📦 src
 ┣ 📂 components
 ┃ ┣ 📂 Home
 ┃ ┣ 📂 Musicals
 ┃ ┣ 📂 MyPage
 ┃ ┗ 📂 Reviews
 ┣ 📂 navigation
 ┣ 📂 screens
 ┣ 📜 api.js
 ┣ 📜 colors.js
 ┣ 📜 firebase.js
 ┣ 📜 shadow.js
 ┣ 📜 theme.js
 ┗ 📜 util.js
```

- components : 각 페이지별 컴포넌트 파일 폴더
- navigation: 라우팅 관련 파일 폴더
- screens: 스크린 컴포넌트 파일 폴더

<br/>
<br/>

## 🤝 규칙

- **커밋 컨벤션 (유다시티 커밋 컨벤션 참고!)**
  | 키워드 | 설명 |
  | --- | --- |
  | feat | 새로운 기능을 추가한 경우 |
  | fix | 버그를 고친 경우 |
  | refactor | 코드 리팩토링 |
  | docs | 문서를 수정한 경우 |
  | perf | 성능개선 |
  | chore | 그런트 작업 업데이트, 프로덕션 코드 변경 없음 |

- **코드 컨벤션**
  1. prettierrc로 prettier 설정 통일
  2. 변수명은 직관적으로 짜기 (카멜케이스 기반)
    - 함수명은 동사+명사 addReview
    - 그 외 컴포넌트 명은 알아보기 쉽게 작성하기 reviewButton

<br/>
<br/>

## 👥 깃허브 협업 방식

Git Flow 방식을 이용했습니다.

- `main` : `dev` 브랜치로부터 최종병합되는 브랜치. (배포용)
- `dev` : 주된 작업들이 합쳐지는 브랜치
- `dev`에서 뻗어나온 개인 브랜치 : 각자의 작업이 진행되는 브랜치

<br/>
<br/>

## 💡 구현 기능

- Home
  - 뮤지컬 슬라이드
  - 뮤지컬 박스오피스
  - 지역별 인기 뮤지컬
  - 예매 티켓 링크
- MusicalDetail
  - 뮤지컬 상세정보
  - 뮤지컬별 리뷰 리스트
  - 리뷰 작성 (유효성 검사, disabled 적용)
- ReviewDetail
  - 작성자일 경우 리뷰 수정 또는 삭제 (유효성 검사, disabled 적용) 
- Musicals
  - 모든 뮤지컬 리스트
- Mypage
  - 유저 프로필 이미지 변경
  - 유저 닉네임 수정
  - 유저가 작성한 리뷰 리스트 
  - 로그아웃
- Login
  - 로그인 
  - 회원가입
  - 유효성 검사

<br/>
<br/>

## 🔥 트러블 슈팅

프로젝트 노션을 참고해주세요.

📑 [프로젝트 노션](https://yjworking.notion.site/bc9c2449dddc4fafb152f143347e08b9)

<br/>
<br/>

## 📝 회고 및 관련 기록

🎉 [프로젝트 S.A](https://yjworking.notion.site/B-8-FollowMe-SA-cf4d097a52db4c72af28aa3da1308f5f)

🚧 [프로젝트 진행 노션](https://yjworking.notion.site/bc9c2449dddc4fafb152f143347e08b9)

📒 [프로젝트 KPT 회고](https://i-ten.tistory.com/275)
