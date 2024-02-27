import { Injectable } from '@angular/core';
import { openDB } from 'idb';
import { Login } from '../login/login.object';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {
  name = 'SaveData';

  async createDB() {
    openDB(this.name, 1, {
      upgrade(db) {
        db.createObjectStore('User', { keyPath: 'user' });
      }
    });
  }

  async updateUser(permissions: Login) {
    const db = await openDB(this.name, 1);
    const item = await db.getKey('User', permissions.user as string);
    if (item) {
      Swal.fire({ title: 'El usuario ya existe', text: 'El usuario no puede ser duplicado', timer: 5000, icon: 'warning' });
    } else {
      await db.add('User', permissions);
      Swal.fire({ title: 'El usuario fue registrado', text: 'El usuario fue registrado exitosamente', timer: 5000, icon: 'success' });
    }
  }

  async getUser(permissions: Login): Promise<boolean> {
    const db = await openDB(this.name, 1);
    const item = (await db.getAll('User')).find(x => x.user === permissions.user);
    if(item.password === permissions.password) {
      return true;
    }
    return false;
  }
}
