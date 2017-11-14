import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {
  // render될 동안의 setTimeOut으로 render되는 동안 지연시간을 주기
  state = {
  }

  // state를 바꿀 때에는 setState를 설정해주어야 한다.
  componentDidMount() {
    setTimeout(() => {
      //새로운 무비를 추가하는 법, 이방법을 사용하면 인피니티 스크롤을 사용할 수 있다.
      // 만약 ...this.state.movies를 뒤에 사용하면 새로추가할 객체가 맨위에 추가되고 그 다음에 위에의 값들이 작성이 된다.
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "http://cfile230.uf.daum.net/image/120165194C241D693330B4"
          },
          {
            title: "Full Metal Jacket",
            poster: "https://resizing.flixster.com/G-2niPIShTNblY9-sUj9FrQit3U=/206x305/v1.bTsxMTE2ODAyOTtqOzE3NTg5OzEyMDA7ODAwOzEyMDA"
          },
          {
            title: "Oldboy",
            poster:"https://www.languagetrainers.com/reviews/foreign-film-reviews/uploads/9214-Oldboy.jpg" 
          },
          {
            title: "Star Wars",
            poster: "http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2017/10/the-last-jedi-theatrical-blog.jpg"
          },
          {
            title: "Transpotting",
            poster: "http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2017/10/the-last-jedi-theatrical-blog.jpg"
          }
        ]
      })
    }, 5000)
  }

  // movies라는 variable 데이터를 저장하는 코드
  // _를 붙인 이유는 리엑트 자체 기능과 내가 만든 기능의 차이를 두기 위해 내가 만든 기능 이름앞에 _를 붙인다.
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title = {movie.title} poster = {movie.poster} key = {index}/>
    })
    return movies
  }

  render() {
    return (
      // jsx
      // 3항연산자를 사용하여 성공하면 위의 함수를 실행해준다.
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
