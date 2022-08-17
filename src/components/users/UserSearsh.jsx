import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

const UserSearsh = () => {

    //@ useState set text
    const [text, setText] = useState('')

    //@ useContext for get users from context github
    const { users, searchUsers, clearUsers } = useContext(GithubContext)

    //@ take value from input
    const handleChange = (e) => setText(e.target.value)

    //@ submit for send data
    const handleSubmit = (e) => {
        e.preventDefault()

        if (text === '') {
            alert('Please enter something')
        } else {
            searchUsers(text)

            setText('')
        }
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
            <div>
                <form onSubmit={handleSubmit} >
                    <div className="form-control">
                        <div className="relative">
                            <input type="text"
                                value={text}
                                onChange={handleChange}
                                placeholder="Search"
                                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                            />
                            <button
                                type="submit"
                                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"> Go</button>
                        </div>
                    </div>
                </form>
            </div>
            {users.length > 0 && (
                <div>
                    <button onClick={clearUsers} className="btn btn-ghost btn-lg">Clear</button>
                </div>
            )}
        </div>
    )
}

export default UserSearsh
