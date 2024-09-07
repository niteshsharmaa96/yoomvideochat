"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STEAM_APIKEY;
const apiSecret = process.env.STEAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();
  if (!user) throw new Error("User is not logged in");
  if (!apiKey) throw new Error("No API Key found");
  if (!apiSecret) throw new Error("No API Secret found");

  const client = new StreamClient(apiKey, apiSecret);

  const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
  const issued = Math.floor(Date.now() / 1000) - 60;

  const token = client.generateUserToken({ user_id: user.id, exp, issued });

  return token;
};
