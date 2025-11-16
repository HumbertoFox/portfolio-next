import ProjectComponentClient from '@/components/projects/index-client';
import logoDefault from '@/components/images/default-LOGOBFN.png';
import { list } from '@vercel/blob';

export default async function ProjectComponent() {
    let fotoPerfilUrl: string | null = null;
    let imageFR: string | null = null;
    let imagesBA: string[] = [];

    try {
        const { blobs } = await list({
            prefix: "logo/",
            token: process.env.BLOB_PORTFOLIO_READ_WRITE_TOKEN,
        });

        const foto = blobs.find(b =>
            b.pathname.includes("LOGOBFN.png")
        );

        fotoPerfilUrl = foto?.url ?? null;
    } catch (err) {
        fotoPerfilUrl = null;
    }

    try {
        const { blobs } = await list({
            prefix: "projects/",
            token: process.env.BLOB_PORTFOLIO_READ_WRITE_TOKEN,
        });

        const frFile = blobs.find(b => b.pathname.includes("bg_fron"));
        imageFR = frFile?.url ?? null;

        imagesBA = blobs
            .filter(b => b.pathname.includes("bg_back_"))
            .sort((a, b) => {
                const na = Number(a.pathname.match(/\d+/)?.[0] ?? 0);
                const nb = Number(b.pathname.match(/\d+/)?.[0] ?? 0);
                return na - nb;
            })
            .map(b => b.url);
    } catch (err) {
        console.error("Erro ao carregar backgrounds:", err);
    }

    return (
        <ProjectComponentClient
            logoPerfil={fotoPerfilUrl || logoDefault.src}
            imageFR={imageFR}
            imagesBA={imagesBA}
        />
    );
}