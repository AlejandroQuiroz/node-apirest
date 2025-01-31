# NodeJS PostgreSQL REST API

# API: https://www.youtube.com/watch?v=OtxEG8TIEcE

# 1 - Hacer una cosa y hacerla bien
# 2 - Tener documentación
# 3 - Que la API sea intuitiva
# 4 - Mensajes más descriptivos
# 5 - Evitar cambios disruptivos

# https://slack.engineering/how-we-design-our-apis-at-slack/
# https://www.youtube.com/watch?v=zDTrBT-035c
# https://www.youtube.com/watch?v=IBOYdjjONIw

# https://www.youtube.com/watch?v=zV6W9GrWLPg
# https://www.youtube.com/watch?v=bUmy7Nvsh4s
# https://www.youtube.com/watch?v=usajPd4YMZs

# 1 - Representar recursos y no acciones
# GET /deleteProduct/123 - NO
# DELETE /products/123 - SÍ
# Colecciones (plural) - /products
# Documentos (singular) - /products/1 ó /products/pencil
# Stores (plural) - /users/20/favorites
# Controladores (verbos) - /users/20/reset-password

# 2 - NO devolver siempre 200 OK
# 201 - Recurso creado.
# 202 - Solicitud recibida. En proceso.
# 204 - Solicitud exitosa. Respuesta sin contenido.
# 401 - No autorizado.
# 403 - Acceso prohibido.
# 404 - Recurso no encontrado.
# 405 - Método no permitido.
# 500 - Error interno del servidor.

# 3 - NO hacer todo con POST
# 4 - Asegurar la API API Key, Bearer Token, Basic Auth, OAuth, JWT)
# 5 - Versionar API (/api/v1/))
# 6 - Usar JSON, pero usarlo bien

# No devolver arrays, sino objetos
# Aprender a usar las cabeceras
# No poner información sensible en la URL
# Validar params de entrada

# Pagination / Limit / Offset
# Rate-limit
# Throatling
# Authentication y authorization
# Permitir quién puede ejecutar qué verbo http
# Caching
# Language
# Utilizar https
# Logging
# Middleware

# Carga de imágenes
# Envío de emails
# Login, create account, verify-account, reset-password
