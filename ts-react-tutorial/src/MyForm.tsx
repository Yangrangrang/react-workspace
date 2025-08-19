import React, {useState} from "react";

type MyFormProps = {
    onSubmit : (from: { name: string; description: string }) => void
}

function MyForm({onSubmit}: MyFormProps) {
    const [form, setForm] = useState({
        name: '',
        description: '',
    })

    const {name, description} = form;

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name] : value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 기본적으로 페이지가 submit 했을 때, 새로고침 방지
        onSubmit(form);
        setForm({
            name: '',
            description: '',
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="name" value={name} onChange={onChange}/>
                <input name="description" value={description} onChange={onChange}/>
                <button type="submit">등록</button>
            </form>
        </>
    );
}

export default MyForm;