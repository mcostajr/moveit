import { NextApiResponse } from "next";
import { NextApiRequest } from "next-auth/internals/utils";
import { connectToDatabase } from "../../../utils/mongodb";

const handlerProfile = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { method } = req

        switch(method){
            case 'GET':
                const { db } = await connectToDatabase();
                const collection = await db.collection('users')
                .find()
                .sort({level: -1})
                .limit(10)
                .toArray()
                
                res.status(200).json({ users: collection })
                break;
                
            default:
                res.status(405).json({ statusCode: status, message: 'Method not found' })
        }
    } catch(err) {
        res.status(500).json({ statusCode: status, message: err.message })
    }
}

export default handlerProfile