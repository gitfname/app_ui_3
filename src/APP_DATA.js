const users = [
    {
        "id": "0",
        "username": "user-1-username",
        "first-name": "user-1 firstName",
        "last-name": "user-1 lastName",
        "bio": "user-1 bio text goes here",
        "mail": "user1@gmail.com",
        "has-profile-img": true,
        "has-profile-cover": true,
        "private-profiel": false,
        "followers": 10,
        "followings": 5,
        "posts": [
            {"postId": "1"},
            {"postId": "2"},
            {"postId": "3"},
            {"postId": "4"},
            {"postId": "5"},
            {"postId": "6"},
            {"postId": "7"}
        ],
        "groups": [
            {"groupId": "1"},
            {"groupId": "2"},
            {"groupId": "3"}
        ]
    },

    {
        "id": "1",
        "username": "user-2-username",
        "first-name": "user-2 firstName",
        "last-name": "user-2 lastName",
        "bio": "user-2 bio text goes here",
        "mail": "user2@gmail.com",
        "has-profile-img": true,
        "has-profile-cover": false,
        "private-profiel": true,
        "followers": 329,
        "followings": 21,
        "posts": [
            {"postId": "8"},
            {"postId": "9"},
            {"postId": "10"}
        ],
        "groups": [
            {"groupId": "1"},
            {"groupId": "2"},
            {"groupId": "3"},
            {"groupId": "4"},
            {"groupId": "10"},
            {"groupId": "11"},
            {"groupId": "13"}
        ]
    },

    {
        "id": "2",
        "username": "user-3-username",
        "first-name": "user-3 firstName",
        "last-name": "user-3 lastName",
        "bio": "user-3 bio text goes here",
        "mail": "user3@gmail.com",
        "has-profile-img": false,
        "has-profile-cover": true,
        "private-profiel": false,
        "followers": 53,
        "followings": 9,
        "posts": [
            {"postId": "11"}
        ],
        "groups": [
            {"groupId": "1"},
            {"groupId": "2"}
        ]
    },

    {
        "id": "3",
        "username": "user-4-username",
        "first-name": "user-4 firstName",
        "last-name": "user-4 lastName",
        "bio": "user-4 bio text goes here",
        "mail": "user4@gmail.com",
        "has-profile-img": true,
        "has-profile-cover": true,
        "private-profiel": false,
        "followers": 11,
        "followings": 33,
        "posts": [],
        "groups": [
            {"groupId": "2"},
            {"groupId": "10"},
            {"groupId": "5"},
            {"groupId": "1"},
            {"groupId": "7"}
        ]
    },

    {
        "id": "4",
        "username": "user-5-username",
        "first-name": "user-5 firstName",
        "last-name": "user-5 lastName",
        "bio": "user-5 bio text goes here",
        "mail": "user5@gmail.com",
        "has-profile-img": false,
        "has-profile-cover": true,
        "private-profiel": false,
        "followers": 33,
        "followings": 10,
        "posts": [],
        "groups": [
            {"groupId": "10"}
        ]
    },

    {
        "id": "5",
        "username": "user-6-username",
        "first-name": "user-6 firstName",
        "last-name": "user-6 lastName",
        "bio": "user-6 bio text goes here",
        "mail": "user6@gmail.com",
        "has-profile-img": true,
        "has-profile-cover": true,
        "private-profiel": false,
        "followers": 190,
        "followings": 30,
        "posts": [
            {"postId": "12"},
            {"postId": "13"},
            {"postId": "14"},
            {"postId": "15"},
        ],
        "groups": [
            {"groupId": "10"},
            {"groupId": "8"},
            {"groupId": "6"}
        ]
    },

    {
        "id": "6",
        "username": "user-7-username",
        "first-name": "user-7 firstName",
        "last-name": "user-7 lastName",
        "bio": "user-7 bio text goes here",
        "mail": "user7@gmail.com",
        "has-profile-img": true,
        "has-profile-cover": true,
        "private-profiel": false,
        "followers": 3190,
        "followings": 521,
        "posts": [
            {"postId": "16"},
            {"postId": "15"},
            {"postId": "18"},
            {"postId": "19"},
            {"postId": "20"},
            {"postId": "21"},
            {"postId": "22"},
            {"postId": "23"},
            {"postId": "24"},
            {"postId": "25"},
            {"postId": "26"},
            {"postId": "27"},
            {"postId": "28"}
        ],
        "groups": [
            {"groupId": "10"},
            {"groupId": "8"},
            {"groupId": "9"},
            {"groupId": "2"},
            {"groupId": "1"},
            {"groupId": "5"},
            {"groupId": "3"},
        ]
    },

    {
        "id": "7",
        "username": "user-8-username",
        "first-name": "user-8 firstName",
        "last-name": "user-8 lastName",
        "bio": "user-8 bio text goes here",
        "mail": "user8@gmail.com",
        "has-profile-img": true,
        "has-profile-cover": true,
        "private-profiel": false,
        "followers": 590,
        "followings": 121,
        "posts": [
            {"postId": "29"},
            {"postId": "30"},
            {"postId": "31"},
            {"postId": "32"},
        ],
        "groups": [
            {"groupId": "5"},
            {"groupId": "3"},
            {"groupId": "1"}
        ]
    },

    {
        "id": "8",
        "username": "user-9-username",
        "first-name": "user-9 firstName",
        "last-name": "user-9 lastName",
        "bio": "user-9 bio text goes here",
        "mail": "user9@gmail.com",
        "has-profile-img": true,
        "has-profile-cover": true,
        "private-profiel": false,
        "followers": 6590,
        "followings": 421,
        "posts": [
            {"postId": "33"},
            {"postId": "34"},
            {"postId": "35"},
            {"postId": "36"},
            {"postId": "37"},
            {"postId": "38"},
            {"postId": "39"},
            {"postId": "40"},
            {"postId": "41"},
            {"postId": "42"},
            {"postId": "43"},
            {"postId": "44"},
            {"postId": "45"},
            {"postId": "46"},
            {"postId": "47"},
            {"postId": "48"},
            {"postId": "49"}
        ],
        "groups": [
            {"groupId": "1"},
            {"groupId": "2"},
            {"groupId": "3"},
            {"groupId": "4"},
            {"groupId": "5"},
            {"groupId": "6"},
            {"groupId": "7"},
            {"groupId": "8"},
            {"groupId": "9"},
            {"groupId": "10"},
            {"groupId": "11"},
            {"groupId": "12"}
        ]
    },

    {
        "id": "9",
        "username": "user-10-username",
        "first-name": "user-10 firstName",
        "last-name": "user-10 lastName",
        "bio": "user-10 bio text goes here",
        "mail": "user10@gmail.com",
        "has-profile-img": true,
        "has-profile-cover": true,
        "private-profiel": false,
        "followers": 693,
        "followings": 201,
        "posts": [
            {"postId": "50"},
            {"postId": "51"},
            {"postId": "52"},
            {"postId": "53"}
        ],
        "groups": [
            {"groupId": "1"},
            {"groupId": "4"},
            {"groupId": "11"},
            {"groupId": "12"}
        ]
    },
]

const groups = [
    {
        "id": "1",
        "userId": "1",
        "group-name": "group-1",
        "img": "DB_Assets/images/img-1_800x800.jpg"
    },
    {
        "id": "2",
        "userId": "2",
        "group-name": "group-2",
        "img": "DB_Assets/images/img-2_800x800.jpg"
    },
    {
        "id": "3",
        "userId": "3",
        "group-name": "group-3",
        "img": "DB_Assets/images/img-3_800x800.jpg"
    },
    {
        "id": "4",
        "userId": "4",
        "group-name": "group-4",
        "img": "DB_Assets/images/img-4_800x800.jpg"
    },
    {
        "id": "5",
        "userId": "5",
        "group-name": "group-5",
        "img": "DB_Assets/images/img-5_800x800.jpg"
    },
    {
        "id": "6",
        "userId": "6",
        "group-name": "group-6",
        "img": "DB_Assets/images/img-6_800x800.jpg"
    },
    {
        "id": "7",
        "userId": "7",
        "group-name": "group-7",
        "img": "DB_Assets/images/img-7_800x800.jpg"
    },
    {
        "id": "8",
        "userId": "8",
        "group-name": "group-8",
        "img": "DB_Assets/images/img-8_800x800.jpg"
    },
    {
        "id": "9",
        "userId": "9",
        "group-name": "group-9",
        "img": "DB_Assets/images/img-9_800x800.jpg"
    },
    {
        "id": "10",
        "userId": "8",
        "group-name": "group-10",
        "img": "DB_Assets/images/img-10_800x800.jpg"
    },
    {
        "id": "11",
        "userId": "4",
        "group-name": "group-11",
        "img": "DB_Assets/images/img-11_800x800.jpg"
    },
    {
        "id": "12",
        "userId": "4",
        "group-name": "group-12",
        "img": "DB_Assets/images/img-12_800x800.jpg"
    },
    {
        "id": "13",
        "userId": "9",
        "group-name": "group-13",
        "img": "DB_Assets/images/img-13_800x800.jpg"
    },
]

const PopularGroups = [
    groups[0],groups[3],groups[2],groups[5],groups[9],groups[10],groups[6],groups[12]
]

const posts = [
    {
        "id": "1",
        "userId": "0",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "2",
        "userId": "0",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "3",
        "userId": "0",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "4",
        "userId": "0",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "5",
        "userId": "0",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "6",
        "userId": "0",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "7",
        "userId": "0",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "8",
        "userId": "1",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "9",
        "userId": "1",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "10",
        "userId": "1",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "11",
        "userId": "2",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "12",
        "userId": "5",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "13",
        "userId": "5",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "14",
        "userId": "5",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "15",
        "userId": "5",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "16",
        "userId": "6",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "17",
        "userId": "6",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "18",
        "userId": "6",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "19",
        "userId": "6",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "20",
        "userId": "6",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "21",
        "userId": "6",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "22",
        "userId": "6",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "23",
        "userId": "6",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "24",
        "userId": "6",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "25",
        "userId": "6",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "26",
        "userId": "6",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "27",
        "userId": "6",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },    {
        "id": "28",
        "userId": "6",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "29",
        "userId": "7",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "30",
        "userId": "7",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "31",
        "userId": "7",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "32",
        "userId": "7",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "33",
        "userId": "8",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "34",
        "userId": "8",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "35",
        "userId": "8",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "36",
        "userId": "8",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "37",
        "userId": "8",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "38",
        "userId": "8",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "39",
        "userId": "8",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "40",
        "userId": "8",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "41",
        "userId": "8",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "42",
        "userId": "8",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "43",
        "userId": "8",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "44",
        "userId": "8",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "45",
        "userId": "8",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "46",
        "userId": "8",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "47",
        "userId": "8",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "48",
        "userId": "8",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },    {
        "id": "49",
        "userId": "8",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "50",
        "userId": "9",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "51",
        "userId": "9",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "52",
        "userId": "9",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "53",
        "userId": "9",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    },
    {
        "id": "50",
        "userId": "9",
        "likes": 301,
        "comments": 190,
        "shares": 301,
        "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolore, ad similique temporibus aliquid excepturi"
    }
]

const latestPosts = [
    posts[0],posts[31],posts[19],posts[2],
    posts[6],posts[5],posts[9],posts[20],
    posts[30],posts[22],posts[12],posts[14],
]

const latestStories = [
    {
        "user": users[3],
        "cover-img": "DB_Assets/images/img-1_800x800.jpg"
    },
    {
        "user": users[1],
        "cover-img": "DB_Assets/images/img-2_800x800.jpg"
    },
    {
        "user": users[9],
        "cover-img": "DB_Assets/images/img-3_800x800.jpg"
    },
    {
        "user": users[5],
        "cover-img": "DB_Assets/images/img-5_800x800.jpg"
    },
    {
        "user": users[6],
        "cover-img": "DB_Assets/images/img-11_800x800.jpg"
    },
    {
        "user": users[0],
        "cover-img": "DB_Assets/images/img-12_800x800.jpg"
    },
    {
        "user": users[2],
        "cover-img": "DB_Assets/images/img-8_800x800.jpg"
    },
    {
        "user": users[4],
        "cover-img": "DB_Assets/images/img-10_800x800.jpg"
    }
]

const suggestedFriends = [
    users[0],users[3],users[5],users[4],users[6],users[7]
]

const MyFriends = [
    users[0],users[2],users[3],users[4],users[5],users[8],users[9]
]

const returnByPromise = data => new Promise(resolve => setTimeout(() => resolve(data), 2000))

export function getPopularGroups_gen() {
    console.log("popularGroups_gen")
    let res = []
    PopularGroups.forEach(popularGroup => {
        res.push(
            {
                "id": popularGroup.id,
                "img": popularGroup.img,
                "owner": (() => {
                    let ownerUser = _getUserById(popularGroup.userId)
                    return {
                        "img": get60x60UserImage(ownerUser.id),
                        "name": ownerUser["first-name"],
                        "mail": ownerUser.mail,
                        "proUser": true
                    }
                })()
            }
        )
    })
    return res
}

export const getPopularGroups = () => returnByPromise(() => getPopularGroups_gen())
// export const getPopularGroups = () => returnByPromise(PopularGroups)
export const getSuggestedFriends = () => returnByPromise(suggestedFriends)
export const getMyFriends = () => returnByPromise(MyFriends)
export const getLatestStories = () => returnByPromise(latestStories)
export const getLatestPosts = () => returnByPromise(latestPosts)
export const getUsers = () => returnByPromise(users)
export const getGroups = () => returnByPromise(groups)
export const getPosts = () => returnByPromise(posts)
export const getUserById = userid => returnByPromise(users[users.findIndex(user => user["id"] == userid)])
export const getGroupById = groupid => returnByPromise(groups[groups.findIndex(group => group["id"] == groupid)])
export const getPostById = postid => returnByPromise(posts[posts.findIndex(post => post["id"] == postid)])
export const getUserPosts = userid => returnByPromise(posts.filter(post => post["userId"] == userid))

const _getSuggestedFriends = () => suggestedFriends
const _getMyFriends = () => MyFriends
const _getLatestStories = () => latestStories
const _getLatestPosts = () => latestPosts
const _getUsers = () => users
const _getGroups = () => groups
const _getPosts = () => posts
const _getUserById = userid => users[users.findIndex(user => user["id"] == userid)]
const _getGroupById = groupid => groups[groups.findIndex(group => group["id"] == groupid)]
const _getPostById = postid => posts[posts.findIndex(post => post["id"] == postid)]
const _getUserPosts = userid => posts.filter(post => post["userId"] == userid)

export const get60x60UserImage = userid => `DB_Assets/usersImages/${userid}/60x60.jpg`
export const get160x160UserImage = userid => `DB_Assets/usersImages/${userid}/160x160.jpg`
export const get300x300UserImage = userid => `DB_Assets/usersImages/${userid}/300x300.jpg`
export const get800x800UserImage = userid => `DB_Assets/usersImages/${userid}/800x800.jpg`