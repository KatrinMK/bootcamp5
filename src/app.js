import React, {Fragment, Component} from 'react';
import Post from './components/post';
import PostList from './components/postsList'
import Timer from './components/timer';
import RenderIf from "./common/renderIf";

class App extends Component{

    state = {
        showTimer: false
    }

    switchTimer = () => {
        this.setState((prevState) => {
            return {
                showTimer: !prevState.showTimer
            }
        })
    }
    showTotalTime = (initialTime, stopTime)=> {
        console.log(initialTime - stopTime)
         }
       
    showDurationTime = (initialTime, stopTime) => {
         console.log(stopTime - initialTime)
    }

    render(){
        return (
            <Fragment>
                <Timer time="5" onTimeOut={this.switchTimer} />
                <button onClick={this.switchTimer}>Переключить таймер</button>
                <RenderIf condition={this.state.showTimer}>
                    <Timer  time="6000" step="2" autoStart/>
                </RenderIf>
                <Timer onTimeChange={this.showDurationTime} time='0' reverse={false} autoStart/>
                <Timer onTimeChange={this.showTotalTime} time="60" reverse autoStart />
            </Fragment>
        );
    }
}
export default App;