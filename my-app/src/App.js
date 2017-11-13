import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

const movies = [
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
]

class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidMount()

  // render될 동안의 setTimeOut으로 render되는 동안 지연시간을 주기
  state = {
    greeting: 'Hello!'
  }

  // state를 바꿀 때에는 setState를 설정해주어야 한다.
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        greeting: 'Hello again!'
      })
    }, 2000)
  }

  render() {
    return (
      // jsx
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
