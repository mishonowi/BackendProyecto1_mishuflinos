# Registro de bugs: Backend y Base de datos

Cada fila es un commit. Para ver el arreglo exacto: `git show <commit>`.

| Commit | Bugs | Archivos |
|---|---|---|
| `9a14cbc` | B01 RolesGuard global eliminado (roles no se validaban) + B02 JWT expiresIn como string = 3.6 s | src/auth/auth.module.ts |
| `361ee4d` | B03 LoginDto exigia MinLength(12); la clave Secret123! no pasaba | src/auth/dto/login.dto.ts |
| `088e851` | B04 login esperaba 5 s en cada intento | src/auth/auth.service.ts |
| `ef0e67d` | B05 prefijo api/v1, swagger api/doc y puerto APP_PORT/3001 (README: :3000/api y /api/docs) | src/main.ts |
| `1e82e20` | D01 MONGODB_URI con puerto 27018 y JWT_SECRET vacio en .env.example | .env.example |
| `9dfd269` | D02 docker-compose sin volumen mongo_data (los datos se perdian) | docker-compose.yml |
| `3dcccca` | B06 POST /users respondia 400 (HttpCode) + B07 GET /users/me declarado despues de :id | src/users/users.controller.ts |
| `f4ce808` | B08 changePassword no guardaba la clave + B09 busqueda q de usuarios sensible a mayusculas | src/users/users.service.ts |
| `f0ddd94` | B10 UpdateUserDto con campo namesssss + B11 filtro active convertia valores invalidos en false | src/users/dto/user.dto.ts |
| `3655cee` | B12 assertCanManage restringia al estudiante en vez del docente (docentes gestionaban grupos ajenos) | src/groups/groups.service.ts |
| `3e20be0` | B13 GET /groups/mine declarado despues de :id (respondia 400) | src/groups/groups.controller.ts |
| `acce8f6` | D03 grupo c3a dia Miércoles fuera del enum + D04 enrolled 35>capacidad (reales 9) + D05 grupo c3e enrolled 42 (reales 10) + D06 franja jueves invertida 09:00-07:00 en c64 + D07 grupo c99 usaba salon B-104 inactivo/chico | database/groups.json |
| `0bb2a83` | D08 campus Bogota con espacio final en FAC-SAL + D09 decano inexistente en FAC-COM | database/faculties.json |
| `3723b9d` | B14 matricula exitosa lanzaba 400 (condicion invertida) + B15 cancelar matricula no liberaba el cupo del grupo | src/enrollments/enrollments.service.ts |
| `1774116` | B16 GET /enrollments/mine con rol Docente en vez de Estudiante | src/enrollments/enrollments.controller.ts |
| `251218e` | B17 ruta evaluationslalala + B18 crear evaluacion respondia 400 | src/evaluations/evaluations.controller.ts |
| `d7d14cb` | B19 nota maxima 4.5 en DTO (escala 0-5) | src/grades/dto/grade.dto.ts |
| `e9d076f` | B20 nota final 3.0 reprobaba (debe ser >= 3.0) | src/grades/grades.service.ts |
| `5caed46` | B21 ReportsService comentado en ReportsModule (la app no arrancaba) | src/reports/reports.module.ts |
| `4ef8e92` | B22 marcar notificacion como leida no ponia read=true | src/notifications/notifications.service.ts |
| `4297932` | B23 tag de Swagger deletions21312 | src/deletions/deletions.controller.ts |
| `1f6aca4` | D10 periodo 2026-2 con status Abierto fuera del enum (no habia periodo abierto) | database/periods.json |
| `6b18c8f` | D11 MAT101 era prerrequisito de si misma + D12 ODON105 con 0 creditos | database/subjects.json |
| `38b1796` | D13 codigo de programa DERE duplicado (viola unique) | database/programs.json |
| `f6bbe6c` | D14 estudiante E20210046 con programa inexistente | database/students.json |
| `ba13d05` | D15 usuario Laura Lopez con rol Docente (enum) + D16 email con mayusculas | database/users.json |
| `ed60826` | D17 notificacion con type aviso_urgente fuera del enum | database/notifications.json |
| `2e86b8c` | D18 matricula con nota 3.38 en periodo cerrado quedo activa (debe ser aprobada) | database/enrollments.json |
| `211200c` | D19 admin con name vacio + D20 usuario de Laura Lopez inactivo con docente activo + D21 passwordHash truncado de Juliana Herrera (no podia loguear) | database/users.json |
| `5841f07` | D13b se elimina el programa duplicado DERE inyectado (en vez de renombrarlo) | database/programs.json |
| `7fedb03` | D12b ODON105 vuelve a su valor original de 2 creditos | database/subjects.json |
| `2ed3d1f` | D14b E20210046 vuelve a su programa original DERE + D22 estudiante inactivo con matriculas activas | database/students.json |
| `2658b9c` | D09b decano de FAC-COM vuelve al original DOC-050 | database/faculties.json |
| `aac8486` | D23 salon B-104 marcado inactivo aunque lo usan grupos | database/classrooms.json |
| `0f87715` | D24 grupo c3a en salon B-104 con capacidad menor al grupo + D05b enrolled de c3e = 9 matriculas reales | database/groups.json |
| `be677fb` | D25 matricula dfb con materia distinta a la del grupo + D26 matricula e1a con periodo distinto al del grupo + D27 matricula duplicada (student, group) eliminada | database/enrollments.json |
| `681ec59` | D28 evaluacion Taller con peso 30 (el grupo sumaba 110%) | database/evaluations.json |
| `9f4c1be` | D29 notas 5.7 fuera de rango (max 5) + D30 nota guardada como texto 4,2 + D31 nota con evaluacion de otro grupo + D32 notas 3.4 alteradas a 3 | database/grades.json |
| `d40da11` | D33 notificacion con createdAt ayer en vez de fecha | database/notifications.json |
| `756da9a` | B24 filtro read de notificaciones convertia valores invalidos en false | src/notifications/dto/notification.dto.ts |
| `3255093` | B25 editar evaluacion no validaba periodo cerrado (create si) | src/evaluations/evaluations.service.ts |
| `14bace1` | B26 GET /grades/mine ignoraba el filtro evaluation | src/grades/grades.service.ts |
| `40366bb` | B27 dashboard contaba facultades inactivas | src/reports/reports.service.ts |

Verificacion: npm run build OK; datos validados contra scripts/db-seed.js (0 diferencias); prueba de humo 20/20 con los usuarios del README.
