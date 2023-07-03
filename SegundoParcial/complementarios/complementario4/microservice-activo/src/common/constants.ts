export enum RabbitMQ {
  StudentQueue = 'students',
  ActivoQueue = 'activos',
}

export enum StudentMsg {
  CREATE = 'CREATE_STUDENT',
  FIND_ALL = 'FIND_STUDENTS',
  FIND_ONE = 'FIND_STUDENT',
  UPDATE = 'UPDATE_STUDENT',
  DELETE = 'DELETE_STUDENT',
}

export enum ActivoMsg {
  CREATE = 'CREATE_ACTIVO',
  FIND_ALL = 'FIND_ACTIVOS',
  FIND_ONE = 'FIND_ACTIVO',
  UPDATE = 'UPDATE_ACTIVO',
  DELETE = 'DELETE_ACTIVO',
}
