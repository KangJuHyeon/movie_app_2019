import React from 'react';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 6000);
  }
  
  render(){
    const { isLoading } = this.state;
    return (
      <div>{isLoading ? "Loading...": "We are ready"}</div> 
    )
  }
  
}

export default App;

// 삼항연산자 해석: 만약 isLoading이 true이면 "Loading"을 보여줘, 이게 true가 아니라면 "We are ready"를 보여줄꺼야