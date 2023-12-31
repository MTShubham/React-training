import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios'

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                // username: { label: 'Username', type: 'username' },
                // password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                // DOCS = https://dummyjson.com/docs/auth
                console.log(credentials);
                const response = await axios.post('https://dummyjson.com/auth/login', credentials)
                if (response) {
                    // console.log(response.data);
                    return response.data;
                }
                else {
                    return null;
                }
            },
        })
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user);
            return token;
        },
        session: async ({ session, token }) => {
            session.user = token.user ? token.user : {};
            return session;
        }
    },
    pages: {
        signIn: '/login'
    }
}

export default NextAuth(authOptions);