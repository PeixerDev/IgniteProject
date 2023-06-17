//JSX = JavaScript + XML
import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './global.css';
import styles from './App.module.css';

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/peixerdev.png',
      name: 'Filipe Augusto',
      role: 'Full-Stack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal!😃' },
      { type: 'paragraph', content: 'Finalizei mais um projeto com a ajuda da RocketSeat, utilizando ReactJS.💪🏼🥳' },
      { type: 'paragraph', content: 'Dá um confere!' },
      { type: 'link', content: 'github.com/peixerdev' },
    ],
    publishedAt: new Date('2022-05-24 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/peixerdev.png',
      name: 'Filipe Augusto',
      role: 'Full-Stack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Eai rapaziada!😃' },
      { type: 'paragraph', content: 'Como andam os estudos de vocês?' },
      { type: 'paragraph', content: 'Meu GitHub tá ai em baixo com exemplos de projetos bem legais, da um confere! Bora pra cima!!' },
      { type: 'link', content: 'github.com/peixerdev' },
    ],
    publishedAt: new Date('2022-06-25 23:30:00')
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(post => {
            return(
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div> 
  )
}

