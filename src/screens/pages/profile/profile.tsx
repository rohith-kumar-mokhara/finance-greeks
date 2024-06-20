import React from 'react';
import usePageTitle from '../../../hooks/usePageTitle';

type ProfileProps = {
    
};

const Profile:React.FC<ProfileProps> = () => {

    usePageTitle("Profile")
    
    return(
        <div className='profile-page'>
            My Profile
        </div>
    )
}
export default Profile;