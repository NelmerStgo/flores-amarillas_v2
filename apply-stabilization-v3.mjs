import fs from "node:fs";
import path from "node:path";

const dryRun = process.argv.includes("--dry-run");
const root = process.cwd();

const files = {
    environment: path.join(
        root,
        "src/components/garden/GardenEnvironment.tsx",
    ),

    relationship: path.join(
        root,
        "src/components/garden/RelationshipGrowth.tsx",
    ),

    css: path.join(
        root,
        "src/styles/iphone-final.css",
    ),
};

let failures = 0;
let changes = 0;

function read(file) {
    if (!fs.existsSync(file)) {
        console.error(
            `✗ No existe: ${path.relative(root, file)}`,
        );

        failures++;

        return null;
    }

    return fs.readFileSync(
        file,
        "utf8",
    );
}

function replaceExact(
    content,
    oldText,
    newText,
    label,
) {
    if (content.includes(newText)) {
        console.log(
            `• ${label} — ya aplicado`,
        );

        return content;
    }

    if (!content.includes(oldText)) {
        console.error(
            `✗ ${label} — no encontré el bloque esperado`,
        );

        failures++;

        return content;
    }

    console.log(`✓ ${label}`);

    changes++;

    return content.replace(
        oldText,
        newText,
    );
}

let environment =
    read(files.environment);

let relationship =
    read(files.relationship);

let css =
    read(files.css);


/* =========================================================
   GARDEN ENVIRONMENT
   ========================================================= */

if (environment !== null) {
    environment = replaceExact(
        environment,

        `className="environment-stage"`,

        "className={`environment-stage environment-stage--${decorPhase}`}",

        "ENV · clase por fase",
    );

    environment = replaceExact(
        environment,

        `visible={rootsDiscoveryOpen}`,

        `visible={
                    rootsDiscoveryOpen &&
                    !memoriesVisible &&
                    !meaningOpen &&
                    !finalGardenVisible
                }`,

        "ENV · ocultar relación al entrar a recuerdos",
    );
}


/* =========================================================
   RELATIONSHIP
   ========================================================= */

if (relationship !== null) {
    relationship = replaceExact(
        relationship,

        `{careLevel === 0 && (`,

        `{careLevel === 0 && !introDone && (`,

        "REL · separar narración inicial del riego",
    );
}


/* =========================================================
   CSS
   ========================================================= */

const marker =
    "/* === STABILIZATION V3 · IPHONE COMPOSITION === */";

const cssBlock = `

${marker}

/*
   Esta sección corrige la composición funcional final sin
   volver a tocar los estilos legacy. iphone-final.css es
   la última hoja importada, por lo que estas reglas son la
   fuente de verdad para la composición móvil.
*/


/* ==========================================================
   LIMPIEZA DE FASES
   ========================================================== */

/*
   La estrella guía deja de existir cuando ya cumplió
   su función.
*/

.environment-stage--relationship
.environment-guide-light,

.environment-stage--memories
.environment-guide-light,

.environment-stage--meaning
.environment-guide-light,

.environment-stage--final
.environment-guide-light {
    display: none;
}


/*
   Evitamos que ondas y señales antiguas ensucien
   fases posteriores.
*/

.environment-stage--relationship
.garden-ripple-origin,

.environment-stage--memories
.garden-ripple-origin,

.environment-stage--meaning
.garden-ripple-origin,

.environment-stage--final
.garden-ripple-origin,

.environment-stage--memories
.distant-signal,

.environment-stage--meaning
.distant-signal,

.environment-stage--final
.distant-signal {
    display: none;
}


/* ==========================================================
   RELACIÓN — UNA SOLA COMPOSICIÓN VERTICAL
   ========================================================== */

.relationship-growth-content {
    width:
        min(
            calc(100vw - 28px),
            390px
        );

    height:
        min(
            78dvh,
            680px
        );
}


/*
   Antes del riego se ve únicamente:
   narración + planta.
*/

.relationship-copy {
    position: relative;

    z-index: 12;

    width:
        min(
            calc(100vw - 42px),
            340px
        );
}


/*
   Flor/tallo y raíces comparten un mismo ancla.

   En un iPhone 16 Pro el tallo termina
   aproximadamente al 65% del escenario.
*/

.relationship-parent-plant {
    top: 38%;
    bottom: auto;

    z-index: 7;
}


.relationship-roots {
    top: 65%;
    bottom: auto;

    width:
        min(
            calc(100vw - 34px),
            360px
        );

    height: 210px;

    margin-left:
        min(
            -46vw,
            -180px
        );

    z-index: 5;
}


/*
   No dependemos del margin-left calculado anterior
   en navegadores estrechos.
*/

@media (max-width: 430px) {
    .relationship-roots {
        left: 50%;

        width:
            calc(
                100vw - 34px
            );

        max-width: 360px;

        margin-left:
            calc(
                (
                    100vw - 34px
                ) / -2
            );
    }
}


/*
   Cuando termina la narración inicial aparece
   el bloque de cuidado arriba de la planta,
   no encima de la flor.
*/

.relationship-care {
    top: 8%;
    bottom: auto;

    width:
        min(
            calc(100vw - 54px),
            300px
        );

    margin-left:
        max(
            -150px,
            calc(
                (
                    100vw - 54px
                ) / -2
            )
        );

    z-index: 14;
}


.relationship-care p {
    max-width: 278px;

    margin-inline: auto;
}


.relationship-ending {
    top: 9%;

    width:
        min(
            calc(100vw - 42px),
            350px
        );
}


.relationship-sprouts {
    z-index: 8;
}


/* ==========================================================
   FINAL — EL ARTE REAL ES EL JARDÍN
   ========================================================== */

/*
   FinalGarden tenía un fondo propio que podía
   tapar GardenDecor.

   Lo hacemos transparente para conservar:
   sunset + ilustraciones.
*/

.final-garden {
    background: transparent;
}


/*
   Ya hay ilustraciones reales.
   Retiramos las flores CSS de placeholder.
*/

.final-garden-flowers {
    display: none;
}


/*
   Oscurecimiento suficiente para leer texto,
   sin esconder el jardín.
*/

.final-garden::before {
    background:
        linear-gradient(
            180deg,
            rgba(
                18,
                16,
                17,
                0.18
            )
            0%,

            rgba(
                18,
                16,
                15,
                0.08
            )
            45%,

            rgba(
                15,
                14,
                12,
                0.22
            )
            100%
        );
}


/*
   El final deja más aire al jardín
   en un teléfono alto.
*/

.final-garden-copy {
    top: 9%;

    padding:
        16px
        15px;

    background:
        linear-gradient(
            180deg,
            rgba(
                25,
                22,
                19,
                0.24
            ),
            rgba(
                25,
                22,
                19,
                0.36
            )
        );

    box-shadow:
        0
        14px
        45px
        rgba(
            0,
            0,
            0,
            0.08
        );
}


.final-continuation {
    margin-top: 22px;
}


.final-continuation-symbol {
    margin:
        14px
        auto;
}


/*
   Reducimos elementos secundarios
   para no saturar el cierre.
*/

.garden-decor--final
.decor-ladybug {
    opacity:
        0.48
        !important;
}


.garden-decor--final
.decor-bees {
    opacity:
        0.52
        !important;
}


.garden-decor--final
.decor-butterfly--botanical,

.garden-decor--final
.decor-butterfly--yellow {
    opacity:
        0.56
        !important;
}


.garden-decor--final
.decor-sparkles {
    opacity:
        0.52
        !important;
}


/* ==========================================================
   MEANING / CONSTELACIÓN
   ========================================================== */

.meaning-copy {
    max-height:
        calc(
            100dvh - 120px
        );
}


.constellation-center {
    box-sizing:
        border-box;

    display: grid;

    place-items:
        center;
}


.constellation-copy {
    left: 50%;

    transform:
        translateX(-50%);
}


/* ==========================================================
   IPHONE 16 / IPHONE 16 PRO
   ========================================================== */

@media
(
    min-width: 390px
)
and
(
    max-width: 410px
)
and
(
    min-height: 820px
) {
    .relationship-parent-plant {
        top: 39%;
    }


    .relationship-roots {
        top: 65%;
    }


    .relationship-care {
        top: 7%;
    }


    .final-garden-copy {
        top: 8%;
    }


    .decor-sunflowers {
        width: 170px;
    }


    .decor-yellow-roses {
        width: 116px;
    }


    .decor-daisies {
        width: 126px;
    }
}


/* ==========================================================
   ACCESIBILIDAD / SAFARI
   ========================================================== */

.intro-welcome-overlay,
.memory-overlay {
    -webkit-backdrop-filter:
        blur(12px);
}


.meaning-copy,
.final-garden-copy,
.constellation-center--button {
    -webkit-backdrop-filter:
        blur(8px);
}
`;


/* =========================================================
   AGREGAR CSS
   ========================================================= */

if (css !== null) {
    if (css.includes(marker)) {
        console.log(
            "• CSS · estabilización V3 — ya aplicada",
        );
    } else {
        console.log(
            "✓ CSS · estabilización V3",
        );

        css += cssBlock;

        changes++;
    }
}


/* =========================================================
   RESULTADO
   ========================================================= */

console.log(
    "\n────────────────────────────────────",
);

console.log(
    `Cambios pendientes: ${changes}`,
);

console.log(
    `Fallos: ${failures}`,
);


if (failures > 0) {
    console.log(
        "\nNo se escribió ningún archivo.",
    );

    process.exitCode = 1;
} else if (dryRun) {
    console.log(
        "\nDry-run correcto. Ejecuta:",
    );

    console.log(
        "node apply-stabilization-v3.mjs",
    );
} else {
    fs.writeFileSync(
        files.environment,
        environment,
        "utf8",
    );

    fs.writeFileSync(
        files.relationship,
        relationship,
        "utf8",
    );

    fs.writeFileSync(
        files.css,
        css,
        "utf8",
    );

    console.log(
        "\n✓ Estabilización aplicada.",
    );

    console.log(
        "\nAhora ejecuta:",
    );

    console.log(
        "npm run build",
    );

    console.log(
        "npm run lint",
    );

    console.log(
        "npm run dev",
    );
}