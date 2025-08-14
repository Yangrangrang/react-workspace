import { useRef , useReducer , useMemo , createContext} from "react";
import './App.css';
import UserListArrayContext from "./UserListArrayContext";
import CreateUserRefectory from "./CreateUserRefectory";

function countActiveUsers(users) {
	console.log("활성 사용자 수를 세는중...");
	return users.filter(user => user.active).length;
}

const initialState = {
	users : [
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
	]
}

function reducer(state, action) {
	switch (action.type) {
		case 'CREATE_USER' :
			return {
				inputs: initialState.inputs,
				users: state.users.concat(action.user),
			};
		case 'TOGGLE_USER' :
			return {
				...state,
				users: state.users.map(user =>
				user.id === action.id
					? {...user, active: !user.active}
					: user
				)
			};
		case 'REMOVE_USER' :
			return {
				...state,
				users: state.users.filter(user => user.id !== action.id)
			}
		default:
			throw new Error('Unhandled action');
	}
}

export const UserDispatch = createContext(null);

function AppRefectory() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const {users} = state;

	const count = useMemo(() => countActiveUsers(users), [users]);

	return (
		<>
			<UserDispatch.Provider value={dispatch}>
				<CreateUserRefectory/>
				<UserListArrayContext
					users = {users}
				/>
				<div style={{
					marginBottom: '100px'
				}}>활성 사용자 수: {count}</div>
			</UserDispatch.Provider>
		</>
	);
}

export default AppRefectory;
