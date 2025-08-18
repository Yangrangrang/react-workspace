import React from "react";
import Profile from "./Profile";
import {Link, Outlet, NavLink} from "react-router-dom";

function Profiles() {
    return (
    <>
        <div>
            <h3>사용자 목록</h3>
            <ul>
                {/*<li><Link to='/profiles/velopert'>velopert</Link></li>*/}
                {/*<li><Link to='/profiles/homer'>homer</Link></li>*/}
                <li>
                    <NavLink
                        to='/profiles/velopert'
                        style={({ isActive }) => ({
                            // isActive 는 꼭 써야하는건 아니지만,
                            // 현재 이 링크가 활성화 상태인지에 따라 스타일을 주고 싶다면 반드시 써야함.
                            background: isActive ? 'red' : 'transparent'
                        })}
                    >velopert
                    </NavLink>
                </li>
                <li><NavLink to='/profiles/homer'>homer</NavLink></li>
            </ul>
        </div>
        <Outlet/>
    </>
    );
}

export default Profiles;