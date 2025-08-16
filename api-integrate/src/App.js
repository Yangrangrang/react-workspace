import './App.css';
// import {UsersProvider} from "./UsersContext";
import {UsersProvider} from "./UsersContextV3";
import UsersV2 from "./UsersV2";

function App() {
    return (
        <>
            <UsersProvider>
                <UsersV2/>
            </UsersProvider>
        </>
    );
}

export default App;
