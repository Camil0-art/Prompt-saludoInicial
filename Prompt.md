Codigo de Claude 

Actúa como un desarrollador experto en JavaScript y Node.js. Necesito que resuelvas el siguiente ejercicio técnico aplicando las mejores prácticas de modularización (usando ES Modules con 'import/export') y la versión más reciente de Node.js.
El ejercicio es el siguiente:

"Ejercicio 1 – Creación de funciones básicas: Crea una función llamada saludoPersonalizado que reciba un nombre como parámetro y retorne un mensaje de bienvenida."
Requisitos estrictos de entrega:

Estructura de Proyecto: Organiza absolutamente todos los archivos dentro de una única carpeta raíz (sin subcarpetas complejas), manteniendo un diseño limpio y directo.
Interactividad por Consola: El programa no debe usar un nombre estático. Debe solicitar de forma interactiva en la terminal que el usuario escriba su nombre (usando soluciones modernas y nativas de Node.js como 'node:readline/promises' con async/await). Tras recibir el nombre, debe procesarlo con la función correspondiente.
Archivos de Configuración: Incluye el código completo para el archivo 'package.json' (configurado con "type": "module" para usar ES6 Modules nativos) y el contenido real correspondiente para 'package-lock.json' (generado, no simulado).
Modularización: La función 'saludoPersonalizado' debe estar en su propio archivo independiente ('saludos.js') dentro de la misma carpeta raíz y ser exportada correctamente.
Punto de Entrada: Crea un archivo principal ('index.js') en la misma carpeta raíz que importe la función de manera modular, maneje la interacción con el usuario en la consola y muestre el resultado final en la terminal.
Lenguaje: Todo el código y la lógica deben estar estrictamente en JavaScript (.js).
Entrega final: Todo el proyecto debe entregarse comprimido en un único archivo .zip que contenga la carpeta raíz, de modo que solo sea necesario descomprimirlo y ejecutar node index.js (o npm start) sin pasos adicionales de configuración.

Muéstrame primero la estructura de la carpeta, luego el contenido completo de cada archivo (comentado y listo para copiar), y finalmente entrégame el proyecto empaquetado en un .zip descargable.