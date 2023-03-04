
import { auth } from '@/components/auth/FirebaseAuth';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Logout = () => {

    const router = useRouter();

    const [error, setError] = useState<boolean>(false);

    const handleLogout = async () => {
        try {
            await auth.signOut();
            router.replace('/login');
        } catch (error) {
            console.log(error);
        }
    }

    return {
        handleLogout,
        setError,
        error
    }
}

export default Logout