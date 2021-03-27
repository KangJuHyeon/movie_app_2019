import React from 'react';
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {data: {
       data :{movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // console.log(movies);
    this.setState({ movies, isLoading: false });
  }

  componentDidMount(){
    this.getMovies();
  }
  
  render(){
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading 
        ? "Loading..." 
      : movies.map(movie => (
        <Movie 
        key={movie.id}
        id={movie.id}
        year={movie.year}
        title={movie.title} 
        summary={movie.summary} 
        poster={movie.medium_cover_image}
        />
      ))}
      </div> 
    );
  }
}

export default App;

// 삼항연산자 해석: 만약 isLoading이 true이면 "Loading"을 보여줘, 이게 true가 아니라면 "We are ready"를 보여줄꺼야
// getMovies는 axios.get을 사용해! 하지만 axios.get은 완료되기까지 시간이 조금 필요하기 때문에 await을 넣었어
// async await을 하는 이유는?
// 우리가 기본적으로 javascript에게 getMovies function에게 조금 시간이 필요하고 우리는 그걸 기다려야만 하다는 것을 말해야한다.
// 만약 우리가 async/await을 안해주면 javascript는 function을 기다려주지 않고 실행해버릴꺼야
// 그리고 비동기 처리를 하기 위해 더 많은 코드가 필요한 다른 일을 해야 할꺼야
// 그래서 우리는 접근이 끝날 때까지 기다려줘야해
// 우리는 API로 부터 데이터를 가져오고 있고, state를 사용해서 isLoading을 보여주고 있다.