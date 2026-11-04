# eunbit-church-website

인천 계양구 은빛교회(은혜의 빛) 공식 홈페이지입니다.
주소: https://yangs777.github.io/eunbit-church-website/

## 주요 정보
- **교회명:** 은빛교회 (은혜의 빛)
- **소속:** 대한예수교장로회(통합) 인천노회 · 1996년 10월 26일 개척
- **담임목사:** 양승보 목사
- **주소:** 인천광역시 계양구 계양문화로 151 B01호 (용종동 214-1, 신대진아파트 상가 지하)
- **전화:** 032-553-8003
- **이메일:** eunbit8004@hanmail.net
- **예배시간:** 주일 10:40, 금요 8:00
- **헌금계좌:** 새마을금고 9002-0986-9241-3 은빛교회
- **YouTube:** @계양구은빛교회
- **Facebook:** https://www.facebook.com/Eunbit8004
- **관리자 이메일:** yangs7777@gmail.com

## 구성
- 반응형 한 페이지(휴대폰·PC 공용). 외부 라이브러리는 Pretendard 글꼴만 씁니다.
- 예배시간·오시는길·온라인 예배·전화 바로가기, 구글 지도, 계좌번호 복사 버튼
- 검색엔진: 설명문, canonical, OG 태그, JSON-LD(Church), `sitemap.xml`, `robots.txt`

## 파일 구조
- `index.html` 메인 페이지
- `css/style.css` 스타일
- `images/pastor.jpg` 담임목사 사진, `images/og.jpg` 공유 미리보기 이미지
- `favicon.svg` 사이트 아이콘
- `mobile.html` 예전 모바일 주소를 `index.html`로 보내는 페이지
- `sitemap.xml`, `robots.txt`, `google0edd5034ecc9a072.html`(Search Console 소유 확인, 지우지 말 것)

## 배포
main 브랜치에 올리면 GitHub Pages에 자동으로 반영됩니다.
미리보기: 저장소 폴더에서 `python -m http.server` 실행 후 http://localhost:8000
