import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/brevo";

const inputSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
});

export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .inputValidator((input) => inputSchema.parse(input))
  .handler(async ({ data }) => {
    const lovableKey = process.env["LOVABLE_API_KEY"];
    const brevoKey = process.env["BREVO_API_KEY"];
    if (!lovableKey || !brevoKey) {
      throw new Error("Email service is not configured");
    }

    const listIdRaw = process.env["BREVO_LIST_ID"];
    const listId = listIdRaw ? Number(listIdRaw) : undefined;

    const body: Record<string, unknown> = {
      email: data.email,
      attributes: { FIRSTNAME: data.name },
      updateEnabled: true,
    };
    if (listId && Number.isFinite(listId)) {
      body.listIds = [listId];
    }

    const response = await fetch(`${GATEWAY_URL}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": brevoKey,
      },
      body: JSON.stringify(body),
    });

    // 201 created, 204 updated — both are success.
    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Brevo subscribe failed [${response.status}]: ${errorBody}`);
      throw new Error("Subscription failed. Please try again later.");
    }

    return { ok: true as const };
  });
