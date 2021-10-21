import NextAuth from "next-auth";
import Adapters from "next-auth/adapters";
import Providers from "next-auth/providers";
import Models from "../../../models"

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })
  ],
  
  adapter: Adapters.TypeORM.Adapter(
    process.env.MONGODB_URI,
    {
      models: {
        Account: Adapters.TypeORM.Models.Account,
        Session: Adapters.TypeORM.Models.Session,
        VerificationRequest: Adapters.TypeORM.Models.VerificationRequest,
        User: Models.User as any,
       },
    }
  ),

  callbacks: {
    session: async (session, user) => {
      session.user = user;
      
      return Promise.resolve(session);
    },
  },

})