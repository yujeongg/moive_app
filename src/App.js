import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{
  state={
    
    isLoading: true,
    movies: [] // 미래에 있을 수도 있는 것을 적어둔 것, 필수 아님 (state에 default 값을 반드시 선언할 필요가 없다는 것.)
  };

getMovies =  async() => { // 오래 걸릴거야, 뭐가?
  const {data : {data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); // axios를 기다려 + api에서 sort by rating을 확인한 후, sort_by=rating 추가

  console.log({movies});
  this.setState({ movies , isLoading:false})
}

  componentDidMount(){
    this.getMovies();
    }

  render () {
    const {isLoading, movies} = this.state;
    return (
    <div>
      {isLoading ? "Loading..." : 
      movies.map(movie => (<Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image}/>
      )
      )
    }
    </div>
    );
  }
}
export default App;
