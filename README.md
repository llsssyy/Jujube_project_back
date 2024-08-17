## JujubeWorld Project
React와 Node.js를 이용한 SNS 프로그램 Project

---

![1](https://github.com/user-attachments/assets/308a1edd-af2c-4168-a91a-200859093d68)

## 1️⃣ 프로젝트 개요

1. **주제:**
    - **SNS** 서비스 구현
2. **선정 배경 및 기획 의도:**
    - 다양한 관심사를 지닌 동시에 **레트로**와 **트랜디함**을 좋아하는 **MZ세대에게 어필하는 SNS서비스**를 만들고 싶었다.
3. **프로젝트 내용**:
    - **친구 중심**으로 **소통**할 수 있는 **SNS**서비스
4. **활용 방안 및 기대 효과:**
    - 새로운 **커뮤니케이션** 및 **소통 채널**을 제공한다.
    - **온라인 커뮤니티 활성화** 및 **사회적 소통** 증진에도 기여할 것으로 기대된다.

## 2️⃣ 프로젝트 구성

![2](https://github.com/user-attachments/assets/30c48399-79c9-4e9b-8ef7-25a958b10fd3)

![3](https://github.com/user-attachments/assets/e287ae69-bb19-49d1-8fb6-83b6ab89d198)

![4](https://github.com/user-attachments/assets/aca322e9-7e42-4300-9340-49ab7122b2be)

- **클라이언트**에게 요청을 받은 후 **React-Router로 매핑처리**, **서비스 로직**을 구현하는 기본적인 **MVC 구조**로 프로젝트를 설계하였음.

## 3️⃣ 핵심기능

### 1. Inquirer 라이브러리를 이용한 CLI프로그램

![5](https://github.com/user-attachments/assets/bdf4b1d8-8d99-49de-80da-1f7e1059efac)

- **포스트맨 API**를 사용하는 대신, 간단한 **CLI프로그램**을 개발하여 **데이터베이스 서버 연결을 테스트** 하였음
    - **Inquirere** 라이브러리를 이용하여 **회원정보 CRUD 기능**을 구현.

### 2. 멤버 서비스

![6](https://github.com/user-attachments/assets/49f76101-cbe0-4387-a3a2-2e232c979026)

- **일반 로그인**과 **구글 인증 로그인**을 구현하였음.
- **JWT인증 및 인가** 기능을 구현하여 **Token**의 **유효시간**이 만료되면 서비스를 이용할 수 없고, **재 로그 인** 후 서비스를 이용 할 수 있게끔 구현하였음.

### 3. 스토리(게시글) 관련 기능

![7](https://github.com/user-attachments/assets/5fc5eed5-b58c-4d84-97c4-6cd817db33fc)

- 스토리 **작성**
    - 원하는 **사진**을 선택 후, **공개여부**를 전체공개, 일촌공개, 비공개(나만보기) **세가지**로 나누어서 스토리를 작성하는 기능 구현.
    
![8](https://github.com/user-attachments/assets/ca291117-18cd-4119-ba44-ca8226a2d1ce)
    
- 스토리 **가져오기**
    - **로그인된 ID**를 기준으로 **본인의 게시물**과 **친구들**의 전체공개 게시물 및 일촌공개 게시물이 게시물 작성 날짜 기준 **내림차순**으로 정렬되게 하였음.
    
![9](https://github.com/user-attachments/assets/8fc60fb0-dafa-43c3-93b5-135f523bc699)
    
- 스토리 **수정**
    - 내 스토리의 사진 및 글 내용, 공개여부를 수정할 수 있다.
    
![10](https://github.com/user-attachments/assets/cdfc8564-6e6a-43be-807c-b9dd36bc49c5)
    
    - 또한 기능을 구현 할 때, **fs_extra module**을 이용하여 게시글의 사진 **삭제** 및 **추가** 시 **서버에 저장된 디렉토리에**서도 사진이 **저장** 및 **삭제** 되게 구현하였음.
- 스토리 **삭제**
    - 추후에 **휴지통** 기능을 구현하기 위해 **데이터베이스**에서 스토리가 삭제 되지 않고 **table**에 **column**값을 추가해 **삭제 대기 상태**로 들어가게 설계하였음.

### 3. 댓글 및 좋아요 기능

![11](https://github.com/user-attachments/assets/5a2356b8-335d-4544-acd1-caee60ea473d)

- **좋아요 버튼**을 눌렀을 시 **실시간**으로 하트 아이콘이 빨갛게 변경되어 친구의 스토리에 **좋아요**를 눌렀는지 간편하게 확인 가능.
    
![12](https://github.com/user-attachments/assets/356309bd-646b-4c1a-a1b3-6f61f3d267f4)
    
![13](https://github.com/user-attachments/assets/67e4e196-378e-4a6b-95ff-b2e52ebae8cc)
    
![14](https://github.com/user-attachments/assets/175cb91d-b0ae-48ab-9640-ede9a751868d)
    
![15](https://github.com/user-attachments/assets/40d082c0-4be8-4868-ab68-e90383ad12d8)
    
- **댓글** 및 **대댓글** 작성 기능
    - **axios** 비동기 통신을 사용하여 모든 **댓글** 및 **좋아요** **이벤트**마다 **실시간**으로 **컴포넌트**가 **렌더링** 되게 설계하였음.

### 3. 일촌(친구) 관련 서비스

![16](https://github.com/user-attachments/assets/64d36475-f66a-4b87-8c19-7dfd63fc1060)

![17](https://github.com/user-attachments/assets/0c608759-a8bb-458c-98be-01a2484a51c8)

![18](https://github.com/user-attachments/assets/6c1dd1aa-a886-4378-a3d3-801b8ba09943)

- **친구 검색** 및 **친구신청** 기능 구현.
    - 원하는 일촌명(별명)을 입력하여 친구 신청을 할 수 있다.

![19](https://github.com/user-attachments/assets/5b2a1285-56a9-44f6-a47b-95277a79c302)

- **친구들**의 **목록** 확인 및 내가 **보낸 신청**, **받은 신청**을 확인할 수 있음

## 4️⃣ 프로젝트 파일

[jujube_back.zip](https://drive.google.com/file/d/1d0jVj5-03J2esYr7OTKiZmkeRmxt-F2Y/view?usp=sharing)

[jujube_front.zip](https://drive.google.com/file/d/1Ti3kADJUkStQ9IQr1Y_xv2TnWotSCHkL/view?usp=sharing)

[4조 3차 프로젝트 결과보고서.pptx](https://drive.google.com/file/d/1qmev737MtkmbmRpsh9HxTRCenc57hIg8/view?usp=sharing)

## 5️⃣ 시연 영상

https://youtu.be/vazF5oswtJk

## 6️⃣ 맡은 역할

- **스토리(게시글)** 및 **좋아요**, **댓글** 관련 **전체 Back-end 작업**, **DB작업**

## 7️⃣ 프로젝트를 진행하면서 느꼈던 점

- **JWT 인증**에 대하여 공부할 수 있는 시간이 되었고, **트랜젝션**을 이용한 설계는 **복잡한 시스템**에서도 **안정성과 신뢰성**을 높이는 데 매우 유용하다는 것을 깨달았다. 이 경험을 통해 **데이터베이스** **설계** 및 **운영**에 대한 자신감을 얻게 되었고, 앞으로도 **데이터 일관성**과 **무결성**이 중요한 프로젝트에서 **트랜젝션**을 적극 활용할 계획이다.
