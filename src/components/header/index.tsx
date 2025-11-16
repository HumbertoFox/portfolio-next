import HeaderComponentClient from '@/components/header/index-client';
import logoDefault from '@/components/images/default-LOGOBFN.png';
import { list } from '@vercel/blob';

export default async function StartComponent() {
    let fotoPerfilUrl: string | null = null;

    try {
        const { blobs } = await list({
            prefix: "logo/",
        });

        const foto = blobs.find(b =>
            b.pathname.includes("LOGOBFN.png")
        );

        fotoPerfilUrl = foto?.url ?? null;
    } catch (err) {
        fotoPerfilUrl = null;
    }

    const finalUrl = fotoPerfilUrl || logoDefault.src;

    return <HeaderComponentClient logoPerfil={finalUrl} />;
}