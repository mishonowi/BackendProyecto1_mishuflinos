# Registro de bugs: Backend y Base de datos

Cada fila es un commit. Para ver el arreglo exacto: `git show <commit>`.

| Commit | Bugs | Archivos |
|---|---|---|
| `d9167ed` | B01 RolesGuard global eliminado (roles no se validaban) + B02 JWT expiresIn como string = 3.6 s | src/auth/auth.module.ts |
| `c9def7c` | B03 LoginDto exigia MinLength(12); la clave Secret123! no pasaba | src/auth/dto/login.dto.ts |
| `9eb1338` | B04 login esperaba 5 s en cada intento | src/auth/auth.service.ts |
| `bf2e820` | B05 prefijo api/v1, swagger api/doc y puerto APP_PORT/3001 (README: :3000/api y /api/docs) | src/main.ts |
| `13857e7` | D01 MONGODB_URI con puerto 27018 y JWT_SECRET vacio en .env.example | .env.example |
| `f6572f9` | D02 docker-compose sin volumen mongo_data (los datos se perdian) | docker-compose.yml |
| `45e5c96` | B06 POST /users respondia 400 (HttpCode) + B07 GET /users/me declarado despues de :id | src/users/users.controller.ts |
| `6d108b7` | B08 changePassword no guardaba la clave + B09 busqueda q de usuarios sensible a mayusculas | src/users/users.service.ts |
| `2415ee3` | B10 UpdateUserDto con campo namesssss + B11 filtro active convertia valores invalidos en false | src/users/dto/user.dto.ts |
| `1380f4f` | B12 assertCanManage restringia al estudiante en vez del docente (docentes gestionaban grupos ajenos) | src/groups/groups.service.ts |
| `c2eceac` | B13 GET /groups/mine declarado despues de :id (respondia 400) | src/groups/groups.controller.ts |
| `61476da` | D03 grupo c3a dia Miércoles fuera del enum + D04 enrolled 35>capacidad (reales 9) + D05 grupo c3e enrolled 42 (reales 10) + D06 franja jueves invertida 09:00-07:00 en c64 + D07 grupo c99 usaba salon B-104 inactivo/chico | database/groups.json |
| `15e6e0d` | D08 campus Bogota con espacio final en FAC-SAL + D09 decano inexistente en FAC-COM | database/faculties.json |
| `862fe73` | B14 matricula exitosa lanzaba 400 (condicion invertida) + B15 cancelar matricula no liberaba el cupo del grupo | src/enrollments/enrollments.service.ts |
| `e00c014` | B16 GET /enrollments/mine con rol Docente en vez de Estudiante | src/enrollments/enrollments.controller.ts |
| `114d60b` | B17 ruta evaluationslalala + B18 crear evaluacion respondia 400 | src/evaluations/evaluations.controller.ts |
| `5865b53` | B19 nota maxima 4.5 en DTO (escala 0-5) | src/grades/dto/grade.dto.ts |
| `c756778` | B20 nota final 3.0 reprobaba (debe ser >= 3.0) | src/grades/grades.service.ts |
| `e9af842` | B21 ReportsService comentado en ReportsModule (la app no arrancaba) | src/reports/reports.module.ts |
| `89808d1` | B22 marcar notificacion como leida no ponia read=true | src/notifications/notifications.service.ts |
| `b8826e5` | B23 tag de Swagger deletions21312 | src/deletions/deletions.controller.ts |
| `6c4f002` | D10 periodo 2026-2 con status Abierto fuera del enum (no habia periodo abierto) | database/periods.json |
| `52e6062` | D11 MAT101 era prerrequisito de si misma + D12 ODON105 con 0 creditos | database/subjects.json |
| `c5ceda1` | D13 codigo de programa DERE duplicado (viola unique) | database/programs.json |
| `b7f9e21` | D14 estudiante E20210046 con programa inexistente | database/students.json |
| `403f118` | D15 usuario Laura Lopez con rol Docente (enum) + D16 email con mayusculas | database/users.json |
| `86e2812` | D17 notificacion con type aviso_urgente fuera del enum | database/notifications.json |
| `3c78c3d` | D18 matricula con nota 3.38 en periodo cerrado quedo activa (debe ser aprobada) | database/enrollments.json |
| `7531270` | D19 admin con name vacio + D20 usuario de Laura Lopez inactivo con docente activo + D21 passwordHash truncado de Juliana Herrera (no podia loguear) | database/users.json |
| `233c89c` | D13b se elimina el programa duplicado DERE inyectado (en vez de renombrarlo) | database/programs.json |
| `a7134d7` | D12b ODON105 vuelve a su valor original de 2 creditos | database/subjects.json |
| `6a379f0` | D14b E20210046 vuelve a su programa original DERE + D22 estudiante inactivo con matriculas activas | database/students.json |
| `25f7495` | D09b decano de FAC-COM vuelve al original DOC-050 | database/faculties.json |
| `4b76088` | D23 salon B-104 marcado inactivo aunque lo usan grupos | database/classrooms.json |
| `bd96214` | D24 grupo c3a en salon B-104 con capacidad menor al grupo + D05b enrolled de c3e = 9 matriculas reales | database/groups.json |
| `93dc104` | D25 matricula dfb con materia distinta a la del grupo + D26 matricula e1a con periodo distinto al del grupo + D27 matricula duplicada (student, group) eliminada | database/enrollments.json |
| `3ae158d` | D28 evaluacion Taller con peso 30 (el grupo sumaba 110%) | database/evaluations.json |
| `f207af2` | D29 notas 5.7 fuera de rango (max 5) + D30 nota guardada como texto 4,2 + D31 nota con evaluacion de otro grupo + D32 notas 3.4 alteradas a 3 | database/grades.json |
| `a5c0b41` | D33 notificacion con createdAt ayer en vez de fecha | database/notifications.json |
| `c6f0d42` | B24 filtro read de notificaciones convertia valores invalidos en false | src/notifications/dto/notification.dto.ts |
| `a92a7f6` | B25 editar evaluacion no validaba periodo cerrado (create si) | src/evaluations/evaluations.service.ts |
| `459195e` | B26 GET /grades/mine ignoraba el filtro evaluation | src/grades/grades.service.ts |
| `07a7bc0` | B27 dashboard contaba facultades inactivas | src/reports/reports.service.ts |
| `c65aa42` | B28 POST /enrollments/:id/cancel respondia 201 (accion sin HttpCode 200, como finalize/close/login) | src/enrollments/enrollments.controller.ts |
| `d6eb620` | B29 Swagger ofrecia status cerrado en PATCH /periods/:id (el servicio lo rechaza; se cierra con POST /close) | src/periods/dto/period.dto.ts |
| `2f8e45e` | B30 Swagger de GET /grades no indicaba que enrollment o evaluation es obligatorio (sin ninguno responde 400) | src/grades/grades.controller.ts |
| `a7644eb` | B31 Swagger de totalCredits sin minimum 1 ni tipo integer (DTO: IsInt + Min(1)) | src/programs/dto/program.dto.ts |
| `d0936c8` | B32 Swagger de minCapacity sin minimum 1 ni tipo integer (DTO: IsInt + Min(1)) | src/classrooms/dto/classroom.dto.ts |
| `f1560f4` | B33 Swagger de schedule de grupos sin minItems 1 (DTO: ArrayMinSize(1)) | src/groups/dto/group.dto.ts |
| `cb2827d` | B34 Swagger de PUT /grades/bulk sin minItems 1 ni maxItems 200 (DTO: ArrayMinSize + ArrayMaxSize) | src/grades/dto/grade.dto.ts |
| `235dec5` | B35 Swagger de prerequisites sin uniqueItems (DTO: ArrayUnique) | src/subjects/dto/subject.dto.ts |

Verificacion: npm run build OK; datos validados contra scripts/db-seed.js (0 diferencias); prueba de humo 20/20 con los usuarios del README. Coleccion de Postman "Examen - Endpoints nuevos" (workspace Certi2, environment Local): 263/264 pruebas OK contra el build con B28-B35; la unica falla era una aserción mal escrita en la propia coleccion (student viene como ID en POST /enrollments), ya corregida.
