import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {
  // title과 poster 값을 숫자나 true or false로 반환되는 되지 않고 string으로 출력하는 코드
  // isRequired를 사용하면 어떤것이 빠졌는지에 대해 콘솔에서 보여준다.
  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  //   poster: PropTypes.string.isRequired
  // }

  // component lifecycle
  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    console.log('did mount')    
  }

  render() {
    console.log('did render')
    return (
      <div>
        <MoviePoster poster={this.props.poster} />
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

class MoviePoster extends Component {

  static propTypes = {
    poster: PropTypes.string.isRequired
  }

  render() {
    return (
      <img src={this.props.poster}/>
    )
  }
}

export default Movie