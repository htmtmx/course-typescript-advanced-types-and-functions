//@ts-check
import { User, ROLES } from "../new_types/01-enum";

const currentUser:User = {
  username: 'admin01',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  if (currentUser.role == 'admin') {
    return true;
  }
  return false;
}

const rta = checkAdminRole();
console.log('checkAdminRole: ', rta);

export const checkRole = (role1:string, role2:string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role1) {
    return true;
  }
  return false
}

const rta2 = checkRole(ROLES.CUSTOMER, ROLES.CUSTOMER);
console.log('checkRole', rta2);


export const checkRoleV2 = (roles:string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false
}

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log('checkRoleV2', rta3);


// Para pasar un número indeterminado de parámetros se utiliza el operador rest
// El operador rest es un array con todos los parámetros que se pasan a la función
// Los parámetros rest siempre van al final de la lista de parámetros
// Los parámetros rest se representan con tres puntos suspensivos seguidos del nombre del parámetro
// function checkRoleV3(...roles: string[]){}
export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false
}

const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRoleV3', rta4);