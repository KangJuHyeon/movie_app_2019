import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        // console.log(location.state);
        if(location.state === undefined){
            // 리다이렉트 시킬꺼야, 유저를 데려와서 홈으로 리다이렉트 시켜버릴꺼야
            // console.log(this.props);
            history.push("/");
        }
    }
    
    render(){
        const { location } = this.props;
        if(location.state){
            return <span>{location.state.title}</span>;
        }else{
            return null;
        }
    }
}

export default Detail;

// 수동적으로 movie-detail을 가려고 하면, 자동적으로 홈으로 가지는 경우가 나온다.
// 자동적으로 홈으로 리다이렉트로 해버렸다.
// 그래서 movie-detail로 갈 수 있는 유일한 방법은 클릭해서 밖에 없다는 것이다.