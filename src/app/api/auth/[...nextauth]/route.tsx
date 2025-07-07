import NextAuth from 'next-auth';
import CreedentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
    providers: [
        CreedentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    email: 'Email',
                    type: 'email',
                    placeholder: 'clark@kent.com',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                return null;
            },
        }),
    ],
});

export { handler as GET, handler as POST };
