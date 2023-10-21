import React from 'react';

function UserProfile ({user}) {

    return(
        <div>
            {user ? (
                <div>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </div>
            ) : (
                <p>No user info available.</p>
            )}
        </div>
    );
}

export default UserProfile;