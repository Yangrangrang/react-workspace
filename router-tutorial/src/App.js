import './App.css';
import {Route, Routes, Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample"; // 특정주소의 특정 컴포넌트를 보여주겠다.


function App() {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles">프로필 목록</Link>
                </li>
                <li>
                    <Link to="/history">예제</Link>
                </li>
            </ul>
            <hr/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                {/*<Route path="/profile/:username" element={<Profile/>}/>*/}
                <Route path="/profiles" element={<Profiles/>}>
                    <Route path="" element={<div>.사용자를 선택해주세요.</div>}/>
                    <Route path=":username" element={<Profile/>}/>
                </Route>
                <Route path="/history" element={<HistorySample/>}/>
            </Routes>
        </>
    );
}

export default App;
