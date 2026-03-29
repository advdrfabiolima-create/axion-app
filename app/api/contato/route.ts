import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { nome, empresa, email, whatsapp, mensagem } = await req.json();

  if (!nome || !email || !mensagem) {
    return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Serviço de e-mail não configurado." }, { status: 500 });
  }

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; color: #1a1a1a;">
      <h2 style="color: #00C853; margin-bottom: 4px;">Novo contato via site</h2>
      <p style="color: #666; font-size: 14px; margin-top: 0;">Axion Systems — formulário de contato</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <table style="width: 100%; font-size: 15px; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #666; width: 120px;">Nome</td><td style="padding: 8px 0; font-weight: 600;">${nome}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Empresa</td><td style="padding: 8px 0;">${empresa || "—"}</td></tr>
        <tr><td style="padding: 8px 0; color: #666;">E-mail</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #00C853;">${email}</a></td></tr>
        <tr><td style="padding: 8px 0; color: #666;">WhatsApp</td><td style="padding: 8px 0;">${whatsapp || "—"}</td></tr>
      </table>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <p style="color: #666; font-size: 13px; margin-bottom: 6px;">Mensagem</p>
      <p style="background: #f7f7f7; padding: 16px; border-radius: 8px; font-size: 15px; line-height: 1.6; margin: 0;">${mensagem.replace(/\n/g, "<br/>")}</p>
    </div>
  `;

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: { name: "Axion Systems — Site", email: "contato@axionsystem.com.br" },
      to: [{ email: "contato@axionsystem.com.br", name: "Axion Systems" }],
      replyTo: { email, name: nome },
      subject: `Novo contato: ${nome}${empresa ? ` — ${empresa}` : ""}`,
      htmlContent: html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Brevo error:", err);
    return NextResponse.json({ error: "Falha ao enviar mensagem." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
