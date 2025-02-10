"use server"

import { db } from "@/server"
import { VisitCt } from "../schema"
import { desc } from "drizzle-orm"

// 获取所有访问记录
export async function getVisitorCT() {
  return await db.select().from(VisitCt);
}

// 添加新的访问记录
export async function addVisitorCT() {
  try {
    await db.insert(VisitCt).values({
      // id 会自动生成
      // visitTime 会自动设置为当前时间
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to add visitor record:', error);
    return { success: false, error };
  }
}