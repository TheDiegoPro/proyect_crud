
# Restaurant App - (Local Env)

Este proyecto es una aplicación web simple de gestión de productos. Permite crear, visualizar, editar y eliminar productos usando un backend en PHP (sin frameworks), una base de datos MySQL y un frontend en HTML, JavaScript puro y Tailwind CSS.
 

- Crear productos con nombre y precio.
- Visualizar productos en una tabla estilizada.
- Editar productos mediante un modal.
- Eliminar productos con un solo clic.
- Validación de campos (por ejemplo, evitar precios negativos).
- Interfaz moderna y responsiva con Tailwind CSS




  ## Requisitos

- PHP >= 7.4
- MySQL o MariaDB
- Servidor web (Apache, Nginx, o PHP's built-in server, XAMPP)
- Navegador web moderno


## Instalación y Configuración (frontend local)

Clonar el Proyecto 

```bash
  git clone git@github.com:TheDiegoPro/proyect_crud.git
```

Si se esta usando XAMPP utilizar la carpeta htdocs

```bash
  cd xampp\htdocs\proyecto_crud
```

Iniciar servicios e ingresar a la URL del proyecto (MYSQL, Apache)

```bash
  http://localhost/proyecto_crud/frontend/
```

Iniciar 



## Instalación y Configuración (Backend - Base de Datos)

Dentro del repositorio se encuentra la base de datos utilizada, se deberá de importar a MYSQL (preferiblemente PHPmyAdmin)





## Referencias API

#### POST 

```http
POST	/backend/index.php	Crear un nuevo producto	{ name, price }
```


#### GET

```http
GET	/backend/index.php	Obtener todos los productos	
```

#### PUT

```http
PUT	/backend/index.php?id=ID Actualizar un producto existente { name, price }
```

#### DELETE

```http
DELETE	/backend/index.php?id=ID	Eliminar un producto
```


