import { NextApiResponse } from "next";
import { NextApiRequest } from "next-auth/internals/utils";
import { connectToDatabase } from "../../../utils/mongodb";

const handlerProfile = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { method } = req
        const { slug } = req.query
        const { db } = await connectToDatabase();

        switch(method) {
            case 'GET':
                const collection = await db.collection('userUsers').find( { uuid: slug as string } ).toArray()
                
                res.status(200).json(collection)
                break;
                
            case 'PUT':
                    const note = await db.collection('userUsers').updateOne(
                        { uuid: slug as string }, 
                        { $set: req.body }
                    )
                    res.status(200).json({ message: true })
                break;
            default:
                res.status(405).json({ statusCode: status, message: 'Method not found' })
        }
    } catch(err) {
        res.status(500).json({ statusCode: status, message: err.message })
    }
}

export default handlerProfile