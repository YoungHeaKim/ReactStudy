import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {
  // render될 동안의 setTimeOut으로 render되는 동안 지연시간을 주기
  state = {
  }

  // state를 바꿀 때에는 setState를 설정해주어야 한다.
  componentDidMount() {
    this._getMovies();
  }

  // movies라는 variable 데이터를 저장하는 코드
  // _를 붙인 이유는 리엑트 자체 기능과 내가 만든 기능의 차이를 두기 위해 내가 만든 기능 이름앞에 _를 붙인다.
  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie
      title = {movie.title}
      poster = {movie.large_cover_image}
      key = {movie.id}
      genres = {movie.genres}
      synopsis = {movie.synopsis}
      />
    })
    return movies
  }

  _getMovies = async () => {
    // await란 무엇인가 리턴할 때 해당되는 모든 것의 데이터를 movies에 저장할 때 사용한다.
    // _callApi 함수가 실행되기 전까지는 다음 문장이 실행되지 않는다.
    const movies = await this._callApi()
    this.setState({
      movies 
    })
  }

  _callApi = () => {
    return fetch('https://yts.ag/api/v2/list_movies.json?sort by=rating')
    .then(potato => potato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
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
