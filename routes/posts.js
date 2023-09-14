var express = require('express');
var router = express.Router();

const posts= require("../db /controller/Posts.js")
const dummyDatapost=[
    {
        "userWalletAddress": "0xF6A3eFEa4d5E28EdCEF4A3EFe2e6E0087ACdf067",
        "userName": "배고픈 팡팡이",
        "postTitle": "오늘따라 너무 힘들다",
        "postContent": `1교시 실화냐? 5시부터 일어나서 나오려니까 지나ㅉ 너무 피곤하네,죽고싶다 그냥
         내일도 1교시 가야되네
         asdfasf
         asfdf `,
        "timeStamp": "2023-05-02T14:30:00",
        "view": 31312, 
        "category": "anything",

        // 가우시안인가 그걸로 바꾸면 ~~분전 으로 교체 가능
    },
    {
        "userWalletAddress": "0xAbC123def456Ghi789jKl012MnO34PqR567Stu89",
        "userName": "스터디 고수",
        "postTitle": "시험 대비 스터디 모집",
        "postContent": "이번 주말에 시험 대비 스터디를 진행하려 합니다. 관심 있으신 분은 연락주세요!",
        "timeStamp": "2023-05-03T10:15:00",
        "view": 31312124,
    },
    {
        "userWalletAddress": "0xXyZ123AbC456",
        "userName": "코딩마스터",
        "postTitle": "파이썬 코딩 도움 필요",
        "postContent": "파이썬 공부 중인데 어려운 부분이 있어서 도움이 필요합니다. 혹시 도와주실 분 계신가요?",
        "timeStamp": "2023-05-04T16:45:00",
        "view": 3131212524,

    },
    {
        "userWalletAddress": "0x1a2B3c4D5e6F7g8H9i0J1k2L3m4N5o6P7q8R9s0T",
        "userName": "음악감상러",
        "postTitle": "좋아하는 음악 추천해주세요!",
        "postContent": "최근에 음악에 빠져 있어서, 여러분이 좋아하는 음악을 추천해주세요. 다양한 장르 모두 환영입니다!",
        "timeStamp": "2023-05-05T20:20:00",
        "view": 12413,

    },
    {
        "userWalletAddress": "0x3a4b5C6d7E8f9G0h1i2J3k4L5m6N7o8P9q0R1s2T3",
        "userName": "여행가",
        "postTitle": "여름 휴가 계획 중",
        "postContent": "여름 휴가 어디로 가려고 계획 중입니다. 여행지 추천해주세요!",
        "timeStamp": "2023-05-06T12:10:00",
        "view": 5512215,

    },
    {
        "userWalletAddress": "0xAbC12d3Ef4Ghi5Jkl6Mn7Opq8Rst9Uv0Wx1Yz2A",
        "userName": "과제 고수",
        "postTitle": "과제 도와주세요!",
        "postContent": "과제 마감이 얼마 안 남았는데 어떻게 해야 할지 모르겠어요. 도와주세요!",
        "timeStamp": "2023-05-07T09:30:00",
        "view":5125241,
    },
    {
        "userWalletAddress": "0xXyZaB1C2",
        "userName": "요리연구가",
        "postTitle": "새로운 레시피 시도 중",
        "postContent": "오늘은 새로운 요리 레시피를 시도해보려고 합니다. 요리에 관심 있는 분들과 함께하면 좋겠어요!",
        "timeStamp": "2023-05-08T15:50:00",
        "view":6346235
    },
    {
        "userWalletAddress": "0x1a2Bc3d4E5f6G7h8i9J0k1L2m3N4o5P6q7R8s9T0",
        "userName": "영화매니아",
        "postTitle": "주말에 볼 영화 추천해주세요!",
        "postContent": "주말에 시간이 많이 남아서 영화를 몇 편 볼 계획입니다. 추천해주실 영화 있나요?",
        "timeStamp": "2023-05-09T18:40:00",
        "view":712489
    },
    {
        "userWalletAddress": "0x3a4b5C6d7E8f9G0h1i2J3k4L5m6N7o8P9q0R1s2T3",
        "userName": "운동광",
        "postTitle": "운동 파트너 모집",
        "postContent": "운동을 함께 할 파트너를 찾고 있습니다. 함께 운동하며 목표를 이루어요!",
        "timeStamp": "2023-05-10T13:25:00",
        "view":1
    },
    {
        "userWalletAddress": "0xAbC12d3Ef4Ghi5Jkl6Mn7Opq8Rst9Uv0Wx1Yz2A",
        "userName": "책벌레",
        "postTitle": "좋은 책 추천해주세요!",
        "postContent": "독서 중인데 좋은 책을 찾고 있어요. 여러분의 추천이 필요합니다!",
        "timeStamp": "2023-05-11T11:05:00",
        "view":633
    },
    {
        "userWalletAddress": "0xXyZaB1C2",
        "userName": "영어 공부중",
        "postTitle": "영어 학습 팁 공유해주세요!",
        "postContent": "영어 학습을 더 효과적으로 하기 위한 팁을 공유해주실 분 계신가요?",
        "timeStamp": "2023-05-12T17:15:00",
        "view":214
    },
    {
        "userWalletAddress": "0x1a2Bc3d4E5f6G7h8i9J0k1L2m3N4o5P6q7R8s9T0",
        "userName": "디자인 마스터",
        "postTitle": "디자인 작업 도와주세요!",
        "postContent": "새로운 디자인 프로젝트를 시작하려고 하는데, 도움이 필요합니다. 혹시 디자인에 자신 있는 분 계신가요?",
        "timeStamp": "2023-05-13T08:55:00",
        "view":74354
    },
    {
        "userWalletAddress": "0x3a4b5C6d7E8f9G0h1i2J3k4L5m6N7o8P9q0R1s2T3",
        "userName": "음식점 탐방러",
        "postTitle": "오늘 점심 어디서 먹어야 할까요?",
        "postContent": "점심 메뉴를 고르는 중인데, 어디서 먹을지 고민입니다. 추천해주세요!",
        "timeStamp": "2023-05-14T14:00:00",
        "view":772342
    },
    {
        "userWalletAddress": "0xAbC12d3Ef4Ghi5Jkl6Mn7Opq8Rst9Uv0Wx1Yz2A",
        "userName": "대학생활러",
        "postTitle": "대학 생활 팁 공유합니다!",
        "postContent": "대학 생활을 더 즐겁게 하기 위한 팁을 공유하려고 합니다. 여러분도 자신의 팁을 공유해보세요!",
        "timeStamp": "2023-05-15T19:20:00",
        "view":8325
    },
    {
        "userWalletAddress": "0xXyZaB1C2",
        "userName": "여행을 떠나자",
        "postTitle": "다음 휴가 계획중",
        "postContent": "다음 휴가 계획을 세우려고 하는데, 어디로 가야할지 고민 중입니다. 여행지 추천 부탁드려요!",
        "timeStamp": "2023-05-16T11:30:00",
        "view":552523
    },
    {
        "userWalletAddress": "0x1a2Bc3d4E5f6G7h8i9J0k1L2m3N4o5P6q7R8s9T0",
        "userName": "공부하는 중",
        "postTitle": "시험 기간 도서 추천",
        "postContent": "시험 기간에 도움이 될만한 도서를 추천해주세요. 공부에 도움이 될 것 같아요!",
        "timeStamp": "2023-05-17T15:05:00",
        "view":28543
    },
    {
        "userWalletAddress": "0x3a4b5C6d7E8f9G0h1i2J3k4L5m6N7o8P9q0R1s2T3",
        "userName": "게임매니아",
        "postTitle": "인디 게임 추천",
        "postContent": "최근 인디 게임을 즐기고 있는데, 어떤 인디 게임을 추천해주실까요?",
        "timeStamp": "2023-05-18T20:40:00",
        "view":8865
    },
    {
        "userWalletAddress": "0xAbC12d3Ef4Ghi5Jkl6Mn7Opq8Rst9Uv0Wx1Yz2A",
        "userName": "포트폴리오 작업 중",
        "postTitle": "디자인 포트폴리오 작업 도와주세요!",
        "postContent": "디자인 포트폴리오를 업데이트하려고 하는데, 도움이 필요합니다. 조언 부탁드립니다!",
        "timeStamp": "2023-05-19T12:15:00",
        "view":9754
    },
    {
        "userWalletAddress": "0xXyZaB1C2",
        "userName": "스포츠매니아",
        "postTitle": "축구 경기 동행자 찾습니다",
        "postContent": "주말에 축구 경기를 보러 가려고 하는데, 함께 가실 분을 찾고 있습니다. 관심 있으신 분 연락주세요!",
        "timeStamp": "2023-05-20T14:50:00",
        "view":82354
    }
]



// const feedsControler={
//     currentNumber:0, 
//     inCreaseNumber: ()=>{
//         this.currentNumber+=3;
//     },
    
// }
//스크롤 내려가면 세개씩 보내는 객체 구상중



router.get('/', (req,res)=>{
    posts.readAll(req,res);
    //나중에 추가
})

router.get('/topFeeds/:number',  async function(req,res,next){
    const number=req.params.number;
    const data=[... dummyDatapost].sort((a,b)=>{return(b.view- a.view)});
    
    res.send(data.slice(0,number-1));
})


router.post('/comments/:Category/:Index', async(req,res)=>{
    const category= req.params.Category;
    const index= req.params.Index;
    posts.addComment(req,res,category,index);

})

router.get('/:Category', async (req,res)=>{
    const category= req.params.Category;
    posts.read(req,res, category)});

router.post('/:Category', async(req,res)=>{
       const category= req.params.Category;
    posts.NewPost(req,res, category);
});



router.get('/:Category/:Index', async (req,res)=>{
    const category= req.params.Category;
    const index= req.params.Index;
    posts.readIndividual(req,res, category, index)});
    
router.delete('/:Category/:Index', async(req,res)=>{
    const category= req.params.Category;
    const index= req.params.Index;

    posts.deletePost(req,res, category, index);

})


// router.delete('/:Index', 

// )





// router.post('/topFeeds', posts.NewPost)

module.exports = router;
