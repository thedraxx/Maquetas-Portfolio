import React, { useContext, useState } from 'react';
import { LoginContext } from '@/components/context/Login/LoginContext';
import { auth } from '@/components/auth/FirebaseAuth';
import { useRouter } from 'next/router';

const Logout = () => {

    const { StartLogout } = useContext(LoginContext)
    const router = useRouter();

    const handleLogout = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            await auth.signOut();
            StartLogout();
            router.replace('/login');
        } catch (error) {
            console.log(error);
        }
    }

    return {
        handleLogout
    }
}

export default Logout