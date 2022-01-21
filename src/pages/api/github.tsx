import { Octokit } from "@octokit/rest";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  repos: number
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_KEY
  })

  const user = await octokit.request('/users/ray-itech')

  return res.status(200).json({
    repos: user.data.public_repos
  })
}
