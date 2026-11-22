# PortfolioWebSilviaHernandez

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Formulario de contacto

El formulario de la demostración valida los campos obligatorios y muestra una confirmación de envío simulado. El motivo de consulta es opcional. Puedes probarlo con datos ficticios en `/contacto` después de ejecutar `npm start`.

## GitHub Pages

La demostración se publica desde `main` y la carpeta `/docs`. Para regenerar esa carpeta en PowerShell, ejecuta estos comandos desde la raíz del proyecto tras instalar las dependencias de npm.

```powershell
npm run build -- --base-href "/proyecto-web-silviaPsicologa/" --output-path "dist/github-pages"
```

Cuando la compilación termine, copia los archivos al directorio de publicación.

```powershell
New-Item -ItemType Directory -Path .\docs -Force | Out-Null
Copy-Item -Path .\dist\github-pages\browser\* -Destination .\docs -Recurse -Force
Copy-Item -LiteralPath .\dist\github-pages\3rdpartylicenses.txt -Destination .\docs -Force
Copy-Item -LiteralPath .\docs\index.html -Destination .\docs\404.html -Force
New-Item -ItemType File -Path .\docs\.nojekyll -Force | Out-Null
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
