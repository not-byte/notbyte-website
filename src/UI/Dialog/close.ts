"use server";

import { redirect } from "next/navigation";

export async function redirectToPage(defaultPathName?: string) {
  redirect(defaultPathName ?? "/");
}
