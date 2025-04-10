"use server";

import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";
import { Status } from "@/types/models";
import { revalidatePath } from "next/cache";

export async function addTodo({ text, status }: { text: string; status: Status }) {
  await db.insert(todo).values({ text, status });
  revalidatePath("/");
}