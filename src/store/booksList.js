export default {
  namespaced: true,

  state: {
    books: [
      {
        id: 'thuonehuoteuhnoth',
        title: 'Book title 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consequatur modi, atque qui consectetur incidunt vero deserunt facilis odio minus quidem tenetur nobis in reiciendis distinctio soluta voluptates ipsam. Dolorem.',
        imageId: 'utohneuo',
        parts: 7,
        level: ['B2', 'C1'],
        rating: 4,
        ratingCount: 100,
        youtube_playlist_id: 'tuohenuohenut'
      },
      {
        id: 'thuonehuoteuuuhnoth',
        title: 'this is an amazing book 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consequatur modi, atque qui consectetur incidunt vero deserunt facilis odio minus quidem tenetur nobis in reiciendis distinctio soluta voluptates ipsam. Dolorem.',
        imageId: 'utohneuoueo',
        parts: 3,
        level: ['B1', 'C1'],
        rating: 4.5,
        ratingCount: 80,
        youtube_playlist_id: 'tuohenuohenut'
      },
      {
        id: 'thuonehuoteuhnotuoeuh',
        title: 'Book title 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consequatur modi, atque qui consectetur incidunt vero deserunt facilis odio minus quidem tenetur nobis in reiciendis distinctio soluta voluptates ipsam. Dolorem.',
        imageId: 'utohneuuouo',
        parts: 2,
        level: ['B1', 'A2'],
        rating: 3.5,
        ratingCount: 55,
        youtube_playlist_id: 'tuohenuoeuohenut'
      }
    ]
  },

  getters: {
    getBooksList: state => state.books
  }
}