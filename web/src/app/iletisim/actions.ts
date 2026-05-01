"use server";

import { promises as fs } from "fs";
import path from "path";
import { redirect } from "next/navigation";

export async function submitContactForm(formData: FormData) {
  const ad = String(formData.get("ad") ?? "").trim();
  const soyad = String(formData.get("soyad") ?? "").trim();
  const eposta = String(formData.get("eposta") ?? "").trim();
  const konu = String(formData.get("konu") ?? "").trim();
  const mesaj = String(formData.get("mesaj") ?? "").trim();

  if (!ad || !eposta || !mesaj) {
    redirect("/iletisim?hata=eksik-alan");
  }

  const entry = {
    id: Date.now(),
    tarih: new Date().toISOString(),
    ad,
    soyad,
    eposta,
    konu,
    mesaj,
  };

  const dataDir = path.join(process.cwd(), "data");
  const dataFile = path.join(dataDir, "mesajlar.json");

  try {
    await fs.mkdir(dataDir, { recursive: true });
    let existing: typeof entry[] = [];
    try {
      const raw = await fs.readFile(dataFile, "utf-8");
      existing = JSON.parse(raw);
    } catch {
      // file doesn't exist yet
    }
    existing.push(entry);
    await fs.writeFile(dataFile, JSON.stringify(existing, null, 2), "utf-8");
  } catch {
    redirect("/iletisim?hata=sunucu");
  }

  redirect("/iletisim?basarili=1");
}
