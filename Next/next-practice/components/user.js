const User = ({ user }) => {
    return (
        <div>
            <p key={user.id}>{user.id} - {user.name} - {user.email}</p>
        </div>
    )
}

export default User