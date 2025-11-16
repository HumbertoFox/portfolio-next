import AboutComponentClient from '@/components/about/index-client';
import imageDefault from '@/components/images/default-perfil.png';
import { list } from '@vercel/blob';

export default async function AboutComponent() {
    let fotoPerfilUrl: string | null = null;

    try {
        const { blobs } = await list({ prefix: 'profile/' });

        const foto = blobs.find(b => b.pathname.includes('foto-perfilCF.png'));

        fotoPerfilUrl = foto?.url ?? null;
    } catch (err) {
        fotoPerfilUrl = null;
    }

    const finalUrl = fotoPerfilUrl || imageDefault.src;

    return <AboutComponentClient fotoPerfil={finalUrl} />;
}