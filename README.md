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

## 동가와 비동기
동기는 먼저있는 코드가 실행되지 않고 나서는 다음 코드가 실행되지 않는다.  
동기보다는 비동기를 사용하는 것이 더 좋다. 그 이유는 두개의 database에서 동시에 data를 불러올 때 두가지를 한번에 실행을 해야하기 때문에 비동기를 사용하여야 한다.  

## Async Await in React

만약 밑에와 같은 코드가 있으면 `this.setState`부터는 `_callApi`가 실행이 완료되기 전까지는 실행이 되지않는 동기식으로 변화를 시켜줄 수 있다.  
```js
_getMovies = async () => {
  // await란 무엇인가 리턴할 때 해당되는 모든 것의 데이터를 movies에 저장할 때 사용한다.
  // _callApi 함수가 실행되기 전까지는 다음 문장이 실행되지 않는다.
  const movies = await this._callApi()
  this.setState({
    movies 
  })
}
```