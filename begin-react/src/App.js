import { useRef , useState } from "react";
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import './App.css';
import InputSample from "./InputSample";
import InputSampleList from "./InputSampleList";
import UserList from "./UserList";
import UserListArray from "./UserListArray";
import UserListArrayUseRef from "./UserListArrayUseRef";
import CreateUser from "./CreateUser";

function App() {

	const [inputs, setInputs] = useState({
		username: '',
		email: '',
	})

	const {username, email} = inputs;
	const onChange = e => {
		const {name, value} = e.target;
		setInputs({
			...inputs,
			[name]: value
		});
	};

	const [users, setUsers] = useState([
		{
			id:1,
			username:'hanna1',
			email:'test1@gmail.com'
		},
		{
			id:2,
			username:'hanna2',
			email:'test2@gmail.com'
		},
		{
			id:3,
			username:'hanna3',
			email:'test3@gmail.com'
		},
	]);

	const nextId = useRef(4);
	// useRef 를 사용하는 이유는 해당 값이 변경 될때마다 굳이 리렌더링이 될 필요가 없기 때문이다.

	const onCreate = () => {
		const user = {
			id: nextId.current,
			username,
			email,
		};
		// setUsers([...users, user]);	// 1번째 방법
		setUsers(users.concat(user));	// 2번째 방법 (push 사용x)
		setInputs({
			username: '',
			email: '',
		});
		console.log(nextId.current);
		nextId.current += 1;	// 함수가 실행될 때 마다, 기존값의 1을 더해줌.
	}

	return (
		<>
			<Wrapper>
				<Hello name="react" color="red" isSpecial = {true}/>
				<Hello name="react" color="red" isSpecial // 값을 넣지 않을 경우 true 로 인식
				/>
				<Hello color="pink"/>
			</Wrapper>
			<Counter />
			<InputSample/>
			<InputSampleList/>
			<UserList />
			<UserListArray />
			<UserListArrayUseRef users = {users}/>
			<CreateUser
				username={username}
				email={email}
				onChange={onChange}
				onCreate={onCreate}
			/>
		</>
	);
}

export default App;
