# Manual MERN
## Node, Express y Typescript
### Configuración del entorno

1. Primero debes instalar node en tu maquina:

    1.1 Instalación de node en ubuntu:

        Ejecuta los siguientes comandos para poder instalar node en tu computadora:

        Refrescar el caché APT:
            $ sudo apt update

        Instalar Node.js:
            $ sudo apt install nodejs

        Instalar la herramienta NPM:
            $ sudo apt install npm

    1.2 Instalación de node en windows: 
        
        Para instalar node en windows debes ingresar al siguiente enlace https://nodejs.org/es/download y descargar el instalador.

        Instalar la herramienta NPM usando una terminal:
            $ npm install npm@latest -g
    
2. Instalar typescript en tu computadora de forma global con el siguiente comando:

    ``` 
    $ sudo npm i -g typescript
    ``` 

3. Iniciar el proyecto de node en nuestra carpeta:

    ``` 
    $ npm init -y
    ```

4. Iniciar el archivo de configuración de typescript:
    ``` 
    $ tsc --init
    ``` 

5. Editar la configuración del archivo tsconfig.json:

    5.1 Cambiar el atributo ```"target": "es5"``` a ``` "target": "es6"``` 

    5.2 Descomentar el atributo ```"outDir": "./"``` y agregar la ruta donde se desea almacenar los archivos .js generados.

    5.3 Descomentar el atributo ```"sourceMap": true``` y cambiarlo a false ya que no los utilizaremos.

    5.4 Descomentar el atributo ```"moduleResolution": "node"``` .

6. Ejecutar los siguientes comandos:
     
    6.1 Libreria para agregar nuevas reglas:

        $ npm i tslint --save-dev

    6.2 Agregamos como dependencia de desarrollo a typescript:

        $ npm i typescript --save-dev

7. Iniciar el archivo tslint:

    7.1 Ejecutar el comando:
    ```
    $ ./node_modules/.bin/tslint --init
    ```

8. Agregar la siguiente configuración al archivo tslint.json

    ```
    "rules": {
            "no-console": false
    }
    ```

9. Ya estás listo para iniciar el servidor usando node y express.

### Servidor en Node

1. Primero debes crear un archivo .ts (```index.ts```) para iniciar la configuración inicial, también debes crear un archivo para poder configurar el servidor en el respositorio se creo ```models/server.ts```.

2. Instalar nuevas librerias:
    ```
    $ npm i express cors dotenv

    $ npm i --save-dev @types/express
    ```

