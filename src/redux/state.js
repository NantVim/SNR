let users = {
  user: [

  ]
}

let state = {
  profileData:{
    postData: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It s my first post', likesCount: 11},
      {id: 3, message: 'Hi, how are you?', likesCount: 12},
      {id: 4, message: 'It s my first post', likesCount: 11}
    ]
  },
  dialogsData: {
    dialogs: [
      {id: 1, name: 'Dimych'},
      {id: 2, name: 'Andrey'},
      {id: 3, name: 'Sveta'},
      {id: 4, name: 'Sasha'}
    ],
    messageData: [
      {id: 1, message: 'Hi!'},
      {id: 2, message: 'How is yous!'},
      {id: 3, message: 'Yo!'}
    ]
  },
  navBar: {
    friends: [
      {
        avatar: 'http://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg',
        name: 'Andrew'
      },
      {
        avatar: 'http://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg',
        name: 'Sasha'
      },
      {
        avatar: 'http://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg',
        name: 'Sveta'
      }
    ]
  }
};

export default state;