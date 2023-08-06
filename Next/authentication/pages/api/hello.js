import { authOptions } from "./auth/[...nextauth]"
import { getServerSession } from "next-auth"

// API restriction with signin
export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    res.status(200).json({ name: 'John Doe' })
  }
  else {
    res.status(401).json({ msg: "Not accessible without signin" })
  }
}
