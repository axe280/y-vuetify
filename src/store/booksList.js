export default {
  namespaced: true,

  state: {
    books: [
      {
        id: 'thuonehuoteuhnoth',
        title: 'Book title 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consequatur modi, atque qui consectetur incidunt vero deserunt facilis odio minus quidem tenetur nobis in reiciendis distinctio soluta voluptates ipsam. Dolorem.',
        imageId: 'utohneuo',
        level: ['B2', 'C1'],
        rating: 4,
        ratingCount: 100,
        youtube_playlist_id: 'tuohenuohenut',
        parts: [
          {
            id: 'tuohnuo',
            title: 'Part 1',
            youtube_id: 'utohnuo'
          },
          {
            id: 'uouoeuoe14',
            title: 'Part 2',
            youtube_id: 'utohnuuouo'
          },
          {
            id: 'tuohnuuo',
            title: 'Part 3',
            youtube_id: 'utoh24nuo'
          },
          {
            id: 'tuohnuuouuo',
            title: 'Part 4',
            youtube_id: 'utoh24unuo'
          }
        ]
      },
      {
        id: 'thuonehuoteuuuhnoth',
        title: 'amazing book 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consequatur modi, atque qui consectetur incidunt vero deserunt facilis odio minus quidem tenetur nobis in reiciendis distinctio soluta voluptates ipsam. Dolorem.',
        imageId: 'utohneuoueo',
        level: ['B1', 'C1'],
        rating: 4.5,
        ratingCount: 80,
        youtube_playlist_id: 'tuohenuohenut',
        parts: [
          {
            id: 'tuohnuuuo',
            title: 'Part 1',
            youtube_id: 'utoh2nuo'
          },
          {
            id: 'tuohnuuuuo',
            title: 'Part 3',
            youtube_id: 'utohixx24nuo'
          },
          {
            id: 'tuohnuu22ouuo',
            title: 'Part 4',
            youtube_id: 'utoh24uuunuo'
          }
        ]
      },
      {
        id: 'thuonehuoteuhnotuoeuh',
        title: 'Book title 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consequatur modi, atque qui consectetur incidunt vero deserunt facilis odio minus quidem tenetur nobis in reiciendis distinctio soluta voluptates ipsam. Dolorem.',
        imageId: 'utohneuuouo',
        level: ['B1', 'A2'],
        rating: 3.5,
        ratingCount: 55,
        youtube_playlist_id: 'tuohenuoeuohenut',
        parts: [
          {
            id: 'tuohnuo',
            title: 'Part 1',
            youtube_id: 'utohnuo'
          },
          {
            id: 'uouoeuoe14',
            title: 'Part 2',
            youtube_id: 'utohnuuouo'
          },
        ]
      }
    ],

    bookParts: [
      {
        bookPartId: 'uot2342uouo',
        bookTitle: 'Book title 1',
        partTitle: 'Part 1',
        youtube_id: 'utoh2nuo',
        content: [
          {
            sentences: [
              {
                origText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                transText: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
              },
              {
                origText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                transText: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
              },
              {
                origText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                transText: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
              }
            ],
          },

          {
            sentences: [
              {
                origText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                transText: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
              },
              {
                origText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                transText: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
              },
              {
                origText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                transText: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
              }
            ],
          }
        ],

        words: [
          {
            origWord: 'hello1',
            transWord: 'привет1'
          },
          {
            origWord: 'hello2',
            transWord: 'привет2'
          },
          {
            origWord: 'hello3',
            transWord: 'привет3'
          },
          {
            origWord: 'hello4',
            transWord: 'привет4'
          }
        ]
      }
    ]
  },

  getters: {
    getBooksList: state => state.books
  }
}