# React

title과 poster 값을 숫자나 true or false로 반환되는 되지 않고 `string`으로 출력하는 코드  
`isRequired`를 사용하면 어떤것이 빠졌는지에 대해 콘솔에서 보여준다.  
```js
static propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}
```

## Render와 Update의 순서
```js
Render: componentWillMount() -> render() -> componentDidMount()
Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidMount()
```

movies라는 variable 데이터를 저장하는 코드  
_를 붙인 이유는 리엑트 자체 기능과 내가 만든 기능의 차이를 두기 위해 내가 만든 기능 이름앞에 _를 붙인다.  
```js
_renderMovies = () => {
  const movies = this.state.movies.map((movie, index) => {
    return <Movie title = {movie.title} poster = {movie.poster} key = {index}/>
  })
  return movies
}
```

## Smart State & Dumb State
Smart State는 state가 있다.  
Dumb State는 State가 없고 Stateless라고도 부르고 functional component이다. 특징은 state가 없고 props밖에 없다.

```js
// Smart State
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

// Dumb State
function MoviePoster({poster}){
  return (
    <img src={poster} alt="Movie Poster" />
  )
}
```
위의 코드에서 두개의 코드는 같은 작동을 하지만 차이점은 Dumb State는 Update와 ComponentWillMount와 ComponentDidMount가 필요가 없다. 그냥 한개의 props와 한개의 html파일만 있으면 된다.  
위의 경우 Dumb State를 사용하는 것이 더 적은 양의 코드를 작성하는 것이기 때문에 Dumb State를 사용하여도 된다.  

## Ajax
사용하는 이유는 뭔가를 불러올 때 페이지를 새로고침하지 않고 로딩을 하며 API를 불러오기 떄문이다.  
