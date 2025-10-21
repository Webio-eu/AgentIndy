
// Inicializace připojení k databázi
import mysql from 'mysql2/promise';
import { DATABASE_URL } from '../env';

export const db = mysql.createPool(DATABASE_URL);
