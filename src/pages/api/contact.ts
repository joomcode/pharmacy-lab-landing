import {NextApiRequest, NextApiResponse} from 'next';
import fetch from 'node-fetch';

const SLACK_HOOK = Buffer.from(
  'aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVDAzSjFLODhCL0IwMURUS0YxQkdRL0toQTJLdFlTdVJJWHZ6cHBVN2J3bzNEUA==',
  'base64',
).toString();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let {name, email, additional} = req.body;

    if (typeof name !== 'string' || typeof email !== 'string' || typeof additional !== 'string') {
      throw new Error('Invalid params');
    }

    name = name.trim();
    email = email.trim();
    additional = additional.trim().replace(/\n\n/g, '\n');

    name = name ? name : '<empty>';
    email = email ? email : '<empty>';

    const slackRes = await fetch(SLACK_HOOK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: '*New form received:*',
            },
          },
          {
            type: 'section',
            text: {
              type: 'plain_text',
              text: `Name: ${name}\nEmail: ${email}${additional ? `\nAdditional: ${additional}` : ''}`,
            },
          },
        ],
      }),
    });

    if (!slackRes.ok) {
      slackRes.text().then((text) => {
        console.error('Slack response:', text);
      });

      throw new Error(`Slack Error: ${slackRes.status} ${slackRes.statusText}`);
    }

    res.status(200).json({
      ok: true,
    });
  } catch (err) {
    console.error('Api Error:', err);

    res.status(500).json({
      statusCode: 500,
      message: 'Internal Server Error',
    });
  }
};
