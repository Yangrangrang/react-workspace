import CounterContainer from "./containers/CounterContainer";
import PostListContainer from "./containers/PostListContainer";
import {Route, Routes} from "react-router-dom";
import PostLists from "./components/PostLists";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";

function App() {
    return (
        <>
            {/*<CounterContainer/>*/}
            {/*<PostListContainer/>*/}
            <Routes>
                <Route path="/" element={<PostListPage/>}/>
                <Route path="/:id" element={<PostPage/>}/>
            </Routes>
        </>
    );
}

export default App;
