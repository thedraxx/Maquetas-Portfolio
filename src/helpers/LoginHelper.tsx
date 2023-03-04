import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/components/auth/FirebaseAuth';
import { useRouter } from 'next/router';


const LoginHelper = () => {
    const router = useRouter();
    const [error, setError] = useState(false)

    const handlesSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, email: string, password: string) => {

        e.preventDefault();
        try {
            const resp = await signInWithEmailAndPassword(auth, email, password);

            if (resp.user) {
                setError(false);
                router.replace('/Upload',
                    {
                        pathname: '/Upload',
                        query: { uid: resp.user.uid, email: resp.user.email },
                    }
                );
            }

        } catch (error) {
            setError(true);

            console.log(error);
        }
    }

    return {
        handlesSubmit,
        setError,
        error
    }
}

export default LoginHelper