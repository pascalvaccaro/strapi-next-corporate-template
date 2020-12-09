import { NextApiRequest, NextApiResponse } from "next";
import { initializeApollo } from "../../hooks/apollo";
import { FIND_PAGE } from "../../queries/pages";
import { Page } from "../../typings";

export default async function preview(req: NextApiRequest, res: NextApiResponse) {
  const { slug, secret } = req.query;

  if (secret !== process.env.STRAPI_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid secret token' });
  }
  if (!slug) {
    return res.status(400).json({ message: 'No slug provided in the query'});
  }
  const client = initializeApollo(null);
  const { data } = await client.query<{page: Page}>({
    query: FIND_PAGE,
    variables: { slug },
  });

  if (!data || !data.page || !data.page.slug) {
    return res.status(404).json({ message: `Slug ${slug} not found` });
  }

  res.setPreviewData({});
  res.redirect("/" + data.page.slug);
};