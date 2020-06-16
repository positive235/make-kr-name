const firstNameFemale = document.getElementById("firstNameFemale");
const firstNameMale = document.getElementById("firstNameMale");
const lastNameResult = document.getElementById("lastNameResult");

const arrFemale = ['지은 (Ji-Eun)', '예리 (Ye-Ri)', '슬기 (Seul-Gi)', '지수 (Ji-Soo)', '미연 (Mi-Yeon)', '수진 (Su-Jin)', '소연 (So-Yeon)', '나연 (Na-Yeon)',
'정연 (Jung-Yeon)', '지효 (Ji-Hyo)', '다현 (Da-Hyun)', '채영 (Chae-Young)', '예지 (Ye-Ji)', '류진 (Ryu-Jin)', '채령 (Chae-Ryeong)', '초롱 (Cho-Rong)', '보미 (Bo-Mi)',
'은지 (Eun-Ji)', '나은 (Na-Eun)', '남주 (Nam-Ju)', '하영 (Ha-Young)', '태연 (Tae-Yeon)', '효연 (Hyo-Yeon)', '유리 (Yu-Ri)',
'수영 (Su-Young)', '윤아 (Yoon-Ah)', '서현  (Seo-Hyun)', '원영 (Won-Young)', '예나 (Ye-Na)', '유진 (Yu-Jin)', '은비 (Eun-Bi)', '혜원 (Hae-Won)', '채원 (Chae-Won)', '민주 (Min-Ju)',
'채연 (Chae-Yeon)', '효정 (Hyo-Jung)', '승희 (Seung-Hee)', '지호 (Ji-Ho)', '채경 (Chae-Kyung)', '채원 (Chae-Won)', '진솔 (Jin-Sol)',
'지민 (Ji-Min)', '혜정 (Hae-Jung)', '설현 (Seol-Hyun)', '찬미 (Chan-Mi)', '태희 (Tae-Hee)', '지현 (Ji-Hyun)', '유정 (Yu-Jung)', '보영 (Bo-Young)', '고은 (Go-Eun)', '혜리 (Hye-Ri)', '신혜 (Shin-Hye)'];

const arrMale = ['지민 (Ji-Min)', '정국 (Jung-Kook)', '은우 (Eun-Woo)', '수호 (Soo-Ho)', '찬열 (Chan-Yeol)', '세훈 (Se-Hun)', '백현 (Baek-Hyun)', '경수 (Kyung-Soo)', '승윤 (Seung-Yoon)',
'승훈 (Seung-Hoon)', '민호 (Min-Ho)', '진우 (Jin-Woo)', '정한 (Jung-Han)', '민규 (Min-Gyu)',
'원우 (Won-Woo)', '진영 (Jin-Young)', '수빈 (Su-Bin)', '연준 (Yeon-Jun)', '범규 (Beom-Gyu)', '태현 (Tae-Hyun)', '준기 (Jun-Gi)', '정우 (Jung-Woo)', '수현 (Su-Hyun)',
'우빈 (Woo-Bin)', '승호 (Seung-Ho)', '보검 (Bo-Gum)', '강준 (Kang-Jun)', '서준 (Seo-Jun)', '현우 (Hyeon-Woo)', '주혁 (Ju-Hyuk)', '동희 (Dong-Hee)', '동욱 (Dong-Wook)',
'종석 (Jong-Seok)', '아인 (Ah-In)', '동원 (Dong-Won)', '정석 (Jung-Seok)', '인성 (In-Sung)', '지섭 (Ji-Seob)', '동석 (Dong-Seok)', '하늘 (Ha-Neul)', '승원 (Seung-Won)', '해인 (Hae-In)', '해진 (Hae-Jin)'];

const arrLast = ['김 (Kim)', '강 (Kang)', '권 (Kwon)', '구 (Koo)', '공 (Gong)', '고 (Go)', '남 (Nam)', '나 (Na)', '노 (Noh)', '도 (Doh)', '민 (Min)', '문 (Moon)',
'박 (Park)', '배 (Bae)', '백 (Baek)', '심 (Shim)', '성 (Sung)', '신 (Shin)',
'서 (Seo)','송 (Song)','손 (Son)', '원 (Won)','우 (Woo)', '이 (Lee)', '윤 (Yoon)', '임 (Im)', '오 (Oh)', '양 (Yang)', '안 (Ahn)', '진 (Jin)', '정 (Jung)',
'지 (Ji)', '주 (Joo)', '전 (Jeon)','장 (Jang)', '채 (Chae)', '차 (Cha)', '최 (Choi)', '하 (Ha)', '한 (Han)', '황 (Hwang)', '홍 (Hong)'];

document.getElementById('makeFirstFemale').addEventListener('click', function(event){
    firstNameFemale.innerHTML = arrFemale[Math.floor(Math.random() * arrFemale.length)];
});

document.getElementById('makeFirstMale').addEventListener('click', function(event){
    firstNameMale.innerHTML = arrMale[Math.floor(Math.random() * arrMale.length)];
});

document.getElementById('makeLast').addEventListener('click', function(event){
    lastNameResult.innerHTML = arrLast[Math.floor(Math.random() * arrLast.length)];
});