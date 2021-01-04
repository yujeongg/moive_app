import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state={
    isLoading: true,
    movies: [] // 미래에 있을 수도 있는 것을 적어둔 것, 필수 아님 (state에 default 값을 반드시 선언할 필요가 없다는 것.)
  };

getMovies = async () => { // 오래 걸릴거야, 뭐가?
  const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json"); // axios를 기다려
}

  componentDidMount(){
    this.getMovies();
    }

  render () {
    const {isLoading} = this.state;
    return (
    <div>
      {isLoading ? "Loading..." : "We are ready"}
    </div>
    );
  }
}
export default App;
