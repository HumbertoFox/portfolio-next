import StartComponentClient from '@/components/start/index-client';
import imageDefault from '@/components/images/default-perfil.png';
import { list } from '@vercel/blob';

export default async function StartComponent() {
    let fotoPerfilUrl: string | null = null;

    try {
        const { blobs } = await list({
            prefix: "profile/",
            token: process.env.BLOB_PORTFOLIO_READ_WRITE_TOKEN,
        });

        const foto = blobs.find(b =>
            b.pathname.includes("foto-perfilSFO.png")
        );

        fotoPerfilUrl = foto?.url ?? null;
    } catch (err) {
        fotoPerfilUrl = null;
    }

    const finalUrl = fotoPerfilUrl || imageDefault.src;

    return <StartComponentClient fotoPerfil={finalUrl} />;
}