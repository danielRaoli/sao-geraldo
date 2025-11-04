import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const formType = (formData.get("formType") || "") as string;
        const name = (formData.get("name") || "") as string;
        const email = (formData.get("email") || "") as string;
        const phone = (formData.get("phone") || "") as string;
        const message = (formData.get("message") || "") as string;
        const area = (formData.get("area") || "") as string;

        const apiKey = process.env.RESEND_API_KEY;
        const toEmail = formType === "clientes" ? "marketing@gsaogeraldo.com.br" : "rh@gsaogeraldo.com.br";

        // Apenas a API key é obrigatória; o From terá fallback seguro em desenvolvimento
        if (!apiKey) {
            console.error("[send] Missing env: RESEND_API_KEY");
            return NextResponse.json(
                {
                    ok: false,
                    error: "Configuração ausente: defina RESEND_API_KEY em .env.local",
                },
                { status: 500 }
            );
        }


        const resend = new Resend(apiKey);

        const subjectBase =
            formType === "trabalhe"
                ? "Nova candidatura — Trabalhe Conosco"
                : "Nova mensagem — Atendimento ao Cliente";

        const subject = `${subjectBase} | ${name}`;

        // Validações de campos obrigatórios
        if (!name || !email) {
            return NextResponse.json(
                { ok: false, error: "Nome e e-mail são obrigatórios" },
                { status: 400 }
            );
        }
        if (formType === "clientes" && !message) {
            return NextResponse.json(
                { ok: false, error: "Mensagem é obrigatória" },
                { status: 400 }
            );
        }
        if (formType === "trabalhe" && !area) {
            return NextResponse.json(
                { ok: false, error: "Área de interesse é obrigatória" },
                { status: 400 }
            );
        }

        const html = `
      <div style="font-family: Arial, sans-serif; color: #0A0A0A;">
        <h2 style="margin-bottom: 8px;">${subjectBase}</h2>
        <p style="margin: 0 0 16px;">Recebido via formulário do site.</p>
        <table style="border-collapse: collapse; width: 100%;">
          <tbody>
            <tr><td style="padding: 8px; font-weight: bold;">Nome</td><td style="padding: 8px;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">E-mail</td><td style="padding: 8px;">${escapeHtml(email)}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Telefone</td><td style="padding: 8px;">${escapeHtml(phone)}</td></tr>
            ${formType === "trabalhe" ? `<tr><td style="padding: 8px; font-weight: bold;">Área</td><td style="padding: 8px;">${escapeHtml(area)}</td></tr>` : ""}
            ${formType !== "trabalhe" ? `<tr><td style="padding: 8px; font-weight: bold;">Mensagem</td><td style="padding: 8px; white-space: pre-wrap;">${escapeHtml(message)}</td></tr>` : ""}
          </tbody>
        </table>
      </div>
    `;

        const { data, error } = await resend.emails.send({
            from: 'Super São Geraldo <contato@supersaogeraldo.com>'!,
            to: toEmail!,
            subject,
            html,
        });

        if (error) {
            console.error("[send] Resend send error:", error);
            return NextResponse.json({ ok: false, error }, { status: 500 });
        }

        return NextResponse.json({ ok: true, id: data?.id }, { status: 200 });
    } catch (err) {
        console.error("[send] Unexpected error:", err);
        return NextResponse.json(
            { ok: false, error: (err as Error).message },
            { status: 500 }
        );
    }
}

function escapeHtml(input: string) {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}