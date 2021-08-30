import { ObjectId } from "bson";
import { NextApiResponse } from "next";
import { getProviders } from "next-auth/client";
import { NextApiRequest } from "next-auth/internals/utils";
import { UserSchema } from "../../../models/User";
import { connectToDatabase } from "../../../utils/mongodb";

const handlerProfile = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { method } = req
        const { slug } = req.query
        const { client, db } = await connectToDatabase();

        switch(method) {
            case 'GET':
                const collection = await db.collection('users').find( { _id: new ObjectId(slug as string) } ).toArray()
                
                res.status(200).json(collection)
                break;
                
            case 'PUT':
                    const note = await db.collection('users').updateOne(
                        { _id: new ObjectId(slug as string) }, 
                        { $set: req.body }
                    )
                    res.status(200).json(note)
                break;
            default:
                res.status(405).json({ statusCode: status, message: 'Method not found' })
        }
    } catch(err) {
        res.status(500).json({ statusCode: status, message: err.message })
    }
}

export default handlerProfile