import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  console.log(req.body);
  res.json({
      email:req.body.email,
      pass:req.body.password
  })

  const movies = await db
    .collection("users")
    .insert({email:req.body.email,password:req.body.password});
    // .find({})
    // .sort({ metacritic: -1 })
    // .limit(20)
    // .toArray();

  
};

