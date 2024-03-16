"use client"

import supabase from '../../supabase/supabase';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const requireAuth = (WrappedComponent) => {
    const AuthMiddleware = (props) => {
        const router = useRouter();

        async function handle_auth() {
            const {data: { user } } = await supabase
                .auth.getUser()

            return user
        }
        useEffect(() => {
            handle_auth().then((r) => {
                console.log("authenticated" + JSON.stringify(r))
                if (!r) {
                    router.push('/'); // Redirect to login page if user is not authenticated
                }
            })

        }, []);

        return <WrappedComponent {...props} />;
    };

    return AuthMiddleware;
};

export default requireAuth