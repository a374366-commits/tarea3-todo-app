const js = require("@eslint/js");

module.exports = [
    // Reglas para la verificación del código
    // Reglas base de ESLint (Javascript)
    js.configs.recommended, {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "commonjs",
            globals: {
                require: "readonly",
                module: "writable",
                exports: "writable",
                __dirname: "readonly",
                process: "readonly"
            }
        },
        rules: {
            "no-unused-vars": "warn"
        }
    },
    // Configuración adicional (Solo aplica a los archivos de tests.)
    {
        files: ["tests/**/*.js"],
        languageOptions: {
            globals: {
                describe: "readonly",
                test: "readonly",
                expect: "readonly",
                beforeEach: "readonly",
                jest: "readonly"
            }
        }
    },
    // Exclusiones globales (Carpetas o archivos que ESLint no debe analizar)
    {
        ignores: ["node_modules/", "logs/"]
    }
];
