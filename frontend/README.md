# My ToDo List

## Descripción

**My ToDo List** es una aplicación web de gestión de tareas construida con el stack MERN (MongoDB, Express, React, Node.js) y **TypeScript**. Permite a los usuarios crear, editar, completar y eliminar tareas. El proyecto utiliza **Next.js (App Router)** en el frontend y un servidor en **Node.js** con **Express** en el backend. Es un primer acercamiento práctico a este stack y a la organización de aplicaciones completas.

---

## Tecnologías utilizadas

### Frontend

- **Next.js** (App Router)
- **React** (v18)
- **TypeScript**
- **Redux Toolkit** para el manejo de estado
- **Styled-components** para estilos dinámicos
- **React Hook Form** para formularios
- **Axios** para solicitudes HTTP

### Backend

- **Node.js** con **Express** (v4)
- **TypeScript**
- **MongoDB** como base de datos
- **Mongoose** para modelado de datos
- **JWT** para autenticación
- **Dotenv** para configuración de entorno

---

## Instalación

### 1. Clonar el repositorio

````bash
git clone https://github.com/poliferreyra/MERN-todo-list.git
cd MERN-todo-list

### 2. Instalar dependencias

```Puedes usar la consola o la terminal integrada de Visual Studio Code (VSC)

**Backend:**

cd src/app/backend
npm install

**Frontend:**

cd src/app/frontend
npm install
```

### 3. Configuración de Auth0

Para poder usar Auth0 en tu proyecto, sigue los siguientes pasos para generar las claves necesarias y configurarlas en tu entorno local.

## Paso 1: Crear una cuenta en Auth0

1. Visita [Auth0](https://auth0.com/) y regístrate o inicia sesión si ya tienes una cuenta.

## Paso 2: Crear una nueva aplicación

1. En el panel de control de Auth0, ve a la sección de **Applications**.
2. Haz clic en **Create Application**.
3. Elige el tipo de aplicación que deseas crear (por ejemplo, **Web Applications**).
4. Asigna un nombre a tu aplicación y haz clic en **Create**.

## Paso 3: Obtener las credenciales de Auth0

1. En la página de configuración de tu aplicación recién creada, encontrarás los siguientes valores:
   - **Client ID**: Este es el ID de tu cliente, que necesitarás para la configuración.
   - **Client Secret**: Este es el secreto asociado con tu cliente.
   - **Domain**: Este es el dominio de tu aplicación de Auth0, en la forma `https://<tu-dominio>.auth0.com`.
   
   Copia estos valores, ya que los necesitarás en el siguiente paso.

## Paso 4: configuraciones de las variables de entorno

Usa los archivos de ejemplo proporcionados (`.env.example` y `.env.local.example`) como base para configurar tus variables de entorno.

**Backend:**

En el directorio del backend, crea un archivo `.env` con las siguientes variables:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/todo
JWT_SECRET=your_jwt_secret

**Frontend:**

En la raíz del proyecto, crea un archivo `.env.local` con las siguientes variables:

```env.local
AUTH0_SECRET=tu-clave-secreta-aqui
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=https://dev-xyz.auth0.com
AUTH0_CLIENT_ID=tu-client-id-aqui
AUTH0_CLIENT_SECRET=tu-client-secret-aqui
AUTH0_AUDIENCE=http://localhost:4000/api


## Uso

### Iniciar el servidor

**Backend:**

```bash
cd src/app/backend
npm run dev
```

**Frontend:**

```bash
cd src/app/frontend
npm dev:frontend
```

Abre tu navegador en [http://localhost:3000](http://localhost:3000) para acceder a la aplicación.

## Características

- Gestión de tareas con un CRUD completo.
- Autenticación con JWT (JSON Web Tokens).
- Diseño responsivo con React.
- API RESTful para la comunicación entre el frontend y backend.

## Test

Para ejecutar las pruebas, utiliza el siguiente comando en el directorio del backend:

```bash
npm test
```

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama nueva para tu funcionalidad o corrección de errores:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza los cambios necesarios y haz commits:
   ```bash
   git commit -m "Descripción de los cambios"
   ```
4. Envía tus cambios:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Crea un pull request en GitHub.

## Contacto

Para cualquier consulta o sugerencia, puedes contactarme a través de:

- **LinkedIn:** [Poli Ferreyra](https://linkedin.com/in/poliferreyra)
