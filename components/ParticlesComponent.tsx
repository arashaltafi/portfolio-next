"use client"

import { tsParticles } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";

const ParticlesComponent = () => {

    (async () => {
        await loadLinksPreset(tsParticles);

        await tsParticles.load("tsparticles", {
            preset: 'links',
        });
    })();

    return (
        <div id="tsparticles" className='opacity-10'></div>
    )
}

export default ParticlesComponent