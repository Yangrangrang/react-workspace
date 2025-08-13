import { useRef , useState , useMemo , useCallback} from "react";
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

function countActiveUsers(users) {
	console.log("활성 사용자 수를 세는중...");
	return users.filter(user => user.active).length;
}
/*
	리렌더링 될때마다 함수가 실행 되는데
	현재 App 에서는 onChange 이벤트를 발생 시켜서 상태를 변경 할 때에도
	화면은 계속 리렌더링 됨.
	불필요하게 함수가 계속 실행됨.
	이럴때 사용할 수 있는게 useMemo (특정 값이 바뀌었을 때만 특정 함수 실행해서 연산하도록 실행)
*/

function App() {

	const [inputs, setInputs] = useState({
		username: '',
		email: '',
	})

	const {username, email} = inputs;
	const onChange = useCallback(e => {
		const {name, value} = e.target;
		setInputs({
			...inputs,
			[name]: value
		});
	}, [inputs]);	// inputs 가 바뀔때만 함수가 새로 만들어지고 그렇지 않다면 만들어져있는 함수가 실행

	const [users, setUsers] = useState([
		{
			id:1,
			username:'hanna1',
			email:'test1@gmail.com',
			active: true,
		},
		{
			id:2,
			username:'hanna2',
			email:'test2@gmail.com',
			active: false,
		},
		{
			id:3,
			username:'hanna3',
			email:'test3@gmail.com',
			active: false,
		},
	]);

	const nextId = useRef(4);
	// useRef 를 사용하는 이유는 해당 값이 변경 될때마다 굳이 리렌더링이 될 필요가 없기 때문이다.

	const onCreate = useCallback(() => {
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
	}, [username, email, users]);

	// 배열에서 특정 아이템을 삭제할 때에는 불변성을 지켜가면서 업데이트를 해줘야 하는데, 이때는 filter 를 쓰는게 좋다.
	const onRemove = useCallback(id => {
		setUsers(users.filter(user => user.id !== id));
	}, [users]);

	const onToggle = useCallback(id => {
		setUsers(users.map(
			user => user.id === id
			? {...user, active: !user.active} : user
		));
	}, [users]);

	const count = useMemo(() => countActiveUsers(users), [users]);

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
			<UserListArrayUseRef
				users = {users}
				onRemove={onRemove}
				onToggle={onToggle}
			/>
			<CreateUser
				username={username}
				email={email}
				onChange={onChange}
				onCreate={onCreate}
			/>
			<div>활성 사용자 수: {count}</div>
		</>
	);
}

export default App;
