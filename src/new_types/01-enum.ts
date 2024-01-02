//@ts-check

// Enum es un tipo de dato que permite definir un conjunto de constantes con nombre
// Se puede acceder a los valores de un enum con la notación de punto
// Los valores de un enum pueden ser números o cadenas de texto

export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  username: string;
  role: ROLES;
}

const nicoUser: User = {
  username: 'Nicolas',
  role: ROLES.ADMIN
}

// Libreia para trabajar con enums, Capacitor
