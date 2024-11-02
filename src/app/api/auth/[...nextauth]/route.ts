import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"; // Import Google provider if needed

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Here, you should validate the user's credentials
        // For example, by checking against a database.
        const user = { id: 1, name: 'User', email: credentials.email }; // Simulate a user
        return user ? user : null; // Return user object if validation is successful
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // Add other providers as needed
  ],
  pages: {
    signIn: '/auth/signin', // Custom sign-in page
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Attach user id to token
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id; // Attach user id to session
      return session;
    }
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; // Export the handler for both GET and POST methods
